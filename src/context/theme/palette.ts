import type { PaletteOptions } from "@mui/material/styles";
import { paletteTokens } from "./tokens/palette";

export const palette: PaletteOptions = {
  mode: paletteTokens.mode,

  primary: {
    main: paletteTokens.primary,
    contrastText: paletteTokens.primaryForeground,
  },

  secondary: {
    main: paletteTokens.secondary,
    contrastText: paletteTokens.secondaryForeground,
  },

  background: {
    default: paletteTokens.background,
    paper: paletteTokens.card,
  },

  text: {
    primary: paletteTokens.foreground,
    secondary: paletteTokens.mutedForeground,
    disabled: paletteTokens.mutedForeground,
  },

  divider: paletteTokens.border,

  error: {
    main: paletteTokens.destructive,
  },
};