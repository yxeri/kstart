import { ChatBubbleIcon, ThickArrowDownIcon } from "@radix-ui/react-icons";
import { Box } from "./styledComponents/Box";
import { Button } from "./styledComponents/Button";
interface ChatButtonProps {
  chatIsOpen: boolean;
  toggleChat(): void;
}
export const ChatButton = ({ chatIsOpen, toggleChat }: ChatButtonProps) => {
  return (
    <Box>
      {chatIsOpen ? (
        <Button
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            width: "60px",
            borderRadius: "100px",
            position: "absolute",
            top: "70px",
            bottom: "unset",
            right: "0",
            left: "0",
            margin: "auto",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            "&:hover": {
              background: "$krusoYellow",
            },
            "@bp1": {
              top: "unset",
              bottom: "20px",
              right: "20px",
              left: "unset",
              margin: "unset",
            },
          }}
          onClick={toggleChat}
        >
          <ThickArrowDownIcon style={{ width: "40", height: "40" }} />
        </Button>
      ) : (
        <Button
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            width: "60px",
            borderRadius: "100px",
            position: "absolute",
            bottom: "20px",
            right: "20px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            "&:hover": {
              background: "$krusoYellow",
            },
          }}
          onClick={toggleChat}
        >
          <ChatBubbleIcon style={{ width: "30", height: "30" }} />
        </Button>
      )}
    </Box>
  );
};
