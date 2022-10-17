import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../styles/stitches.config";

export const NavigationList = styled(NavigationMenu.List, {
  listStyleType: "none",
  //backgroundColor: "$krusoGreen",
  color: "$krusoYellow",
  //paddingLeft: "30px",
  //display: "flex",
  //flexDirection: "column",
  //gap: "20px",
  "@bp2": {
    //flexDirection: "row",
    //gap: "30px",
  },
});
