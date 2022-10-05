export const validateFirstName = (firstName: string) => {
  if (firstName.length < 1 || firstName.length < 3) {
    return "First name longer than two characters is required";
  } else {
    return "";
  }
};

export const validateLastName = (lastName: string) => {
  if (lastName.length < 1 || lastName.length < 3) {
    return "Last name longer than two characters is required";
  } else {
    return "";
  }
};

export const validateEmail = (email: string) => {
  if (
    !new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(email)
  ) {
    return "Please enter a valid email adress";
  } else {
    return "";
  }
};
