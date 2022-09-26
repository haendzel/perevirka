import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledDetailsTab = styled.div`
  width: 100%;
  background-color: transparent;
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

  p {
    margin: 0;
  }
`;
