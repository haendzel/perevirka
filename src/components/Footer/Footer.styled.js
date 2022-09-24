import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledFooter = styled.header`
  display: block;
  font-size: 14px;
  min-height: 35px;
  background-color: ${theme.primary};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9999;
  line-height: 35px;
  border-top: 1px solid ${theme.black};
  width: 100%;
`;
