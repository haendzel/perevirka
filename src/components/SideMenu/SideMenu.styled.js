import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideMenu = styled.div`
  display: block;
  border: none;
  width: auto;
  height: 100%;
  width: auto;
  position: absolute;
  right: 24px;
  top: 40px;
  z-index: 997;
  border-left: 1px solid ${theme.black};
  background-color: ${theme.primary};
`;
