import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideMenuArticle = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  width: auto;
  height: calc(100% - 40px);
  width: auto;
  position: static;
  background-color: ${theme.primary};

  .social-link {
    &:hover {
      color: ${theme.secondary};

      svg {
        path {
          fill: ${theme.secondary};
          cursor: pointer;
        }
      }
    }
  }
`;
