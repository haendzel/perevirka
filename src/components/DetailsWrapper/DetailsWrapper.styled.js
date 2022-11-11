import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: 100%;
  background-color: ${theme.primary};
  border-left: 1px solid ${theme.black};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;

  @media ${device.tablet} {
    width: 460px;
    height: calc(100% - 35px);
  }
`;

export const DetailsWrapperArticle = styled.div`
  width: 100%;
  background-color: ${theme.primary};
  border-left: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;

  @media ${device.tablet} {
    height: calc(100% - 35px);
  }
`;
