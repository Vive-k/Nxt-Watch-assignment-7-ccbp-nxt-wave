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

  renderRoutePartOnDataResponse = () => {
    const {dataFetchStatus, videoDetails} = this.state

    const {channel} = videoDetails

    switch (dataFetchStatus) {
      case dataFetchStatusConstants.loading:
        return (
          <div>
            <div
              className="loader-container"
              data-testid="loader"
              style={{backgroundColor: '#f9f9f9', textAlign: 'center'}}
            >
              <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
            </div>
          </div>
        )
      case dataFetchStatusConstants.failure:
        return (
          <div>
            <FailureViewComponent retryFunction={this.getVideoData} />
          </div>
        )
      case dataFetchStatusConstants.success:
        return (
          <div>
            <ReactPlayer url={videoDetails.video_url} controls />
            <p>{videoDetails.title}</p>

            <div>
              <div>
                <p>{videoDetails.view_count}</p>
                <GoPrimitiveDot />
                <p>
                  {formatDistanceToNow(new Date(videoDetails.published_at), {
                    addSuffix: true,
                  })
                    .split(' ')
                    .slice(1)
                    .join(' ')}
                </p>
              </div>

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

                  /*   const likeButtonText = likedList.includes(id)
                    ? 'Liked'
                    : 'Like'

                  const DislikeButtonText = dislikedList.includes(id)
                    ? 'disliked'
                    : 'dislike' */

                  const savedListIds = savedList.map(each => each.id)

                  const saveButtonText = savedListIds.includes(id)
                    ? 'Saved'
                    : 'Save'

                  return (
                    <div>
                      <button type="button" onClick={addToLiked}>
                        <BiLike /> Like
                      </button>
                      <button type="button" onClick={addToDisLiked}>
                        <BiDislike /> Dislike
                      </button>

                      <button type="button" onClick={toSaveOrUnSave}>
                        <BiListPlus /> {saveButtonText}
                      </button>
                    </div>
                  )
                }}
              </NxtWatchContext.Consumer>
            </div>

            <hr />
            <div>
              <img src={channel.profile_image_url} alt="channel logo" />
              <div>
                <p>{channel.name}</p>
                <p>{channel.subscriber_count} subscribers</p>
                <p>{videoDetails.description}</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  render() {
    console.log('VideoItemDetails')
    console.log(this.props)

    return (
      <div>
        <HeaderComponent />
        <NavigationMenuAsLeftSideBar />
        <div>{this.renderRoutePartOnDataResponse()}</div>
      </div>
    )
  }
}

export default VideoItemDetailsRoute
