import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Box } from "./stitches/Box";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./stitches/Button";
import { Header } from "./stitches/Header";

export const HeaderNav = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
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

        <Nav isOpen={isOpen} handleClick={handleClick} />
      </Header>
    </>
  );
};
