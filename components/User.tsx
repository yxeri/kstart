import { IUserInformation } from "../models/userInformation";
import styles from "../styles/User.module.css";

interface IUser {
  user: IUserInformation;
}

export const User = ({ user }: IUser) => {
  return (
    <div className={styles.container}>
      <h3>
        Name: {user.firstName.value} {user.lastName.value}
      </h3>
      <p> E-mail: {user.email.value}</p>
    </div>
  );
};
