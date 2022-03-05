import styled from 'styled-components'

export const NavigationSideBarComponentContainer = styled.div`
  display: flex;
`

export const LoaderOrFailureContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 97vh;
  background-color: ${props => (props.value === false ? '#0f0f0f' : '#f4f4f4')};

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`
export const LoaderComponent = styled.div`
  display: flex;
`

export const HomeComponent = styled.div`
  background-color: #f4f4f4;
  padding: 0;
  flex-grow: 1;
`
export const TrendingTopHeadContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.theme === true ? null : '#ffffff')};
  background-color: ${props => (props.theme === true ? '#f9f9f9' : '#0f0f0f')};
  padding-left: 10px;
  margin: 0;
`

export const TrendingLogo = styled.p`
  background-color: #e2e8f0;
  font-size: 50px;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
  color: #ff0b37;
`
export const TrendingsContainer = styled.ul`
  padding-left: 0;
  list-style-type: none;
  width: 100%;
  background-color: ${props => (props.theme === true ? '#f4f4f4' : '#0f0f0f')};
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 576px) {
    padding-left: 20px;
    padding-top: 20px;
    height: 110vh;

    overflow-y: scroll;
  }
`

export const TrendingVideoAndDetailsContainer = styled.div`
  width: 40%;
  margin-right: 20px;

  @media screen and (min-width: 576px) {
    margin-bottom: 20px;
    margin-right: 3%;
    width: 30%;
  }
`

export const LinkContainer = styled.div`
  text-decoration: none;
`
export const EachVideoThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 100%;
    padding-top: 20px;
  }
`
export const TitleGame = styled.p`
  font-size: 20px;
  font-weight: 700;

  margin: 0;
  padding: 0;
  color: ${props => (props.value === true ? null : '#ffffff')};
`

export const GameDetails = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #7e858e;
  padding: 0;
  margin: 0;
`
