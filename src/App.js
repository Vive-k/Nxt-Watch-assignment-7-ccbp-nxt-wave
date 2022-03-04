import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './Context/NxtWatchContext'

import './App.css'

class App extends Component {
  state = {lightTheme: true, likedList: [], dislikedList: [], savedList: []}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  changedAttributesOnThemeChange = () => {
    const {lightTheme} = this.state

    let watchLogoImage
    let failureViewImage
    let notFoundImage

    if (lightTheme) {
      watchLogoImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      failureViewImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
    } else {
      watchLogoImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      failureViewImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      notFoundImage =
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
    }

    const watchLogoImageAlt = 'website logo'
    const failureViewImageAlt = 'failure view'
    const notFoundImageAlt = 'not found'

    return {
      watchLogoImage,
      watchLogoImageAlt,
      failureViewImage,
      failureViewImageAlt,
      notFoundImage,
      notFoundImageAlt,
    }
  }

  addAsLikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (dislikedList.includes(id)) {
      this.setState({dislikedList: dislikedList.filter(each => each !== id)})
    }
    if (likedList.includes(id)) {
      this.setState({likedList: likedList.filter(each => each !== id)})
    } else {
      this.setState({likedList: [...likedList, id]})
    }
  }

  addAsDislikedVideos = id => {
    const {likedList, dislikedList} = this.state
    if (likedList.includes(id)) {
      this.setState({likedList: likedList.filter(each => each !== id)})
    }
    if (dislikedList.includes(id)) {
      this.setState({dislikedList: dislikedList.filter(each => each !== id)})
    } else {
      this.setState({dislikedList: [...dislikedList, id]})
    }
  }

  addOrRemoveAsOrFromSavedVideos = videoDetails => {
    const {savedList} = this.state
    let savedListIds = []
    if (savedList.length !== 0) {
      savedListIds = savedList.map(each => each.id)
    }
    if (savedListIds.includes(videoDetails.id)) {
      this.setState({
        savedList: savedList.filter(each => each.id !== videoDetails.id),
      })
    } else {
      this.setState({savedList: [...savedList, videoDetails]})
    }
  }

  render() {
    const {lightTheme, likedList, dislikedList, savedList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          lightTheme,
          changeTheme: this.changeTheme,
          changedAttributesOnThemeChange: this.changedAttributesOnThemeChange,
          likedList,
          dislikedList,
          savedList,
          addAsLikedVideos: this.addAsLikedVideos,
          addAsDislikedVideos: this.addAsDislikedVideos,
          addOrRemoveAsOrFromSavedVideos: this.addOrRemoveAsOrFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
