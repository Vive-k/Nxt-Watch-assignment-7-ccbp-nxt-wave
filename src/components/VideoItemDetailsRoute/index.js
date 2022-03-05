import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {GoPrimitiveDot} from 'react-icons/go'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import FailureViewComponent from '../FailureViewComponent'
import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  LoaderOrFailureContainer,
  LoaderComponent,
  NavigationAndTrendingPartContainer,
  TrendingVideoAndDetailsContainer,
  TrendingComponentContainer,
  EachVideoThumbnailImage,
  VideoTitle,
  VideoDetailsOptionsContainers,
  ViewsAndUpdatedTimeContainer,
  HorizontalRule,
  ChannelDetailsContainer,
  ChannelImage,
  PrimitiveDot,
  CustomizeButton,
  ButtonContainer,
  ChannelTitle,
  ChannelSubscriber,
} from './StyledComponents'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    dataFetchStatus: dataFetchStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount = () => {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({dataFetchStatus: dataFetchStatusConstants.loading})
    const {match} = this.props
    const {id} = match.params

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })
    if (response.ok) {
      const data = await response.json()

      this.setState({videoDetails: data.video_details})
      this.setState({dataFetchStatus: dataFetchStatusConstants.success})
    }
    if (!response.ok) {
      this.setState({dataFetchStatus: dataFetchStatusConstants.failure})
    }
  }

  renderRoutePartOnDataResponse = lightTheme => {
    const {dataFetchStatus, videoDetails} = this.state

    const {channel} = videoDetails

    switch (dataFetchStatus) {
      case dataFetchStatusConstants.loading:
        return (
          <LoaderOrFailureContainer data-testid="loader" value={lightTheme}>
            <LoaderComponent
              as={Loader}
              type="ThreeDots"
              color="#4f46e5"
              height="50"
              width="50"
            />
          </LoaderOrFailureContainer>
        )
      case dataFetchStatusConstants.failure:
        return (
          <LoaderOrFailureContainer value={lightTheme}>
            <FailureViewComponent retryFunction={this.getVideoData} />
          </LoaderOrFailureContainer>
        )
      case dataFetchStatusConstants.success:
        return (
          <TrendingVideoAndDetailsContainer>
            <EachVideoThumbnailImage
              as={ReactPlayer}
              url={videoDetails.video_url}
              controls
              width="100%"
              height="70vh"
            />

            <VideoTitle value={lightTheme}>{videoDetails.title}</VideoTitle>

            <VideoDetailsOptionsContainers>
              <ViewsAndUpdatedTimeContainer>
                <p>{videoDetails.view_count} Views </p>
                <PrimitiveDot as={GoPrimitiveDot} />
                <p>
                  {formatDistanceToNow(new Date(videoDetails.published_at), {
                    addSuffix: true,
                  })
                    .split(' ')
                    .slice(1)
                    .join(' ')}
                </p>
              </ViewsAndUpdatedTimeContainer>

              <NxtWatchContext.Consumer>
                {value => {
                  const {
                    likedList,
                    dislikedList,
                    savedList,
                    addAsLikedVideos,
                    addAsDislikedVideos,
                    addOrRemoveAsOrFromSavedVideos,
                  } = value

                  const {match} = this.props
                  const {id} = match.params

                  const addToLiked = () => {
                    addAsLikedVideos(id)
                  }

                  const addToDisLiked = () => {
                    addAsDislikedVideos(id)
                  }

                  const toSaveOrUnSave = () => {
                    addOrRemoveAsOrFromSavedVideos(videoDetails)
                  }

                  /*  const likeButtonText = likedList.includes(id)

                  const DislikeButtonText = dislikedList.includes(id) */

                  const savedListIds = savedList.map(each => each.id)

                  const saveButtonText = savedListIds.includes(id)
                    ? 'Saved'
                    : 'Save'

                  return (
                    <ButtonContainer>
                      <CustomizeButton
                        type="button"
                        onClick={addToLiked}
                        value={likedList.includes(id)}
                      >
                        <BiLike /> Like
                      </CustomizeButton>
                      <CustomizeButton
                        type="button"
                        onClick={addToDisLiked}
                        value={dislikedList.includes(id)}
                      >
                        <BiDislike /> Dislike
                      </CustomizeButton>

                      <CustomizeButton
                        type="button"
                        onClick={toSaveOrUnSave}
                        value={savedListIds.includes(id)}
                      >
                        <BiListPlus /> {saveButtonText}
                      </CustomizeButton>
                    </ButtonContainer>
                  )
                }}
              </NxtWatchContext.Consumer>
            </VideoDetailsOptionsContainers>

            <HorizontalRule />
            <ChannelDetailsContainer>
              <ChannelImage
                src={channel.profile_image_url}
                alt="channel logo"
              />
              <div>
                <ChannelTitle value={lightTheme}>{channel.name}</ChannelTitle>
                <ChannelSubscriber>
                  {channel.subscriber_count} subscribers
                </ChannelSubscriber>
                <ChannelSubscriber>
                  {videoDetails.description}
                </ChannelSubscriber>
              </div>
            </ChannelDetailsContainer>
          </TrendingVideoAndDetailsContainer>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <NavigationAndTrendingPartContainer>
          <NavigationMenuAsLeftSideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value
              return (
                <TrendingComponentContainer
                  data-testid="videoItemDetails"
                  value={lightTheme}
                >
                  {this.renderRoutePartOnDataResponse(lightTheme)}
                </TrendingComponentContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationAndTrendingPartContainer>
      </div>
    )
  }
}

export default VideoItemDetailsRoute
