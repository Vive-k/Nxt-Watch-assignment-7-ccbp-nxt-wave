import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../Context/NxtWatchContext'

import {
  HeaderNav,
  HeaderItemsContainer,
  HeaderItems,
  HeaderProfileImage,
  HeaderLargeDisplayLogoutButtonContainer,
  HeaderWebsiteLogoImage,
  HeaderItemsButton,
  HeaderHamburgerLogoutPopUp,
  HeaderLargeDisplayLogoutButton,
  PoppingContainer,
  PopUpCloseButton,
  PopUpContentsContainer,
  PopUpContents,
  EachPopUpNavigationContainer,
  EachNavigationItemInPopUp,
  EachNavigationItemName,
  LogoutPopUpContainer,
  LogoutPopUpText,
  LogoutPopUpCancelButton,
  LogoutPopUpConfirmButton,
  CancelConfirmButtons,
  SunButton,
  Icons,
  IconPopUp,
} from './StyledComponents'

const HeaderComponent = props => {
  const sessionOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const {match} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme, changeTheme, changedAttributesOnThemeChange} = value

        const themeChange = () => {
          changeTheme()
        }

        const {
          watchLogoImage,
          watchLogoImageAlt,
        } = changedAttributesOnThemeChange()

        return (
          <HeaderNav value={lightTheme}>
            <Link to="/">
              <HeaderWebsiteLogoImage
                src={watchLogoImage}
                alt={watchLogoImageAlt}
              />
            </Link>

            <HeaderItemsContainer>
              <HeaderItems>
                <HeaderItemsButton
                  type="button"
                  data-testid="theme"
                  onClick={themeChange}
                >
                  {lightTheme ? (
                    <FaMoon />
                  ) : (
                    <SunButton as={FiSun} style={{color: '#ffffff'}} />
                  )}
                </HeaderItemsButton>
              </HeaderItems>
              <HeaderItems>
                <HeaderProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HeaderHamburgerLogoutPopUp>
                  <Popup
                    modal
                    trigger={
                      <HeaderItemsButton
                        type="button"
                        className="trigger-button"
                      >
                        <Icons as={GiHamburgerMenu} value={lightTheme} />
                      </HeaderItemsButton>
                    }
                  >
                    {close => (
                      <PoppingContainer value={lightTheme}>
                        <PopUpCloseButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                          value={lightTheme}
                        >
                          <IoMdClose />
                        </PopUpCloseButton>
                        <PopUpContentsContainer>
                          <PopUpContents>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/"
                                onClick={() => close()}
                              >
                                <IconPopUp
                                  as={AiFillHome}
                                  selection={match.path === '/'}
                                />
                                <EachNavigationItemName>
                                  Home
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/trending'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/trending"
                                onClick={() => close()}
                              >
                                <IconPopUp
                                  as={HiFire}
                                  selection={match.path === '/trending'}
                                />
                                <EachNavigationItemName>
                                  Trending
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/gaming'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/gaming"
                                onClick={() => close()}
                              >
                                <IconPopUp
                                  as={SiYoutubegaming}
                                  selection={match.path === '/gaming'}
                                />
                                <EachNavigationItemName>
                                  Gaming
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                            <EachNavigationItemInPopUp
                              selection={match.path === '/saved-videos'}
                              theme={lightTheme}
                            >
                              <EachPopUpNavigationContainer
                                as={Link}
                                to="/saved-videos"
                                onClick={() => close()}
                              >
                                <IconPopUp
                                  as={MdPlaylistAdd}
                                  selection={match.path === '/saved-videos'}
                                />
                                <EachNavigationItemName>
                                  Saved videos
                                </EachNavigationItemName>
                              </EachPopUpNavigationContainer>
                            </EachNavigationItemInPopUp>
                          </PopUpContents>
                        </PopUpContentsContainer>
                      </PoppingContainer>
                    )}
                  </Popup>
                </HeaderHamburgerLogoutPopUp>
              </HeaderItems>
              <HeaderItems>
                <HeaderLargeDisplayLogoutButtonContainer>
                  <Popup
                    modal
                    trigger={
                      <HeaderLargeDisplayLogoutButton
                        type="button"
                        className="trigger-button"
                      >
                        Logout
                      </HeaderLargeDisplayLogoutButton>
                    }
                  >
                    {close => (
                      <LogoutPopUpContainer value={lightTheme}>
                        <div>
                          <LogoutPopUpText>
                            Are you sure, you want to logout
                          </LogoutPopUpText>
                        </div>
                        <CancelConfirmButtons>
                          <LogoutPopUpCancelButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutPopUpCancelButton>
                          <LogoutPopUpConfirmButton
                            type="button"
                            onClick={sessionOut}
                          >
                            Confirm
                          </LogoutPopUpConfirmButton>
                        </CancelConfirmButtons>
                      </LogoutPopUpContainer>
                    )}
                  </Popup>
                </HeaderLargeDisplayLogoutButtonContainer>{' '}
                <HeaderHamburgerLogoutPopUp>
                  <Popup
                    modal
                    trigger={
                      <HeaderItemsButton
                        type="button"
                        className="trigger-button"
                      >
                        <Icons as={FiLogOut} value={lightTheme} />
                      </HeaderItemsButton>
                    }
                  >
                    {close => (
                      <LogoutPopUpContainer value={lightTheme}>
                        <div>
                          <LogoutPopUpText>
                            Are you sure you want to logout?
                          </LogoutPopUpText>
                        </div>
                        <CancelConfirmButtons>
                          <LogoutPopUpCancelButton
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </LogoutPopUpCancelButton>
                          <LogoutPopUpConfirmButton
                            type="button"
                            onClick={sessionOut}
                          >
                            Confirm
                          </LogoutPopUpConfirmButton>
                        </CancelConfirmButtons>
                      </LogoutPopUpContainer>
                    )}
                  </Popup>
                </HeaderHamburgerLogoutPopUp>
              </HeaderItems>
            </HeaderItemsContainer>
          </HeaderNav>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(HeaderComponent)
