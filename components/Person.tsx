interface IPersonProps {
  person: { firstName: string; lastName: string };
}

export const Person = ({ person }: IPersonProps) => {
  console.log(person);

  return (
    <div>
      <p>
        First Name: {person.firstName}, Last Name: {person.lastName}
      </p>
    </div>
  );
};
