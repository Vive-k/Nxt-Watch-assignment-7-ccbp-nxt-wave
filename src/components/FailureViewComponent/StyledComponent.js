import styled from 'styled-components'

export const FailureViewImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
  background-color: ${props => (props.value === true ? null : '#0f0f0f')};
`

export const FailureTextSomethingWentWrong = styled.h1`
  font-size: 25px;
  margin-bottom: 0;
  color: ${props => (props.value === false ? '#f4f4f4' : null)};
`

export const HavingTroubleText = styled.p`
  color: #475569;
  font-weight: 500;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
`
