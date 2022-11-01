import { useEffect, useState } from "react";
import { LarpsUserModel } from "../../models/larpsUserModel";
import { createUser } from "../../services/larpUserService";
import { CreateUserModal } from "./CreateUserModal";
import { ToastContainer, toast } from "react-toastify";

export const ApiConnect = () => {
  const [newUser, setNewUser] = useState<LarpsUserModel>({
    data: { user: { username: "", password: "", offName: "" } },
  });
  const [isCreated, setIsCreated] = useState(false);

  const notify = (errorMessage: string) => {
    toast(errorMessage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    if (
      newUser.data.user.username !== "" &&
      newUser.data.user.password !== "" &&
      newUser.data.user.offName !== ""
    ) {
      createUser(newUser)
        .then(() => {
          setIsCreated(true);
          notify("Sucsess!");
        })
        .catch((error) => {
          if (error.response.status === 400) {
            notify("Try an simpler username");
          } else if (error.response.status === 403) {
            notify("username already exists");
          } else if (error.response.status === 500) {
            notify("Server is down");
          }
        });
    }
  }, [newUser]);
  console.log("isCreated: ", isCreated);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CreateUserModal
        setNewUser={setNewUser}
        newUser={newUser}
        isCreated={isCreated}
      />
    </>
  );
};
