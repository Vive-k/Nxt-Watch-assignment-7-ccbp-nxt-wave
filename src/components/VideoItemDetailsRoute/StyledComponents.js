import styled from 'styled-components'

export const NavigationAndTrendingPartContainer = styled.div`
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
    height: 97%;
  }
`
export const LoaderComponent = styled.div`
  display: flex;
`

export const TrendingComponentContainer = styled.div`
  width: 100%;
  margin: 0;

  background-color: ${props => (props.value === true ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 576px) {
    height: 120vh;
    overflow-y: scroll;
  }
`
export const TrendingVideoAndDetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    margin-bottom: 20px;
    align-items: flex-start;
  }
`
export const EachVideoThumbnailImage = styled.div`
  width: 100%;
  padding-top: 20px;
`
export const VideoTitle = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 500;
  color: ${props => (props.value === true ? null : '#ffffff')};
`
export const VideoDetailsOptionsContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`
export const ViewsAndUpdatedTimeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #475569;
  padding: 10px;

  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const HorizontalRule = styled.hr`
  border: 0.5px solid #cccccc;
  background-color: #cccccc;
  width: 100%;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ChannelImage = styled.img`
  width: 5%;
  padding-top: 20px;
`

export const PrimitiveDot = styled.p`
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const CustomizeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bolder;
  color: ${props => (props.value === true ? '#2563eb' : '#64748b')};
`

export const ChannelTitle = styled.p`
  color: #181818;
  font-weight: 600;
  color: ${props => (props.value === true ? null : '#ffffff')};
`
export const ChannelSubscriber = styled.p`
  color: #64748b;
`
