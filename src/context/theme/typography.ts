import { typographyTokens } from "./tokens/typography";

export const typography = {
  fontFamily: typographyTokens.fontFamily.sans,

  h1: {
    fontSize: typographyTokens.scale.displayLg.size,
    fontWeight: typographyTokens.scale.displayLg.weight,
    lineHeight: typographyTokens.scale.displayLg.lineHeight,
    letterSpacing: typographyTokens.scale.displayLg.tracking,
  },

  h2: {
    fontSize: typographyTokens.scale.displayMd.size,
    fontWeight: typographyTokens.scale.displayMd.weight,
    lineHeight: typographyTokens.scale.displayMd.lineHeight,
    letterSpacing: typographyTokens.scale.displayMd.tracking,
  },

  h3: {
    fontSize: typographyTokens.scale.displaySm.size,
    fontWeight: typographyTokens.scale.displaySm.weight,
    lineHeight: typographyTokens.scale.displaySm.lineHeight,
    letterSpacing: typographyTokens.scale.displaySm.tracking,
  },

  h4: {
    fontSize: typographyTokens.scale.h1.size,
    fontWeight: typographyTokens.scale.h1.weight,
    lineHeight: typographyTokens.scale.h1.lineHeight,
    letterSpacing: typographyTokens.scale.h1.tracking,
  },

  h5: {
    fontSize: typographyTokens.scale.h2.size,
    fontWeight: typographyTokens.scale.h2.weight,
    lineHeight: typographyTokens.scale.h2.lineHeight,
    letterSpacing: typographyTokens.scale.h2.tracking,
  },

  h6: {
    fontSize: typographyTokens.scale.h3.size,
    fontWeight: typographyTokens.scale.h3.weight,
    lineHeight: typographyTokens.scale.h3.lineHeight,
    letterSpacing: typographyTokens.scale.h3.tracking,
  },

  subtitle1: {
    fontSize: typographyTokens.scale.bodyLg.size,
    fontWeight: typographyTokens.scale.bodyLg.weight,
    lineHeight: typographyTokens.scale.bodyLg.lineHeight,
  },

  body1: {
    fontSize: typographyTokens.scale.bodyMd.size,
    fontWeight: typographyTokens.scale.bodyMd.weight,
    lineHeight: typographyTokens.scale.bodyMd.lineHeight,
  },

  body2: {
    fontSize: typographyTokens.scale.bodySm.size,
    fontWeight: typographyTokens.scale.bodySm.weight,
    lineHeight: typographyTokens.scale.bodySm.lineHeight,
  },

  caption: {
    fontSize: typographyTokens.scale.caption.size,
    fontWeight: typographyTokens.scale.caption.weight,
    lineHeight: typographyTokens.scale.caption.lineHeight,
    letterSpacing: typographyTokens.scale.caption.tracking,
    textTransform: "uppercase",
  },

  button: {
    fontWeight: typographyTokens.fontWeight.semibold,
    textTransform: "none",
    letterSpacing: "0",
  },
};