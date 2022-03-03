import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  NavigationMenuContainerWrapper,
  NavigationItemsContainer,
  EachNavigationContainer,
  NavigationRouteNames,
  NavigationContactContainer,
  NavigationContactImages,
  NavigationContainerFootLine,
} from './StyledComponents'

const NavigationMenuAsLeftSideBar = () => (
  <NavigationMenuContainerWrapper>
    <NavigationItemsContainer>
      <li>
        <EachNavigationContainer as={Link} to="/">
          <AiFillHome />
          <NavigationRouteNames>Home</NavigationRouteNames>
        </EachNavigationContainer>
      </li>
      <li>
        <EachNavigationContainer as={Link} to="/trending">
          <HiFire />
          <NavigationRouteNames>Trending</NavigationRouteNames>
        </EachNavigationContainer>
      </li>
      <li>
        <EachNavigationContainer as={Link} to="/gaming">
          <SiYoutubegaming />
          <NavigationRouteNames>Gaming</NavigationRouteNames>
        </EachNavigationContainer>
      </li>
      <li>
        <EachNavigationContainer as={Link} to="/saved-videos">
          <MdPlaylistAdd />
          <NavigationRouteNames>Saved videos</NavigationRouteNames>
        </EachNavigationContainer>
      </li>
    </NavigationItemsContainer>

    <NavigationContactContainer>
      <p>CONTACT US</p>
      <div>
        <NavigationContactImages
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt=" facebook logo"
        />
        <NavigationContactImages
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
          alt="twitter logo"
        />
        <NavigationContactImages
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt=" linked in logo"
        />
      </div>
      <NavigationContainerFootLine>
        Enjoy! Now to see your channels and recommendations!
      </NavigationContainerFootLine>
    </NavigationContactContainer>
  </NavigationMenuContainerWrapper>
)

export default NavigationMenuAsLeftSideBar
