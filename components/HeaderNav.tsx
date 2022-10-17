import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Box } from "./stitches/Box";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./stitches/Button";
import { Header } from "./stitches/Header";

export const HeaderNav = () => {
  const breakPoints = { bp1: 688, bp2: 992, bp3: 1312 };
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header css={{ position: "relative", width: "100vw", height: "95px" }}>
        <Button
          onClick={handleClick}
          css={{
            marginLeft: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@bp1": { display: "none" },
          }}
        >
          <HamburgerMenuIcon />
        </Button>

        {(open || width > breakPoints.bp1) && <Nav />}
      </Header>
    </>
  );
};
