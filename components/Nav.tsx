import { NavigationRoot } from "./stitches/navigation/NavigationRoot";
import { NavigationList } from "./stitches/navigation/NavigationList";
import { NavigationItem } from "./stitches/navigation/NavigationItem";
import { StyledNavLink } from "./stitches/navigation/StyledNavLink";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationTrigger } from "./stitches/navigation/NavigationTrigger";
import { NavigationItemDrop } from "./stitches/navigation/NavigationItemDrop";

import { Button } from "./stitches/Button";

import { StyledLink } from "./stitches/navigation/StyledLink";

interface INavProps {
  isOpen: boolean;
  handleClick(): void;
}

export const Nav = ({ handleClick, isOpen }: INavProps) => {
  return (
    <>
      <NavigationRoot>
        <NavigationList mobile={isOpen}>
          <NavigationItem>
            <Button onClick={handleClick}>
              <StyledNavLink href="/">Home</StyledNavLink>
            </Button>
          </NavigationItem>

          <NavigationItemDrop>
            <NavigationTrigger>Learning</NavigationTrigger>
            <NavigationMenu.Content>
              <NavigationList
                css={{
                  position: "absolute",
                  left: "80px",
                  borderRadius: "10px",
                  padding: "20px",
                  background: "$krusoYellow",
                  color: "$krusoGreen",
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  height: "auto",
                  "@bp1": { top: "0", left: "0" },
                }}
              >
                <NavigationItem>
                  <Button onClick={handleClick}>
                    <StyledLink href="/forms">Forms</StyledLink>
                  </Button>
                </NavigationItem>
                <NavigationItem>
                  <Button onClick={handleClick}>
                    <StyledLink href="/forms">Forms</StyledLink>
                  </Button>
                </NavigationItem>
              </NavigationList>
            </NavigationMenu.Content>
          </NavigationItemDrop>
        </NavigationList>
      </NavigationRoot>
    </>
  );
};
