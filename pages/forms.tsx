import { NextPage } from "next";
import { useState } from "react";
import UserForm from "../components/UserForm";
import UserFormReactHookForm from "../components/UserFormReactHookForm";
import { UserList } from "../components/UserList";

const Forms: NextPage = () => {
  const [showRHF, setShowRHF] = useState(false);
  const showOtherForm = () => {
    setShowRHF(!showRHF);
  };
  return (
    <div>
      {showRHF ? <UserFormReactHookForm /> : <UserForm />}
      <button onClick={showOtherForm}>
        {showRHF ? "without React hook form" : "with react hook form"}
      </button>
      <UserList />
    </div>
  );
};

export default Forms;
