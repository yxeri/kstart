import { useRecoilValue } from "recoil";
import { loggedInUser, rooms } from "../../atoms/atoms";
import { TempMessageModel } from "../../models/chatModels";
import { Box } from "../styledComponents/Box";
import { Text } from "../styledComponents/Text";

interface MessageProps {
  tempMess: TempMessageModel;
}

export const TempMessage = ({ tempMess }: MessageProps) => {
  const userInformation = useRecoilValue(loggedInUser);
  const allRooms = useRecoilValue(rooms);
  const room = allRooms.get(tempMess.data.roomId);

  const localDate = new Date();

  const messageText = tempMess.data.message.map((row, index) => {
    return (
      <Text
        css={{ margin: "0", fontSize: "0.8rem", wordWrap: "break-word" }}
        key={index}
      >
        {row}
      </Text>
    );
  });

  return (
    <Box>
      <Box css={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Box>
          <Box
            css={{
              color: "LightGray",
              fontWeight: "bold",
              padding: "7px",
              paddingLeft: "0px",
              borderRadius: "10px",
              marginBottom: "4px",
              textDecoration: "underline",
            }}
          >
            <Text css={{ margin: "0", fontSize: "0.9rem", color: "gray" }}>
              {userInformation.data.user.username}:
            </Text>
          </Box>
          <Box>{messageText}</Box>
        </Box>
        <Box
          css={{ display: "flex", gap: "7px", justifyContent: "space-evenly" }}
        >
          <Text css={{ color: "Gray", margin: "2px", fontSize: "0.7rem" }}>
            Sent: {localDate.toLocaleDateString()},{" "}
            {localDate.toLocaleTimeString()}
          </Text>
          <Text css={{ color: "Gray", margin: "2px", fontSize: "0.7rem" }}>
            Room: {room?.roomName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
