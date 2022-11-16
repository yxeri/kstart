import { useState } from "react";
import { CreateUserModal } from "./CreateUserModal";
import { ToastContainer } from "react-toastify";
import { Box } from "../styledComponents/Box";
import "react-toastify/dist/ReactToastify.css";
import { LoginModal } from "./LoginModal";
import { LoginModelResponse } from "../../models/loginModel";
import { deleteCookie, hasCookie } from "cookies-next";
import { Button } from "../styledComponents/Button";
import { Loader } from "../loader/Loader";
import { Text } from "../styledComponents/Text";
import { Chat } from "./Chat";
import { ChatButton } from "../ChatButton";

export const ApiConnect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(hasCookie("token"));
  const [isLoading, setIsLoading] = useState(false);
  const [chatIsOpen, setChatIsOpen] = useState(true);

  //FOR LATER USE
  const [isLoggedInInfo, setIsLoggedInInfo] = useState<LoginModelResponse>({
    data: {
      user: { username: "", password: "", followingRooms: [], ownerId: "" },
      token: "",
      id: "",
    },
  });

  //CREATE USER
  const login = (userReturn: LoginModelResponse) => {
    setIsLoggedInInfo(userReturn);
  };

  const toggleChat = () => {
    setChatIsOpen(!chatIsOpen);
  };

  //LOG OUT
  const logOut = () => {
    deleteCookie("token");
    setIsLoggedIn(false);
    setIsLoggedInInfo({
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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        paddingTop: "70px",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : isLoggedIn ? (
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>Welcome {isLoggedInInfo.data.user.username}</Text>
          <Button onClick={logOut}>Log Out</Button>
        </Box>
      ) : (
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <CreateUserModal setIsLoading={setIsLoading} />
          <LoginModal
            login={login}
            setIsLoggedIn={setIsLoggedIn}
            setIsLoading={setIsLoading}
          />
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
      {chatIsOpen && <Chat isLoggedInInfo={isLoggedInInfo} />}
      {isLoggedIn && (
        <ChatButton chatIsOpen={chatIsOpen} toggleChat={toggleChat} />
      )}
    </Box>
  );
};
