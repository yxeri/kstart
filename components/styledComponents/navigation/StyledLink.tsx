import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../../../styles/stitches.config";

const NextLink = Link;
const StyledNavigationMenuLink = styled(NavigationMenu.Link, {
  textDecoration: "none",
  "&[data-active]": { fontWeight: "bold" },
});

export const StyledLink = ({ href, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <StyledNavigationMenuLink active={isActive} {...props} />
    </NextLink>
  );
};
