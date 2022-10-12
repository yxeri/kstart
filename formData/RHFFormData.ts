export const RHFFormData = [
  {
    id: "firstName",
    type: "text",
    label: "First Name",
    rules: { required: true, minLength: 2, pattern: /([A-Ö])\w+/ },
    errorMessage: "First name longer then two letters is required",
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name",
    rules: { required: true, minLength: 2, pattern: /([A-Ö])\w+/ },
    errorMessage: "Last name longer then two letters is required",
  },
  {
    id: "email",
    type: "email",
    label: "Email",
    rules: {
      required: true,
      minLength: NaN,
      pattern:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    errorMessage: "Please enter a valid email address",
  },
];
