import { styled } from "../../styles/stitches.config";

export const Button = styled("button", {
  padding: "8px 12px",
  background: "$primary",
  color: "$text",
  border: "none",
  boxShadow: "0 0 0 0.1",
  borderRadius: "30px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    background: "$secondary",
  },
  variants: {
    variant: {
      active: {
        fontWeight: "bold",
      },
      theme: {
        background: "$primary",
        color: "$text",
        border: "$border",
        "&:hover": {
          background: "$secondary",
          color: "$text",
        },
      },
    },
  },
});
