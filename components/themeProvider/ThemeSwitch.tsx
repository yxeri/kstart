import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { Button } from "../styledComponents/Button";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleClick = (value: string) => {
    setTheme(value);
  };

  return (
    <>
      {theme === "dark" ? (
        <Button
          css={{ marginLeft: "auto" }}
          variant={"theme"}
          onClick={() => handleClick("light")}
        >
          <SunIcon />
        </Button>
      ) : (
        <Button
          css={{ marginLeft: "auto" }}
          variant={"theme"}
          onClick={() => handleClick("dark")}
        >
          <MoonIcon />
        </Button>
      )}
    </>
  );
};
