import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "../../../styles/stitches.config";

export const NavigationTrigger = styled(NavigationMenu.Trigger, {
  padding: "8px 12px",
  background: "$krusoYellow",
  color: "$krusoGreen",
  border: "none",
  boxShadow: "0 0 0 0.1",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    background: "Wheat",
  },
});
