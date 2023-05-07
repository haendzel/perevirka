import { theme } from "../../theme/mainTheme";
import styled from "styled-components";
import { NavLink } from "react-bootstrap";

export const StyledHeader = styled.header`
  display: block;
  min-height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: ${theme.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  border-bottom: 1px solid ${theme.black};
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  background: transparent;
  padding: 7px 12px;
  line-height: 16px;
  font-size: 13px;
  border-radius: 30px;
  font-weight: 500;
  min-width: 30px;
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin: 0 6px;
  transition: all 0.25s ease-in;

  &.is-active {
    box-shadow: inset 0 0 0 1px ${theme.black};
    transition: all 0.25s ease-in;

    &:hover {
      box-shadow: inset 0 0 0 1px ${theme.black};
      transition: all 0.25s ease-in;
    }
  }

  &:hover {
    background: ${theme.darkgray};
    box-shadow: inset 0 0 0 1px ${theme.darkgray};
  }
`;
