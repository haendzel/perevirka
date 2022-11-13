import { theme, device } from "../../theme/mainTheme";
import styled from "styled-components";

export const StyledArticleSection = styled.section`
  background-color: ${theme.bg};
  margin-top: 40px;
  width: 100%;
  height: auto;

  @media ${device.laptop13} {
    height: calc(100vh - 35px);
  }

  .article-col {
    max-height: 100%;

    @media ${device.laptop13} {
      max-height: calc(100vh - 75px);
    }
  }

  .title-contents {
    font-family: "Inter", "sans-serif";
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    padding-top: 24px;
  }

  .list-of-contents {
    min-height: auto;
    border-bottom: 1px solid ${theme.black};
    padding: 12px;

    @media ${device.laptop13} {
      height: calc(100vh - 35px);
      border-right: 1px solid ${theme.black};
      border-bottom: none;
    }
  }

  .list {
    list-style-type: none;
    padding-inline-start: 0;
    li {
      margin-bottom: 16px;
      font-weight: 500;
      font-size: 14px;
      font-family: "Inter", sans-serif;
    }
    ul {
      list-style-type: none;
      font-weight: 400;
      padding-inline-start: 16px;

      li {
        font-weight: 400;
      }
    }
  }

  .article-date {
    font-size: 14px;
    font-weight: 500;
    margin-top: 4px;
  }

  article {
    height: 700px;
    overflow: auto;
    margin-bottom: 34px;

    @media ${device.laptop13} {
      padding-bottom: 100px;
      border-right: 1px solid ${theme.black};
      max-height: 100%;
      min-height: calc(100vh - 35px);
    }
  }

  .article-block {
    font-size: 16px;
    line-height: 24px;
  }

  .article-block-title {
    padding: 10px;
    padding-top: 0;
  }

  h2 {
    margin-top: 24px;
    font-size: 24px;
  }

  h3 {
    font-size: 18px;
  }
`;
