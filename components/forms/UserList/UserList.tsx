import { useRecoilValue } from "recoil";
import { userListState } from "../../../atoms/atoms";
import { User } from "../User/User";
import styles from "./UserList.module.css";

export const UserList = () => {
  const userList = useRecoilValue(userListState);

  const usersToComponent = userList.map((user, i) => {
    return <User user={user} key={i} />;
  });

  return <div className={styles.container}>{usersToComponent}</div>;
};
