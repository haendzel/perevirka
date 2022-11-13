import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledSideMenu = styled.div`
  border: none;
  width: auto;
  height: 300px;
  width: auto;
  position: absolute;
  z-index: 997;
  border-left: 1px solid ${theme.black};
  border-top: 1px solid ${theme.black};
  background-color: ${theme.primary};
  top: auto;
  right: 12px;
  bottom: 35px;
  left: 11px;
  display: flex;
  flex-direction: column;

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

  @media ${device.laptop13} {
    height: calc(100% - 40px);
    right: 24px;
    top: 40px;
    bottom: 48px;
    left: auto;
    display: flex;
    flex-direction: row;
  }
`;
