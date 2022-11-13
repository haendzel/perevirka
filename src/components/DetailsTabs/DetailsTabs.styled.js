import styled from "styled-components";
import { theme, device } from "../../theme/mainTheme";

export const StyledDetailsTabs = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  background: ${theme.light};
  margin-top: 0;
  border-top: 1px solid ${theme.black};

  @media ${device.laptop13} {
    margin-top: -200px;
  }
`;
