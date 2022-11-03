import { useEffect, useState } from "react";
import { LarpsUserModel } from "../../models/larpsUserModel";
import { createUser, loginUser } from "../../services/larpUserService";
import { CreateUserModal } from "./CreateUserModal";
import { ToastContainer, toast } from "react-toastify";
import { Box } from "../styledComponents/Box";
import "react-toastify/dist/ReactToastify.css";
import { LoginModal } from "./LoginModal";
import { LoginModel } from "../../models/loginModel";
import { setCookie, deleteCookie, hasCookie } from "cookies-next";
import { Button } from "../styledComponents/Button";
import { Loader } from "../loader/Loader";
import { Text } from "../styledComponents/Text";

export const ApiConnect = () => {
  const [newUser, setNewUser] = useState<LarpsUserModel>({
    data: { user: { username: "", password: "", offName: "" } },
  });
  const [loginInformation, setLoginInformation] = useState<LoginModel>({
    data: { user: { username: "", password: "" }, token: "", id: "" },
  });
  const [isLoggedIn, setIsLoggedIn] = useState(hasCookie("token"));
  const [isSuccessful, setIsSuccsessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //FOR LATER USE
  const [isLoggedInInfo, setIsLoggedInInfo] = useState<LoginModel>({
    data: { user: { username: "", password: "" }, token: "", id: "" },
  });

  //CREATE USER
  useEffect(() => {
    if (
      newUser.data.user.username !== "" &&
      newUser.data.user.password !== "" &&
      newUser.data.user.offName !== ""
    ) {
      setIsLoading(true);
      createUser(newUser)
        .then(() => {
          toast.success("Succsess!");
          setIsSuccsessful(true);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.warn("Try an simpler username");
          } else if (error.response.status === 403) {
            toast.warn("Username already exists");
          } else if (error.response.status === 500) {
            toast.error("Server is down");
          } else {
            console.log("ERROR: ", error);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [newUser]);

  //LOG IN
  useEffect(() => {
    if (
      loginInformation.data.user.username !== "" &&
      loginInformation.data.user.password !== ""
    ) {
      setIsLoading(true);
      loginUser(loginInformation)
        .then((data) => {
          setCookie("token", data.data.data.token);
          setIsLoggedInInfo(data.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          if (error.response.status === 404) {
            toast.warn("User doesen't exist");
          } else if (error.response.status == 401) {
            toast.warn("incorrect password");
          } else if (error.response.status === 500) {
            toast.error("Server is down");
          } else {
            console.log("loginError: ", error);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [loginInformation]);

  const openModal = () => {
    setIsSuccsessful(false);
  };

  //LOG OUT
  const logOut = () => {
    deleteCookie("token");
    setIsLoggedIn(false);
    setIsLoggedInInfo({
      data: { user: { username: "", password: "" }, token: "", id: "" },
    });
  };

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          <CreateUserModal
            setNewUser={setNewUser}
            isSuccessful={isSuccessful}
            openModal={openModal}
          />
          <LoginModal setLoginInformation={setLoginInformation} />
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
    </Box>
  );
};
