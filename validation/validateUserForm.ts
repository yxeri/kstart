export const validateName = (value: string, id: string) => {
  if (value.length <= 2) {
    return {
      message: "First name longer than two characters is required",
      id: id,
      isActive: true,
      isDirty: true,
    };
  }
  return { message: "", id: id, isActive: false, isDirty: true };
};

export const validateEmail = (value: string, id: string) => {
  if (
    !new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(value)
  ) {
    return {
      message: "Please enter a valid email adress",
      id: id,
      isActive: true,
      isDirty: true,
    };
  }
  return { message: "", id: id, isActive: false, isDirty: true };
};

export const validateForm = (value: string, id: string) => {
  if (id === "firstName") {
    if (value.length <= 2) {
      return {
        message: "First name longer than two characters is required",
        id: id,
        isActive: true,
        isDirty: true,
      };
    }
    return { message: "", id: id, isActive: false, isDirty: true };
  } else if (id === "lastName") {
    if (value.length <= 2) {
      return {
        message: "Last name longer than two characters is required",
        id: id,
        isActive: true,
        isDirty: true,
      };
    }
    return { message: "", id: id, isActive: false, isDirty: true };
  } else {
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(value)
    ) {
      return {
        message: "Please enter a valid email adress",
        id: id,
        isActive: true,
        isDirty: true,
      };
    }
    return { message: "", id: id, isActive: false, isDirty: true };
  }
};
