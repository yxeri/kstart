import Link from "next/link";
import { styled } from "../../../styles/stitches.config";

export const StyledNavLink = styled(Link, {
  textDecoration: "none",
  "&[data-active]": { textDecoration: "bold" },
});
