import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { keyframes, styled } from "../../../styles/stitches.config";

export const NavigationList = styled(NavigationMenu.List, {
  display: "flex",
  //alignItems: "center",
  gap: "30px",
  flexDirection: "column",
  background: "$krusoGreen",
  position: "absolute",
  height: "100vh",
  padding: "30px 130px 0px 30px",
  transition: "left 0.5s",
  "@bp1": {
    position: "relative",
    flexDirection: "row",
    left: "auto",
    top: "unset",
    height: "unset",
    padding: "30px",
  },
  variants: {
    desktop: {},
    mobile: {
      true: {
        left: "-70px",
        top: "30px",
        "@bp1": {
          position: "relative",
          flexDirection: "row",
          left: "auto",
          top: "unset",
          height: "unset",
          padding: "30px",
        },
      },
      false: {
        left: "-400px",
        top: "30px",

        "@bp1": {
          position: "relative",
          flexDirection: "row",
          left: "auto",
          top: "unset",
          height: "unset",
          padding: "30px",
        },
      },
    },
  },
  listStyleType: "none",
  color: "$krusoYellow",
});
