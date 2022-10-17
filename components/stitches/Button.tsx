import { styled } from "../../styles/stitches.config";

export const Button = styled("button", {
  padding: "8px 12px",
  background: "$krusoYellow",
  color: "$krusoGreen",
  border: "none",
  boxShadow: "0 0 0 0.1",
  borderRadius: "30px",
  "&:hover": {
    background: "Wheat",
  },
});
