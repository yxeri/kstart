import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "../../../styles/stitches.config";

const NextLink = Link;
const StyledNavigationMenuLink = styled(NavigationMenu.Link, {
  color: "$primary",
  textDecoration: "none",
  "&[data-active]": { fontWeight: "bold" },
});

type StyledLinkProps = NavigationMenu.NavigationMenuLinkProps & {
  href: string;
};

export const StyledLink = ({ href, ...props }: StyledLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <StyledNavigationMenuLink active={isActive} {...props} />
    </NextLink>
  );
};
