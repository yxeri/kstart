import { useState } from "react";
import { CreateUserModal } from "./CreateUserModal";
import { ToastContainer } from "react-toastify";
import { Box } from "../styledComponents/Box";
import "react-toastify/dist/ReactToastify.css";
import { LoginModal } from "./LoginModal";
import { deleteCookie } from "cookies-next";
import { Button } from "../styledComponents/Button";
import { Loader } from "../loader/Loader";
import { Text } from "../styledComponents/Text";
import { Chat } from "./Chat";
import { ChatButton } from "../ChatButton";
import { useRecoilState } from "recoil";
import { loggedInUser } from "../../atoms/atoms";

export const ApiConnect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatIsOpen, setChatIsOpen] = useState(false);
  const [userInformation, setUserInformation] = useRecoilState(loggedInUser);

  const toggleChat = () => {
    setChatIsOpen(!chatIsOpen);
  };

  const handleLoader = (value: boolean) => {
    setIsLoading(value);
  };

  //LOG OUT
  const logOut = () => {
    deleteCookie("token");
    setUserInformation({
      isLoggedIn: false,
      data: {
        user: { username: "", password: "", followingRooms: [], ownerId: "" },
        token: "",
        id: "",
      },
    });
  };

  return (
    <Box
      css={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "70px",
      }}
    >
      {isLoading && <Loader />}
      {userInformation.isLoggedIn && (
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>Welcome {userInformation.data.user.username}</Text>
          <Button onClick={logOut}>Log Out</Button>
        </Box>
      )}

      {!userInformation.isLoggedIn && (
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <CreateUserModal setIsLoading={setIsLoading} />
          <LoginModal handleLoader={handleLoader} />
        </Box>
      )}

      <Box css={{ zIndex: "1" }}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Box>
      {chatIsOpen && <Chat />}
      {userInformation.isLoggedIn && (
        <ChatButton chatIsOpen={chatIsOpen} toggleChat={toggleChat} />
      )}
    </Box>
  );
};
