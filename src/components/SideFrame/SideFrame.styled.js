import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideFrame = styled.aside`
  display: block;
  position: absolute;
  top: 0;
  background-color: ${theme.primary};
  height: 100vh;
  z-index: 999;
  width: 24px;
  ${({ left }) =>
    left &&
    `
    left: 0;
    border-right: 1px solid ${theme.black};
    right: auto;
  `}
  ${({ right }) =>
    right &&
    `
    right: 0;
    border-left: 1px solid ${theme.black};
    left: auto;
  `}
`;
