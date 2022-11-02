import { styled } from "../../../styles/stitches.config";
import * as Dialog from "@radix-ui/react-dialog";

export const Trigger = styled(Dialog.Trigger, {
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
