import { NextPage } from "next";
import UserForm from "../components/forms/Forms/UserForm";
import UserFormReactHookForm from "../components/forms/Forms/UserFormReactHookForm";
import { UserList } from "../components/forms/UserList/UserList";
import styles from "../styles/formPage.module.css";

const Forms: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Forms</h1>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Regular</h2>
          <UserForm />
        </div>
        <div className={styles.card}>
          <h2>React Hook Form</h2>
          <div className={styles.componentContainer}>
            <UserFormReactHookForm />
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
