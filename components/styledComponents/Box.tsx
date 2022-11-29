import { styled } from "../../styles/stitches.config";

export const Box = styled("div", {
  variants: {
    variant: {
      textBox: {
        minWidth: "300px",
        maxWidth: "320px",
        padding: "20px",
        borderRadius: "20px",
        border: "2px solid gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      hidden: {
        false: {
          border: "1px solid blue",
        },
      },
    },
  },
});
