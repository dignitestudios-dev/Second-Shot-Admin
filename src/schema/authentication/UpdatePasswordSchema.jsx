import * as Yup from "yup";

export const updatePasswordSchema = Yup.object({
    currentPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long.")
      .max(50, "Password must not exceed 50 characters.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/\d/, "Password must contain at least one number.")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one @ special character."
      )
      .matches(/^[^\s]*$/, "Password should not contain spaces.")
      .trim()
      .required("Please enter your password"),
      newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long.")
      .max(50, "Password must not exceed 50 characters.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/\d/, "Password must contain at least one number.")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one @ special character."
      )
      .matches(/^[^\s]*$/, "Password should not contain spaces.")
      .trim()
      .required("Please enter your password"),
  
      confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match.")
      .required("Please confirm your new password"),
  });
  