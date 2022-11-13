import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideFrame = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: ${theme.primary};
  height: 100%;
  z-index: 999;
  width: 12px;
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

   @media ${device.laptop13} {
    width: 24px;
    height: 100vh;
  }
`;

export const StyledSideFrameArticleMobile = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: ${theme.primary};
  height: 100%;
  min-height: 100%;
  z-index: 999;
  width: 12px;
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

   @media ${device.laptop13} {
    width: 24px;
    display: none;
  }
`;
