import styled from 'styled-components'

export const NavigationAndSavedPartContainer = styled.div`
  display: flex;
`

export const LoaderOrFailureContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.value === true ? '#f4f4f4' : '#0f0f0f')};
  height: 97vh;
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const NoSearchResultsImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
`
export const SavedTopHeadContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#0f0f0f')};
  padding-left: 10px;
  color: ${props => (props.value === true ? null : '#f4f4f4')};
`

export const SavedLogo = styled.p`
  background-color: #e2e8f0;
  font-size: 50px;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
  color: #ff0b37;
`
export const SavedVideosComponentContainer = styled.div`
  width: 100%;
`

export const SavedVideoContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;

  background-color: ${props => (props.value === true ? '#f4f4f4' : '#0f0f0f')};
  margin: 0;
  height: 108vh;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
    padding-top: 10px;
    overflow-y: scroll;
  }
`

export const SavedVideoAndDetailsContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    margin-bottom: 20px;
  }
`
export const EachVideoThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding-top: 20px;
  }
`
export const LinkContainer = styled.div`
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
  }
`

export const ChannelLogoVideoTitleInformationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`
export const ChannelLogoImage = styled.img`
  width: 10%;
  margin-left: 10px;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitleInformationContainer = styled.div`
  padding-left: 15px;
  margin: 0;
`
export const VideoTitle = styled.p`
  color: ${props => (props.value === true ? '#0f0f0f' : '#ffffff')};
  font-weight: 600;
  margin-bottom: 0;
  padding-bottom: 0;
`
export const VideoInformation = styled.div`
  color: #475569;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
  }
`

export const ChannelTitle = styled.p`
  padding-top: 0;
  padding-right: 5px;
  padding-bottom: 10px;
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => (props.value === true ? '#000000' : '#ffffff')};
  @media screen and (min-width: 576px) {
    width: 100%;
    padding-bottom: 0;
  }
`
export const ChannelViewAndUpdatedTimeContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0;
  margin-top: 0;
`

export const ChannesViewsAndUpdatedTime = styled.p`
  margin-top: 0px;
  padding-top: 5px;
  padding-right: 5px;
`

export const PrimitiveDotChangingScreens = styled.p`
  padding-right: 5px;
  padding-bottom: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const PrimitiveDot = styled.p`
  padding-right: 5px;
  padding-bottom: 5px;
`
export const TextNoSavedVideos = styled.p`
  color: #475569;
  font-weight: 500;
`
export const NoSavedVideo = styled.h1`
  color: ${props => (props.value === true ? '#000000' : '#ffffff')};
`
