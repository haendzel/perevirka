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
    semibold: 500,
    bold: 600,
  },
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
