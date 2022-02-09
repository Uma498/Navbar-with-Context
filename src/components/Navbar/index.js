import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navbarBgClassName = isDarkTheme
        ? 'navbar-dark-bg'
        : 'navbar-light-bg'

      const navLinkClassName = isDarkTheme ? 'nav-link-dark' : 'nav-link-light'

      return (
        <div className={`navbar-bg ${navbarBgClassName}`}>
          <div className="navbar-content">
            <img
              src={websiteLogoUrl}
              alt="website logo"
              className="website-logo-img"
            />
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${navLinkClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${navLinkClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              testid="theme"
              type="button"
              className="theme-button"
              onClick={onToggleTheme}
            >
              <img src={themeUrl} alt="theme" className="theme-img" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
