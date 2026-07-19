export const typographyTokens = {
  fontFamily: {
    sans: '"Liter", sans-serif',
    mono: '"Geist Mono", monospace',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    display: 1.05,
    heading: 1.1,
    title: 1.3,
    body: 1.625,
    caption: 1.4,
  },

  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
  },

  scale: {
    displayLg: {
      size: "72px",
      weight: 600,
      lineHeight: 1.05,
      tracking: "-0.02em",
    },

    displayMd: {
      size: "56px",
      weight: 600,
      lineHeight: 1.05,
      tracking: "-0.02em",
    },

    displaySm: {
      size: "44px",
      weight: 600,
      lineHeight: 1.1,
      tracking: "-0.02em",
    },

    h1: {
      size: "36px",
      weight: 600,
      lineHeight: 1.1,
      tracking: "-0.02em",
    },

    h2: {
      size: "28px",
      weight: 600,
      lineHeight: 1.2,
      tracking: "-0.02em",
    },

    h3: {
      size: "20px",
      weight: 600,
      lineHeight: 1.3,
      tracking: "-0.01em",
    },

    bodyLg: {
      size: "18px",
      weight: 400,
      lineHeight: 1.625,
      tracking: "0",
    },

    bodyMd: {
      size: "16px",
      weight: 400,
      lineHeight: 1.625,
      tracking: "0",
    },

    bodySm: {
      size: "14px",
      weight: 400,
      lineHeight: 1.5,
      tracking: "0",
    },

    caption: {
      size: "12px",
      weight: 500,
      lineHeight: 1.4,
      tracking: "0.05em",
    },
  },
} as const;