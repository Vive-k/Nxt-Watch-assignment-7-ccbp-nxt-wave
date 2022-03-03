import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import FailureViewComponent from '../FailureViewComponent'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

// const GamingRoute = props =>
class GamingRoute extends Component {
  state = {
    listOfGamesDetails: [],
    dataFetchStatus: dataFetchStatusConstants.initial,
  }

  componentDidMount = () => {
    this.getListOfGamesData()
  }

  getListOfGamesData = async () => {
    this.setState({dataFetchStatus: dataFetchStatusConstants.loading})
    const response = await fetch('https://apis.ccbp.in/videos/gaming', {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })
    if (response.ok) {
      const data = await response.json()
      console.log('**************')
      console.log(data.videos)

      this.setState({dataFetchStatus: dataFetchStatusConstants.success})
      this.setState({listOfGamesDetails: data.videos})
    }
    if (!response.ok) {
      this.setState({dataFetchStatus: dataFetchStatusConstants.failure})
    }
    console.log('fetching data function complete')
  }

  renderRoutePartOnDataResponse = () => {
    const {dataFetchStatus, listOfGamesDetails} = this.state

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
            <FailureViewComponent retryFunction={this.getListOfGamesData} />
          </div>
        )
      case dataFetchStatusConstants.success:
        return (
          <>
            <div>
              <SiYoutubegaming style={{color: 'red', fontSize: '35px'}} />
              <h1>Gaming</h1>
            </div>
            <ul>
              {listOfGamesDetails.map(each => (
                <li key={each.id}>
                  <Link to={`/videos/${each.id}`}>
                    <img src={each.thumbnail_url} alt="video thumbnail" />
                    <p>{each.title}</p>
                    <p>{each.view_count} Watching</p>
                    <p>Worldwide</p>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )
      default:
        return null
    }
  }

  render() {
    console.log('Gaming')

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
export default GamingRoute
