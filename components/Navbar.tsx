import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "@stitches/react";
import Link from "next/link";
const Navbar = () => {
  const NavigationRoot = styled(NavigationMenu.Root, {
    padding: "20px",
    background: "#3e4c31",
    display: "flex",
    gap: "20px",
  });
  const NavigationList = styled(NavigationMenu.List, {
    listStyleType: "none",
    color: "#bf8e30",
    "&:hover": { textDecoration: "underline" },
  });
  const NavigationItem = styled(NavigationMenu.Item, {});
  const NavigationTrigger = styled(NavigationMenu.Trigger, {});
  const NavigationContent = styled(NavigationMenu.Content, {});
  const StyledLink = styled(Link, {
    textDecoration: "none",
    "&[data-active]": { textDecoration: "bold" },
  });

  return (
    <>
      <NavigationRoot>
        <NavigationList>
          <NavigationItem>
            <StyledLink href="/">Home</StyledLink>
          </NavigationItem>
        </NavigationList>
        <NavigationList>
          <NavigationItem>
            <StyledLink href="/forms">Forms</StyledLink>
          </NavigationItem>
        </NavigationList>
        <NavigationList>
          <NavigationItem>
            <StyledLink href="/forms">Forms</StyledLink>
          </NavigationItem>
        </NavigationList>
      </NavigationRoot>
    </>
  );
};
export default Navbar;
