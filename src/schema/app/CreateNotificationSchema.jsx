import * as Yup from "yup";

export const CreateNotificationSchema = Yup.object({
  title: Yup.string()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must not exceed 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(3, "Description must be at least 3 characters")
    .max(250, "Description must not exceed 250 characters"),
  // startDate: Yup.date()
  // .nullable()
  // .required("Date is required"),
  // time: Yup.string()
  // .required("Time is required"),
});

export const promoCode = Yup.object().shape({
  name: Yup.string()
    .required("Promo name is required")
    .max(50, "Promo name can't be longer than 50 characters"),
    
  percent_off: Yup.number()
    .typeError("Percent must be a number")
    .required("Percent off is required")
    .min(0, "Minimum is 0%")
    .max(100, "Maximum is 100%"),
});

export const createSubAdminSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[@$!%*?&#]/, "Must contain a special character")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
