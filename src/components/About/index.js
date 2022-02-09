import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgContainerClassName = isDarkTheme
        ? 'about-dark-bg'
        : 'about-light-bg'

      const aboutThemeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-light-text'
        : 'about-dark-text'

      return (
        <div className={`about-bg-container ${aboutBgContainerClassName}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-page">
              <img src={aboutThemeUrl} alt="about" className="about-img" />
              <h1 className={`about-text ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
