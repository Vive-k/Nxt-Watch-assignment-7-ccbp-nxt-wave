import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import HeaderComponent from '../HeaderComponent'
import NavigationMenuAsLeftSideBar from '../NavigationMenuAsLeftSideBar'
import FailureViewComponent from '../FailureViewComponent'

import {
  NavigationSideBarComponentContainer,
  LoaderComponent,
  LoaderOrFailureContainer,
  HomeComponent,
  TrendingLogo,
  TrendingTopHeadContainer,
  TrendingsContainer,
  TrendingVideoAndDetailsContainer,
  LinkContainer,
  EachVideoThumbnailImage,
  TitleGame,
  GameDetails,
} from './StyledComponents'
import NxtWatchContext from '../../Context/NxtWatchContext'

const dataFetchStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

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

      this.setState({dataFetchStatus: dataFetchStatusConstants.success})
      this.setState({listOfGamesDetails: data.videos})
    }
    if (!response.ok) {
      this.setState({dataFetchStatus: dataFetchStatusConstants.failure})
    }
  }

  renderRoutePartOnDataResponse = lightTheme => {
    const {dataFetchStatus, listOfGamesDetails} = this.state

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
            <FailureViewComponent retryFunction={this.getListOfGamesData} />
          </LoaderOrFailureContainer>
        )
      case dataFetchStatusConstants.success:
        return (
          <>
            <TrendingTopHeadContainer theme={lightTheme}>
              <TrendingLogo as={SiYoutubegaming} />
              <h1>Gaming</h1>
            </TrendingTopHeadContainer>

            <TrendingsContainer data-testid="gaming" theme={lightTheme}>
              {listOfGamesDetails.map(each => (
                <TrendingVideoAndDetailsContainer key={each.id}>
                  <LinkContainer as={Link} to={`/videos/${each.id}`}>
                    <EachVideoThumbnailImage
                      src={each.thumbnail_url}
                      alt="video thumbnail"
                    />
                    <TitleGame value={lightTheme}>{each.title}</TitleGame>
                    <GameDetails>{each.view_count} Watching</GameDetails>
                    <GameDetails>Worldwide</GameDetails>
                  </LinkContainer>
                </TrendingVideoAndDetailsContainer>
              ))}
            </TrendingsContainer>
          </>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <NavigationSideBarComponentContainer>
          <NavigationMenuAsLeftSideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value
              return (
                <HomeComponent>
                  {this.renderRoutePartOnDataResponse(lightTheme)}
                </HomeComponent>
              )
            }}
          </NxtWatchContext.Consumer>
        </NavigationSideBarComponentContainer>
      </div>
    )
  }
}
export default GamingRoute
