import { useRef, useState, useEffect } from 'react'
import FieldImageSource from '../../assets/field.png'
import ELEMENT_POSITIONS from './field.data'

import Button from '../../components/button/button.component'
import './homepage.styles.scss'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const HomePage = () => {
  const [field, setField] = useState({
    brown: [null, null],
    red: [null, null],
    yellow: [null, null],
    green: [null, null],
    blue: [null, null],
    white: [null, null],
  })

  const generateField = () => {
    let availableElements = [
      'fire',
      'chemical',
      'blue-man',
      'green-man',
      'fire',
    ]
    let availableZones = ['brown', 'red', 'yellow', 'green', 'blue', 'white']
    let newField = {
      brown: [null, null],
      red: [null, null],
      yellow: [null, null],
      green: [null, null],
      blue: [null, null],
      white: [null, null],
    }
    while (availableElements.length > 0) {
      const elementIndex = getRandomInt(availableElements.length)
      const zoneIndex = getRandomInt(availableZones.length)
      const positionIndex = getRandomInt(2)
      newField[availableZones[zoneIndex]][positionIndex] =
        availableElements[elementIndex]
      availableElements.splice(elementIndex, 1)
      availableZones.splice(zoneIndex, 1)
    }
    setField(newField)
  }

  const CanvasRef = useRef()

  useEffect(() => {
    // Draw background

    const canvas = CanvasRef.current
    const ctx = canvas.getContext('2d')

    const fieldImage = new Image()
    fieldImage.src = FieldImageSource
    fieldImage.addEventListener('load', function () {
      // Fix canvas DPI
      let dpi = window.devicePixelRatio
      let style_height = +getComputedStyle(canvas)
        .getPropertyValue('height')
        .slice(0, -2)
      let style_width = +getComputedStyle(canvas)
        .getPropertyValue('width')
        .slice(0, -2)
      canvas.setAttribute('height', style_height * dpi)
      canvas.setAttribute('width', style_width * dpi)

      ctx.drawImage(fieldImage, 0, 0, canvas.width, canvas.height)
    })
  }, [])

  useEffect(() => {
    // Draw elements

    const canvas = CanvasRef.current
    const ctx = canvas.getContext('2d')

    for (let [key, value] of Object.entries(field)) {
      for (let [i, position] of value.entries()) {
        if (position === 'fire') {
          ctx.fillStyle = 'rgb(255, 0, 0)'
        } else if (position === 'chemical') {
          ctx.fillStyle = 'rgb(0, 0, 0)'
        } else if (position === 'blue-man') {
          ctx.fillStyle = 'rgb(0, 0, 255)'
        } else if (position === 'green-man') {
          ctx.fillStyle = 'rgb(0, 200, 0)'
        } else if (position === null) {
          ctx.fillStyle = 'rgb(240, 240, 240)'
        } else {
          throw new Error(`Unknown elemnt: ${position}`)
        }
        const [x, y] = ELEMENT_POSITIONS[key][i]

        ctx.fillRect(
          x * canvas.width,
          y * canvas.height,
          0.0277 * canvas.height,
          0.0277 * canvas.height
        )
      }
    }
  }, [field])

  return (
    <div className="homepage">
      <canvas ref={CanvasRef}>
        Ваш браузер не поддерживает отрисовку. Обновите его
      </canvas>
      <Button onClick={generateField}>Generate</Button>
    </div>
  )
}

export default HomePage
