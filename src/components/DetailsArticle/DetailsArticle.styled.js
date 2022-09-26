import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledDetailsArticle = styled.div`
  height: 100%;
  width: 100%;
  border-bottom: 1px solid ${theme.black};

  article {
    overflow: auto;
    max-height: 750px;
  }
`;
