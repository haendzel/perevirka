import { theme } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledRoundedBordered = styled.a`
  display: inline-block;
  padding: 4px 11px;
  margin: 0 24px;
  border: 1px solid ${theme.black};
  line-height: 16px;
  font-size: 13px;
  border-radius: 30px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
  cursor: pointer;
`;
