import { theme } from "../../theme/mainTheme";
import styled from "styled-components";
import RoundedBordered from "../RoundedBordered/RoundedBordered";

export const StyledDetailsTags = styled.div`
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid ${theme.black};
  padding: 6px 0;
  height: auto;
  min-height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;
