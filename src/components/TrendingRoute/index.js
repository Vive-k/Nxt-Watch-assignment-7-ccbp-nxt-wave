import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {GoPrimitiveDot} from 'react-icons/go'
import {HiFire} from 'react-icons/hi'

import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import FailureViewComponent from '../FailureViewComponent'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

// const TrendingRoute = props =>
class TrendingRoute extends Component {
  state = {
    listOfVideosDetails: [],
    dataFetchStatus: dataFetchStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getListOfVideosData()
  }

  getListOfVideosData = async () => {
    this.setState({dataFetchStatus: dataFetchStatusConstants.loading})
    const response = await fetch('https://apis.ccbp.in/videos/trending', {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })
    if (response.ok) {
      const data = await response.json()

      console.log(data.videos)

      this.setState({dataFetchStatus: dataFetchStatusConstants.success})
      this.setState({listOfVideosDetails: data.videos})
    }
    if (!response.ok) {
      this.setState({dataFetchStatus: dataFetchStatusConstants.failure})
    }
    console.log('fetching data function complete')
  }

  renderRoutePartOnDataResponse = () => {
    const {dataFetchStatus, listOfVideosDetails} = this.state

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
            <FailureViewComponent retryFunction={this.getListOfVideosData} />
          </div>
        )
      case dataFetchStatusConstants.success:
        return (
          <>
            <div>
              <HiFire style={{color: 'red', fontSize: '35px'}} />
              <h1>Trending</h1>
            </div>
            <ul>
              {listOfVideosDetails.map(each => {
                const {channel} = each

                return (
                  <li key={each.id}>
                    <Link to={`/videos/${each.id}`}>
                      <img src={each.thumbnail_url} alt="video thumbnail" />
                      <div>
                        <p>{each.title}</p>
                        <div>
                          <p>{channel.name}</p>
                          <GoPrimitiveDot />
                          <p>{each.view_count} views</p>
                          <GoPrimitiveDot />
                          <p>
                            {each.published_at}
                            {/* {formatDistanceToNow(new Date(each.published_at), {
                              addSuffix: true,
                            })
                              .split(' ')
                              .slice(1)
                              .join(' ')} */}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </>
        )
      default:
        return null
    }
  }

  render() {
    console.log('TrendingRoute')
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

export default TrendingRoute
