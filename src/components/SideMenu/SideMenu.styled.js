import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  width: auto;
  height: calc(100% - 40px);
  width: auto;
  position: absolute;
  right: 24px;
  top: 40px;
  z-index: 997;
  border-left: 1px solid ${theme.black};
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
