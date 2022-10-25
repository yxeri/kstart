import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../styles/stitches.config";

export const NavigationItem = styled(NavigationMenu.Item, {
  "&:hover": { textDecoration: "underline" },
});
