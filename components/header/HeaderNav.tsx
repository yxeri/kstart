import { useState } from "react";
import { Nav } from "./Nav";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../styledComponents/Button";
import { Header } from "../styledComponents/Header";
import { ThemeSwitch } from "../themeProvider/ThemeSwitch";

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
        <ThemeSwitch />
      </Header>
    </>
  );
};
