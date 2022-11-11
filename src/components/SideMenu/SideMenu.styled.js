import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  width: auto;
  height: 400px;
  width: auto;
  position: absolute;
  z-index: 997;
  border-left: 1px solid ${theme.black};
  background-color: ${theme.primary};
  top: auto;
  bottom: 48px;
  right: 12px;
  left: 12px;

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

  @media ${device.tablet} {
    height: calc(100% - 40px);
    right: 24px;
    top: 40px;
    left: auto;
  }
`;
