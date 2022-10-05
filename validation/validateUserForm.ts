export const validateForm = (value: string, targetId: string) => {
  if (targetId === "firstName") {
    if (value.length < 3) {
      return {
        message: "First name longer than two characters is required",
        type: targetId,
        isActive: true,
      };
    } else {
      return { message: "", type: targetId, isActive: false };
    }
  } else if (targetId === "lastName") {
    if (value.length < 3) {
      return {
        message: "Last name longer than two characters is required",
        type: targetId,
        isActive: true,
      };
    } else {
      return { message: "", type: targetId, isActive: false };
    }
  } else {
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(value)
    ) {
      return {
        message: "Please enter a valid email adress",
        type: targetId,
        isActive: true,
      };
    } else {
      return { message: "", type: targetId, isActive: false };
    }
  }
};
