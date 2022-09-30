import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledDetailsTab = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.black};
  height: auto;
  min-height: 40px;
  padding: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  flex: 1;
  background-color: ${theme.light} !important;
  z-index: 100;

  p {
    margin: 0;
  }
`;

export const StyledDetailsTabs = styled.div`
  min-height: 200px;
`;
