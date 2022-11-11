import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: block;
  font-size: 11px;
  min-height: 35px;
  background-color: ${theme.primary};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9999;
  line-height: 16px;
  border-top: 1px solid ${theme.black};
  width: 100%;

  @media ${device.tablet} {
    font-size: 14px;
    line-height: 35px;
  }
`;
