import { IUserInformation } from "../models/userInformation";
import styles from "../styles/User.module.css";

interface IUser {
  user: IUserInformation;
}

export const User = ({ user }: IUser) => {
  return (
    <div className={styles.container}>
      <h3>
        Name: {user.firstName} {user.lastName}
      </h3>
      <p> E-mail: {user.email}</p>
    </div>
  );
};
