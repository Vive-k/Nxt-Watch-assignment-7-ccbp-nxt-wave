import NxtWatchContext from '../../Context/NxtWatchContext'
import {
  FailureViewImage,
  FailureTextSomethingWentWrong,
  HavingTroubleText,
  RetryButton,
} from './StyledComponent'

const FailureViewComponent = props => {
  const {retryFunction} = props

  const retry = () => {
    retryFunction()
  }

  console.log('failure view component')
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {changedAttributesOnThemeChange} = value
        const {
          failureViewImage,
          failureViewImageAlt,
        } = changedAttributesOnThemeChange()

        return (
          <div>
            <FailureViewImage
              src={failureViewImage}
              alt={failureViewImageAlt}
            />
            <FailureTextSomethingWentWrong>
              Oops! Something Went Wrong
            </FailureTextSomethingWentWrong>
            <HavingTroubleText>
              We are having some trouble to complete your request. Please try
              again.
            </HavingTroubleText>
            <RetryButton type="button" onClick={retry}>
              Retry
            </RetryButton>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureViewComponent
