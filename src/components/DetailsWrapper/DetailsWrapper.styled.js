import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: 460px;
  background-color: ${theme.primary};
  border-left: 1px solid ${theme.black};
  height: calc(100% - 35px);
  display: flex;
  flex-direction: column;
  align-content: stretch;
`;
