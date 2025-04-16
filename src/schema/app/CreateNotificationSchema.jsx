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
    startDate: Yup.date()
    .nullable()
    .required("Date is required"),
    time: Yup.string()
    .required("Time is required"),
})
