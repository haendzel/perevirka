import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledDetailsArticle = styled.div`
  height: 100%;
  width: 100%;

  article,
  .content {
    overflow: auto;
    max-height: calc(100% - 200px);
    border-bottom: none;

    .article-block {
      &:last-child {
        border-bottom: none !important;
      }
    }
  }

  .content {
    max-height: 100%;
  }
`;
