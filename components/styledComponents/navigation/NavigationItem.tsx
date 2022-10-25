import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../styles/stitches.config";

export const NavigationItem = styled(NavigationMenu.Item, {
  //background: "$krusoGreen",
  //marginLeft: "0",
  "&:hover": { textDecoration: "underline" },
});
