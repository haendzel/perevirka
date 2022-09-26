import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledLanguageButton = styled.button`
  display: inline-block;
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
  margin: 0 0 0 6px;

  &:hover,
  &.is-active {
    border: 1px solid ${theme.black};
  }
`;
