import React from 'react'

const NxtWatchContext = React.createContext({
  lightTheme: true,
  changeThemeAndAttributes: () => {},
  changedAttributesOnThemeChange: () => {},
  likedList: [],
  dislikedList: [],
  savedList: [],
  addAsLikedVideos: () => {},
  addAsDislikedVideos: () => {},
  addOrRemoveAsOrFromSavedVideos: () => {},
})

export default NxtWatchContext
