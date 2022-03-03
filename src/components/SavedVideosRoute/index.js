import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'
import {formatDistanceToNow} from 'date-fns'

import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import NxtWatchContext from '../../Context/NxtWatchContext'

const SavedVideosRoute = props => {
  console.log('SavedVideosRoute')
  console.log(props)
  return (
    <div>
      <HeaderComponent />
      <NavigationMenuAsLeftSideBar />
      <NxtWatchContext.Consumer>
        {value => {
          const {savedList} = value
          return (
            <div>
              {savedList.length === 0 ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </div>
              ) : (
                <>
                  <div>
                    <HiFire style={{color: 'red', fontSize: '35px'}} />
                    <h1>Saved Videos</h1>
                  </div>
                  <ul>
                    {savedList.map(each => {
                      const {channel} = each

                      return (
                        <li key={each.id}>
                          <Link to={`/videos/${each.id}`}>
                            <img
                              src={each.thumbnail_url}
                              alt="video thumbnail"
                            />
                            <div>
                              <p>{each.title}</p>
                              <div>
                                <p>{channel.name}</p>
                                <GoPrimitiveDot />
                                <p>{each.view_count} views</p>
                                <GoPrimitiveDot />
                                <p>
                                  {formatDistanceToNow(
                                    new Date(each.published_at),
                                    {
                                      addSuffix: true,
                                    },
                                  )
                                    .split(' ')
                                    .slice(1)
                                    .join(' ')}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    </div>
  )
}

export default SavedVideosRoute
