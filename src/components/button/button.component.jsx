import './button.styles.scss'

const Button = ({ children, className, ...props }) => (
  <button className={`custom-button ${className ?? ''}`} {...props}>
    {children}
  </button>
)

export default Button
