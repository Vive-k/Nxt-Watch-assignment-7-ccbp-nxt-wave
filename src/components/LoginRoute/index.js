import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../Context/NxtWatchContext'

// const LoginRoute = props =>
class LoginRoute extends Component {
  state = {
    showPasswordStatus: false,
    usernameInput: '',
    passwordInput: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  changeShowPasswordStatus = () => {
    this.setState(prevState => ({
      showPasswordStatus: !prevState.showPasswordStatus,
    }))
  }

  takingUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  takingPasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  loginCredentialsSubmission = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    }
    if (!response.ok) {
      this.setState({showErrorMessage: true, errorMessage: data.error_msg})
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <NxtWatchContext.Consumer>
          {value => {
            const {changedAttributesOnThemeChange} = value

            const {
              showPasswordStatus,
              showErrorMessage,
              errorMessage,
            } = this.state

            const passwordInputType = showPasswordStatus ? 'text' : 'password'

            const {
              watchLogoImage,
              watchLogoImageAlt,
            } = changedAttributesOnThemeChange()

            return (
              <form onSubmit={this.loginCredentialsSubmission}>
                <div>
                  <img src={watchLogoImage} alt={watchLogoImageAlt} />
                </div>
                <label htmlFor="usernameInputField">USERNAME</label>
                <div>
                  <input
                    type="text"
                    id="usernameInputField"
                    placeholder="Username"
                    onChange={this.takingUsernameInput}
                  />
                </div>

                <label htmlFor="passwordInputField">PASSWORD</label>
                <div>
                  <input
                    type={passwordInputType}
                    id="passwordInputField"
                    placeholder="Password"
                    onChange={this.takingPasswordInput}
                  />
                </div>
                <div>
                  <input
                    id="showPasswordInputField"
                    type="checkbox"
                    onChange={this.changeShowPasswordStatus}
                  />
                  <label htmlFor="showPasswordInputField">Show Password</label>
                </div>
                <button type="submit">Login</button>
                {showErrorMessage && <p>*{errorMessage}</p>}
              </form>
            )
          }}
        </NxtWatchContext.Consumer>
      </div>
    )
  }
}

export default LoginRoute
