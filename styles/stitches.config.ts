import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "",
      gray500: "",
    },
  },
  media: {
    bp1: "(min-width: 688px)",
    bp2: "(min-width: 992px)",
    bp3: "(min-width: 1312px)",
  },
  utils: {},
});
