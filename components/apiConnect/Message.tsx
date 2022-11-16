import { MessageModel } from "../../models/chatModels";
import { UserModel } from "../../models/otherUsersModel";
import { Box } from "../styledComponents/Box";
import { Text } from "../styledComponents/Text";

interface MessageProps {
  user: UserModel;
  message: MessageModel;
}

export const Message = ({ user, message }: MessageProps) => {
  const messageText = message.text.map((row, index) => {
    return <Text key={index}>{row}</Text>;
  });
  return (
    <Box css={{ display: "flex", gap: "10px" }}>
      {" "}
      <Text css={{ background: "$krusoYellow", padding: "5px" }}>
        {user.username}:
      </Text>
      <Box>{messageText}</Box>
    </Box>
  );
};
