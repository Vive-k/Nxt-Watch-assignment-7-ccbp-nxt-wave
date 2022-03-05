import {HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {GoPrimitiveDot} from 'react-icons/go'
import {formatDistanceToNow} from 'date-fns'

import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  LoaderOrFailureContainer,
  NoSearchResultsImage,
  NavigationAndSavedPartContainer,
  SavedTopHeadContainer,
  SavedLogo,
  SavedVideoContainer,
  SavedVideoAndDetailsContainer,
  LinkContainer,
  EachVideoThumbnailImage,
  ChannelLogoVideoTitleInformationContainer,
  ChannelLogoImage,
  VideoTitleInformationContainer,
  VideoTitle,
  VideoInformation,
  ChannelTitle,
  ChannelViewAndUpdatedTimeContainer,
  PrimitiveDotChangingScreens,
  ChannesViewsAndUpdatedTime,
  PrimitiveDot,
  TextNoSavedVideos,
  SavedVideosComponentContainer,
  NoSavedVideo,
} from './StyledComponents'

const SavedVideosRoute = () => (
  <div>
    <HeaderComponent />
    <NavigationAndSavedPartContainer>
      <NavigationMenuAsLeftSideBar />
      <NxtWatchContext.Consumer>
        {value => {
          const {savedList, lightTheme} = value
          return (
            <SavedVideosComponentContainer>
              {savedList.length === 0 ? (
                <LoaderOrFailureContainer
                  data-testid="savedVideos"
                  value={lightTheme}
                >
                  <NoSearchResultsImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoSavedVideo value={lightTheme}>
                    No saved videos found
                  </NoSavedVideo>
                  <TextNoSavedVideos>
                    You can save your videos while watching them
                  </TextNoSavedVideos>
                </LoaderOrFailureContainer>
              ) : (
                <>
                  <SavedTopHeadContainer value={lightTheme}>
                    <SavedLogo as={HiFire} />
                    <h1>Saved Videos</h1>
                  </SavedTopHeadContainer>

                  <SavedVideoContainer value={lightTheme}>
                    {savedList.map(each => {
                      const {channel} = each

                      return (
                        <SavedVideoAndDetailsContainer key={each.id}>
                          <LinkContainer as={Link} to={`/videos/${each.id}`}>
                            <EachVideoThumbnailImage
                              src={each.thumbnail_url}
                              alt="video thumbnail"
                            />
                            <ChannelLogoVideoTitleInformationContainer>
                              <ChannelLogoImage
                                src={channel.profile_image_url}
                                alt="channel logo"
                              />
                              <VideoTitleInformationContainer>
                                <VideoTitle value={lightTheme}>
                                  {each.title}
                                </VideoTitle>
                                <VideoInformation>
                                  <ChannelTitle value={lightTheme}>
                                    {channel.name}
                                  </ChannelTitle>
                                  <ChannelViewAndUpdatedTimeContainer>
                                    <PrimitiveDotChangingScreens
                                      as={GoPrimitiveDot}
                                    />
                                    <ChannesViewsAndUpdatedTime>
                                      {each.view_count} views
                                    </ChannesViewsAndUpdatedTime>
                                    <PrimitiveDot as={GoPrimitiveDot} />
                                    <ChannesViewsAndUpdatedTime>
                                      {/* each.published_at */}
                                      {formatDistanceToNow(
                                        new Date(each.published_at),
                                        {
                                          addSuffix: true,
                                        },
                                      )
                                        .split(' ')
                                        .reverse()
                                        .slice(0, 3)
                                        .reverse()
                                        .join(' ')}
                                    </ChannesViewsAndUpdatedTime>
                                  </ChannelViewAndUpdatedTimeContainer>
                                </VideoInformation>
                              </VideoTitleInformationContainer>
                            </ChannelLogoVideoTitleInformationContainer>
                          </LinkContainer>
                        </SavedVideoAndDetailsContainer>
                      )
                    })}
                  </SavedVideoContainer>
                </>
              )}
            </SavedVideosComponentContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    </NavigationAndSavedPartContainer>
  </div>
)

export default SavedVideosRoute
