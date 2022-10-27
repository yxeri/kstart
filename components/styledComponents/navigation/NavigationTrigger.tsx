import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../styles/stitches.config";

export const NavigationTrigger = styled(NavigationMenu.Trigger, {
  color: "$primary",
  fontSize: "1rem",
  border: "none",
  background: "$backgroundSecondary",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  "&:hover": {
    textDecoration: "underline",
  },
});
