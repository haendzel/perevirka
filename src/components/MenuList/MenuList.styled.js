import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledMenuList = styled.div`
  display: block;
  border: none;
  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  overflow: auto;
  min-height: 100%;
  height: 100%;
  max-height: 100%;
  cursor: pointer;

  @media ${device.tablet} {
    width: 230px;
    min-height: calc(100vh - 75px);
    height: calc(100vh - 75px);
    max-height: calc(100vh - 75px);
  }
`;
