import { useRecoilValue } from "recoil";
import { userListState } from "../atoms/atoms";
import { User } from "./User";

export const UserList = () => {
  const userList = useRecoilValue(userListState);

  const usersToComponent = userList.map((user, i) => {
    return <User user={user} key={i} />;
  });

  return <div>{usersToComponent}</div>;
};
