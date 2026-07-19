import type { PaletteOptions } from "@mui/material/styles";
import { paletteTokens } from "./tokens/palette";

export const palette: PaletteOptions = {
  mode: "light",

  primary: {
    light: paletteTokens.brand[400],
    main: paletteTokens.brand[500],
    dark: paletteTokens.brand[700],
    contrastText: paletteTokens.neutral[0],
  },

  secondary: {
    light: "#67E8F9",
    main: "#06B6D4",
    dark: "#0E7490",
    contrastText: paletteTokens.neutral[0],
  },

  background: {
    default: paletteTokens.neutral[0],
    paper: paletteTokens.neutral[50],
  },

  text: {
    primary: paletteTokens.neutral[900],
    secondary: paletteTokens.neutral[600],
    disabled: paletteTokens.neutral[400],
  },

  divider: paletteTokens.neutral[200],

  success: paletteTokens.success,

  warning: paletteTokens.warning,

  error: paletteTokens.error,

  info: paletteTokens.info,
};