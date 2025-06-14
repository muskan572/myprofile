import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#606060",
  700: "#454F5B",
  800: "#212B36",
  900: "#000000",
};

const PRIMARY = {
  lighter: "#7C69EF",
  light: "#7C69EF",
  main: "#2F1B1B",
  dark: "#7C69EF",
  darker: "#7C69EF",
  contrastText: "#FFFFFF",
};

const SECONDARY = {
  lighter: "#CBA69F",
  light: "#A36457",
  main: "#7C210F",
  dark: "#57170B",
  darker: "#320D06",
  contrastText: "#FFFFFF",
};

const TERTIARY = {
  lighter: "#BDA5CC",
  light: "#8B62A6",
  main: "#591F80",
  dark: "#3E165A",
  darker: "#3E165A",
  contrastText: "#FFFFFF",
};

const INFO = {
  lighter: "#BFEBFA",
  light: "#89DAF5",
  main: "#3AC1EF",
  dark: "#11A3D4",
  darker: "#0D7FA5",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D8FBDE",
  light: "#86E8AB",
  main: "#36B37E",
  dark: "#1B806A",
  darker: "#0A5554",
  contrastText: "#FFFFFF",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFCEC7",
  light: "#FF9282",
  main: "#E34932",
  dark: "#942B1B",
  darker: "#63160A",
  contrastText: "#FFFFFF",
};

const COMMON = {
  common: { black: "#000000", white: "#FFFFFF" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  tertiary: TERTIARY,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: "light",
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: "#FFFFFF", default: "#FFFFFF", neutral: GREY[200] },
    avatar: { neutral: "#F8F4FD", disabled: "#D2C6E3" },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === "light" ? light : dark;
}
