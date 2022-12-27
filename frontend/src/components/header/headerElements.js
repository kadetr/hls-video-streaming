import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #003580;
  height: 80px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-family: Quicksand, arial, sans-serif;
  border-radius: 8px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;

export const Icon = styled(Link)`
  color: #ffffff;
  margin-top: 24px;
  text-decoration: none;
  font-weight: 700;
  font-size: 32px;
  width: 25%;
`;

export const NavMenu = styled.ul`
  width: 75%;
  display: flex;
  align-items: end;
  justify-content: end;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-top: 32px;
  height: 40px;
`;

export const NavLinks = styled(Link)`
  color: #ffffff;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #db4c77;
  }
`;
