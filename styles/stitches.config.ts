import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#ff8e3c",
      secondary: "#ff753d",
      text: "#2B3A42",
      background: "#fff",
      backgroundSecondary: "#e5eef2",
    },
  },
  media: {
    bp1: "(min-width: 688px)",
    bp2: "(min-width: 992px)",
    bp3: "(min-width: 1312px)",
  },
  utils: {},
});

export const darkTheme = createTheme({
  colors: {
    backgroundSecondary: "#e5eef2",
    primary: "#ff8906",
    secondary: "#ff753d",
    text: "#EFEFEF",
    background: "#131a1e",
  },
});
