import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: block;
  min-height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: ${theme.primary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  border-bottom: 1px solid ${theme.black};
  width: 100%;
`;
