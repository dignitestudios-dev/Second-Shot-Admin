import * as Yup from "yup";

export const AddStorySchema = Yup.object({
    uploadPicture: Yup.mixed()
    .required("Picture is required")
    .test("fileType", "Unsupported file type", (value) => {
      return value && ["image/jpeg", "image/png", "image/gif"].includes(value.type);
    }),

  fullname: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(250, "Full name must not exceed 250 characters"),

  profession: Yup.string()
    .required("Profession is required")
    .min(3, "Profession must be at least 3 characters")
    .max(250, "Profession must not exceed 250 characters"),

  location: Yup.string()
    .required("Location is required")
    .min(3, "Location must be at least 3 characters")
    .max(250, "Location must not exceed 250 characters"),

  youTubelink: Yup.string()
    .required("YouTube link is required")
    .url("YouTube link must be a valid URL")
    .min(3, "YouTube link must be at least 3 characters")
    .max(250, "YouTube link must not exceed 250 characters"),

  currentProfession: Yup.string()
    .required("Current profession is required")
    .min(3, "Current profession must be at least 3 characters")
    .max(250, "Current profession must not exceed 250 characters"),

  education: Yup.string()
    .required("Education is required")
    .min(3, "Education must be at least 3 characters")
    .max(250, "Education must not exceed 250 characters"),

  experience: Yup.string()
    .required("Experience is required")
    .min(3, "Experience must be at least 3 characters")
    .max(250, "Experience must not exceed 250 characters"),

  mostValuable: Yup.string()
    .required("Field  is required")
    .min(3, "Field must be at least 3 characters")
    .max(250, "Field must not exceed 250 characters"),

  advice: Yup.string()
    .required("Field is required")
    .min(3, "Field must be at least 3 characters")
    .max(250, "Field must not exceed 250 characters"),
});
