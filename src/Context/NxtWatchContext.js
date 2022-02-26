import React from 'react'

const NxtWatchContext = React.createContext({
  lightTheme: true,
  changeTheme: () => {},
})

export default NxtWatchContext
