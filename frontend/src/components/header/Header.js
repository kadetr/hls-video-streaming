import "./headerElements.js";
import {
  Icon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
} from "./headerElements.js";

const Header = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Icon to="/video/list">HLS - Streaming </Icon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/video/list">List Videos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/video/upload">Upload Video</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
