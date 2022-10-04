interface IUser {
  user: { firstName: string; lastName: string; email: string };
}

export const User = ({ user }: IUser) => {
  return (
    <div>
      <p>
        First Name: {user.firstName}, Last Name: {user.lastName} E-mail:{" "}
        {user.email}
      </p>
    </div>
  );
};
