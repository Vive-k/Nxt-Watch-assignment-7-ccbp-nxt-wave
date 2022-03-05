import styled from 'styled-components'

export const NavigationAndComponentContainer = styled.div`
  display: flex;
`
export const LoaderOrFailureContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 97vh;
  width: 100%;

  background-color: ${props => (props.value === false ? '#0f0f0f' : '#f4f4f4')};

  @media screen and (min-width: 768px) {
    height: 120vh;
  }
`

export const FailureViewImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
  background-color: ${props => (props.value === true ? null : '#0f0f0f')};
`
export const NotFound = styled.h1`
  color: ${props => (props.value === true ? null : '#fefefe')};
`
