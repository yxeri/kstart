import { error } from "console";
import { useEffect, useState } from "react";
import { LarpsUserModel } from "../../models/larpsUserModel";
import { createUser } from "../../services/larpUserService";
import { CreateUserModal } from "./CreateUserModal";

export const ApiConnect = () => {
  const [newUser, setNewUser] = useState<LarpsUserModel>({
    username: "",
    password: "",
    offName: "",
  });

  useEffect(() => {
    if (newUser.username !== "") {
      createUser(newUser)
        .then((data) => {
          console.log("myUserInformation", data);
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    }
  }, [newUser]);

  return (
    <>
      <CreateUserModal setNewUser={setNewUser} newUser={newUser} />
    </>
  );
};
