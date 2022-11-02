export const loginFormData = [
  {
    id: "username",
    type: "text",
    label: "Username",
    rules: {
      required: true,
      minLength: 1,
      maxLength: 30,
      pattern: /^[\w\d\s_-]+$/,
    },
    errorMessage: "try a username 1-30 letters long or try regular characters",
  },
  {
    id: "password",
    type: "password",
    label: "Password",
    rules: {
      required: true,
      minLength: 1,
      maxLength: 30,
      pattern: /[\s\S]*/,
    },
    errorMessage: "try a password between 1 and 30 characters long",
  },
];
