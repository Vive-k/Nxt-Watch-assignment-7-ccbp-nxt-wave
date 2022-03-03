import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import NxtWatchContext from '../../Context/NxtWatchContext'

const NotFoundRoute = props => {
  console.log('NotFoundRoute')
  console.log(props)
  return (
    <div>
      <HeaderComponent />
      <NavigationMenuAsLeftSideBar />
      <NxtWatchContext.Consumer>
        {value => {
          const {changedAttributesOnThemeChange} = value
          const {
            notFoundImage,
            notFoundImageAlt,
          } = changedAttributesOnThemeChange()

          return (
            <div>
              <img src={notFoundImage} alt={notFoundImageAlt} />
              <h1>Page Not Found</h1>
              <p>we are sorry, the page you requested could not be found.</p>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    </div>
  )
}

export default NotFoundRoute
