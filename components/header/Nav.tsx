import { NavigationRoot } from "../styledComponents/navigation/NavigationRoot";
import { NavigationList } from "../styledComponents/navigation/NavigationList";
import { NavigationItem } from "../styledComponents/navigation/NavigationItem";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NavigationTrigger } from "../styledComponents/navigation/NavigationTrigger";
import { NavigationItemDrop } from "../styledComponents/navigation/NavigationItemDrop";

import { StyledLink } from "../styledComponents/navigation/StyledLink";

interface INavProps {
  isOpen: boolean;

  handleClick(): void;
}

export const Nav = ({ handleClick, isOpen }: INavProps) => {
  return (
    <NavigationRoot>
      <NavigationList mobile={isOpen}>
        <NavigationItem onClick={handleClick}>
          <StyledLink href={"/"}>Home</StyledLink>
        </NavigationItem>
        <NavigationItemDrop>
          <NavigationTrigger>Learning</NavigationTrigger>
          <NavigationMenu.Content>
            <NavigationList
              css={{
                position: "absolute",
                borderRadius: "10px",
                padding: "20px",
                background: "$krusoYellow",
                color: "$krusoGreen",
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                height: "auto",
                width: "230px",
                "@bp1": { top: "0", left: "0" },
              }}
            >
              <NavigationItem onClick={handleClick}>
                <StyledLink href={"/forms"}>Forms</StyledLink>
              </NavigationItem>
              <NavigationItem onClick={handleClick}>
                <StyledLink href={"/columns"}>Columns</StyledLink>
              </NavigationItem>
              <NavigationItem onClick={handleClick}>
                <StyledLink href={"/columnsWithStitches"}>
                  Columns with stitches
                </StyledLink>
              </NavigationItem>
              <NavigationItem onClick={handleClick}>
                <StyledLink href={"/radix-accordion"}>
                  Radix Accordion
                </StyledLink>
              </NavigationItem>
              <NavigationItem onClick={handleClick}>
                <StyledLink href={"/apiConnect"}>Api Connect</StyledLink>
              </NavigationItem>
            </NavigationList>
          </NavigationMenu.Content>
        </NavigationItemDrop>
      </NavigationList>
    </NavigationRoot>
  );
};
