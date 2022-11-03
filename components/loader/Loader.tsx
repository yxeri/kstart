import { UpdateIcon } from "@radix-ui/react-icons";
import { keyframes } from "../../styles/stitches.config";
import { Box } from "../styledComponents/Box";
export const Loader = () => {
  const spin = keyframes({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(359deg)" },
  });
  return (
    <Box
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "$krusoYellow",
        animation: `${spin} 1000ms infinite linear`,
      }}
    >
      <UpdateIcon style={{ width: "300", height: "300" }} />
    </Box>
  );
};
