import { NavigationRoot } from "./stitches/navigation/NavigationRoot";
import { NavigationList } from "./stitches/navigation/NavigationList";
import { NavigationItem } from "./stitches/navigation/NavigationItem";
import { StyledNavLink } from "./stitches/navigation/StyledNavLink";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationTrigger } from "./stitches/navigation/NavigationTrigger";
import { NavigationItemDrop } from "./stitches/navigation/NavigationItemDrop";
import { Box } from "./stitches/Box";

export const Nav = () => {
  return (
    <>
      <NavigationRoot>
        <NavigationList
          css={{ display: "flex", alignItems: "center", gap: "30px" }}
        >
          <NavigationItem>
            <Box
              css={{
                padding: "8px 12px",
                background: "$krusoYellow",
                color: "$krusoGreen",
                border: "none",
                boxShadow: "0 0 0 0.1",
                borderRadius: "30px",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "Wheat",
                },
              }}
            >
              <StyledNavLink href="/">Home</StyledNavLink>
            </Box>
          </NavigationItem>

          <NavigationItemDrop>
            <NavigationTrigger>Pages</NavigationTrigger>
            <NavigationMenu.Content>
              <NavigationList
                css={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  borderRadius: "10px",
                  padding: "20px",
                  background: "$krusoYellow",
                  color: "$krusoGreen",
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <NavigationItem>
                  <StyledNavLink href="/forms">Forms</StyledNavLink>
                </NavigationItem>
                <NavigationItem>
                  <StyledNavLink href="/forms">Forms</StyledNavLink>
                </NavigationItem>
              </NavigationList>
            </NavigationMenu.Content>
          </NavigationItemDrop>
        </NavigationList>
      </NavigationRoot>
    </>
  );
};
