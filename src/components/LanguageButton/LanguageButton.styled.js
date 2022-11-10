import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledLanguageButton = styled.button`
  display: inline-block;
  background: transparent;
  outline: none !important;
  padding: 7px 11px;
  line-height: 16px;
  font-size: 13px;
  border-radius: 30px;
  font-weight: 500;
  width: 42px;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin: 0;
  transition: all 0.2s ease-in;

  &.is-active {
    border: 1px solid ${theme.black};
    transition: all 0.2s ease-in;

    &:hover {
      border: 1px solid ${theme.black};
      background-color: transparent;
      transition: all 0.2s ease-in;
    }
  }

  &:hover {
    border: 1px solid ${theme.darkgray};
    background-color: ${theme.darkgray};
    transition: all 0.2s ease-in;
  }
`;
