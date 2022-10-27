import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../styles/stitches.config";

export const NavigationTrigger = styled(NavigationMenu.Trigger, {
  color: "$krusoYellow",
  fontSize: "1rem",
  border: "none",
  background: "$krusoGreen",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  "&:hover": {
    textDecoration: "underline",
  },
});
