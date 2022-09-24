import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

export const StyledMenuListItem = styled.div`
  display: block;
  border: none;
  line-height: 17px;
  font-size: 14px;
  font-weight: 500;
  max-width: 230px;
  height: 40px;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.secondary};
  }

  &.is-active {
    background-color: ${theme.gray};
  }
`;
