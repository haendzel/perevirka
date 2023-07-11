import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledRoundedBordered = styled.a`
  display: inline-block;
  background: transparent !important;
  outline: none;
  padding: 4px 11px;
  margin: 0 12px;
  border: 1px solid ${theme.black};
  line-height: 16px;
  font-size: 13px;
  border-radius: 30px;
  font-weight: 500;
  min-width: 40px;
  text-align: center;
  cursor: pointer;

  &.tag {
    &:hover {
      background-color: ${theme.black} !important;
      border: 1px solid ${theme.black};
      color: ${theme.white};
    }
  }

  @media ${device.tablet} {
    margin: 0 24px;
  }
`;
