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
    .max(50, "Promo name can't be longer than 50 characters")
    .matches(
      /^[^\s\d][A-Za-z0-9\s]*$/,
      "Name cannot start with space or number"
    ),

  percent_off: Yup.number()
    .typeError("Percent must be a number")
    .required("Percent off is required")
    .min(0, "Minimum is 0%")
    .max(100, "Maximum is 100%"),
});
