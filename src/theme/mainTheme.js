import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#F2F2F2",
  secondary: "#FE6C2D",
  black: "#000010",
  bg: "#F2F2F2",
  gray: "#E0E0E0",
  white: "#ffffff",
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  transitionBase: "all 0.3s ease",
};

export const sizes = {
  xs: 0,
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
  xxxl: "1500px",
  xxxxl: "1700px",
  xxxxxl: "1920px",
  xxxxxxl: "2600px",
};

export const device = {
  xs: `(min-width: ${sizes.xs})`,
  mobile: `(min-width: ${sizes.sm})`,
  phablet: `(min-width: ${sizes.md})`,
  tablet: `(min-width: ${sizes.lg})`,
  laptop13: `(min-width: ${sizes.xl})`,
  laptop14: `(min-width: ${sizes.xxl})`,
  laptop15: `(min-width: ${sizes.xxxl})`,
  desktop: `(min-width: ${sizes.xxxxl})`,
  normalDesktop: `(min-width: ${sizes.xxxxxl})`,
  ultraDesktop: `(min-width: ${sizes.xxxxxxl})`,
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    width: 100%;
    max-width: calc(1920px - (2*24px));
    padding: 0 24px;
  }

  .mono-font {
    font-family: 'IBM Plex Mono', monospace;
  }

  .fw-regular {
    font-weight: ${theme.fontWeight.regular}
  }

  .fw-medium {
    font-weight: ${theme.fontWeight.medium}
  }

  .fw-semibold {
    font-weight: ${theme.fontWeight.semibold}
  }

  a {
    color: ${theme.black};
    text-decoration: none;
    transition: ${theme.transitionBase};

    &:hover {
      color: ${theme.black};
    }
  }

  .tags {
    .tag {
      margin: 0 0 0 6px !important;

      &:hover {
        background-color: ${theme.gray};
        border-color: ${theme.gray};
      }
    }
  }

  h3 {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
  }

  .scene-container {
    background-color: black;
    margin-left: -15%;
  }

  .article {
    &-block {
      padding: 8px;
      border-bottom: 1px solid ${theme.black};
      font-size: 14px;

      p {
        line-height: 20px;
        font-weight: 400;
        margin: 0;
      }
    }
  }
`;
