import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledDetailsArticle = styled.div`
  height: 100%;
  width: 100%;

  article,
  .content {
    overflow: auto;
    max-height: 400px;
    border-bottom: none;

    @media ${device.laptop13} {
      max-height: 100%;
    }

    .article-block {
      &:last-child {
        border-bottom: none !important;
      }
    }
  }

  .article {
    @media ${device.laptop13} {
      max-height: calc(100% - 200px);
    }
  }

  .content {
    max-height: 100%;
    padding-bottom: 34px;
  }
`;
