import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledFooter = styled.header`
  display: block;
  min-height: 35px;
  background-color: ${theme.primary};
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999999;
  border-bottom: 1px solid ${theme.black};
  width: 100%;
`;
