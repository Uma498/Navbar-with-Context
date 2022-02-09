import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgContainerClassName = isDarkTheme
        ? 'not-found-dark-bg'
        : 'not-found-light-bg'

      const notFoundTextClassName = isDarkTheme
        ? 'not-found-dark-text'
        : 'not-found-light-text'

      const notFoundContentClassName = isDarkTheme
        ? 'not-found-dark-content'
        : 'not-found-light-content'

      return (
        <div className={`not-found-container ${notFoundBgContainerClassName}`}>
          <Navbar />
          <div className="not-found-page-container">
            <div className="not-found-page">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className={`not-found-text ${notFoundTextClassName}`}>
                Lost Your Way?
              </h1>

              <p className={`not-found-content ${notFoundContentClassName}`}>
                We Cannot seem to find the page
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
