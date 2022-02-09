import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgContainerClassName = isDarkTheme
        ? 'home-dark-bg'
        : 'home-light-bg'

      const homeThemeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme
        ? 'home-light-text'
        : 'home-dark-text'

      return (
        <div className={`home-bg-container ${homeBgContainerClassName}`}>
          <Navbar />
          <div className="home-page-container">
            <div className="home-page">
              <img src={homeThemeUrl} alt="home" className="home-img" />
              <h1 className={`home-text ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
