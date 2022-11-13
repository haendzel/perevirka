import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: 100%;
  background-color: ${theme.primary};
  border-left: none;
  height: auto;
  padding-bottom: 34px;
  display: flex;
  flex-direction: column;
  align-content: stretch;

  @media ${device.laptop13} {
    padding-bottom: 0;
    border-left: 1px solid ${theme.black};
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
