import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledHeaderLink = styled.button`
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
