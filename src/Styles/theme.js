const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
  small: calcRem(14),
  medium: calcRem(16),
  large: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

const Color = {
  blue: {
    50: "#e3f2fe",
    100: "#bbddfc",
    200: "#8fc9fb",
    300: "#63b3f9",
    400: "#41a3f8",
    500: "#2293f6",
    600: "#2185e8",
    700: "#1e73d4",
    800: "#1c62c2",
    900: "#1844a2",
  },
  grey: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
  },
  black: "#212121",
  white: "#ffffff",
};

const theme = {
  fontSize,
  Color,
};

export default theme;
