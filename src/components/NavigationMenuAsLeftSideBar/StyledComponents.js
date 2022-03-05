import styled from 'styled-components'

export const NavigationMenuContainerWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    background-color: transparent;
    height: 120vh;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    width: 242px;
    background-color: ${props => (props.value === true ? null : '#000000')};
  }
`
export const NavigationItemsContainer = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
export const EachNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${props => (props.theme === true ? ' #475569' : '#ebebeb')};
  font-weight: 500;
  margin-bottom: 10px;
  height: 35px;
  margin-right: 0;
  margin-left: 0;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  width: 240px;
  background-color: ${props => {
    if (props.selection === true) {
      return props.theme === true ? '#e2e8f0' : '#212121'
    }
    return null
  }};
`
export const NavigationRouteNames = styled.p`
  margin: 30px;
  font-size: 18px;
  padding-bottom: 3px;
`
export const NavigationContactContainer = styled.div`
  width: 100%;
  font-weight: 700;
  color: ${props => (props.value === true ? '#1e293b' : '#cbd5e1')};
  padding: 20px;
`
export const NavigationContactImages = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const NavigationContainerFootLine = styled.p`
  color: #475569;
  font-weight: 500;
`
export const Icon = styled.p`
  color: ${props => (props.selection === true ? 'red' : null)};
`
