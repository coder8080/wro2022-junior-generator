import { useState } from 'react'
import WROLogo from '../../assets/wro-logo.png'

import './header.styles.scss'

const Header = () => {
  const [active, setActive] = useState(false)
  const toggleMenu = () => setActive((prev) => !prev)
  return (
    <div className="header">
      <nav className="nav">
        <span className="logo">
          <img src={WROLogo} alt="WRO" />
          Generator
        </span>
        <div className={`menu ${active ? 'active' : ''}`}>
          <span className="nav-close" onClick={toggleMenu}>
            <i className="ri-close-line"></i>
          </span>
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="https://github.com/coder8080/wro2022-junior-generator"
                className="link"
              >
                <i className="ri-github-fill"></i> Github
              </a>
            </li>
          </ul>
        </div>
        <span className="nav-open" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </span>
      </nav>
    </div>
  )
}

export default Header
