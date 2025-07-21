import * as Yup from "yup";

export const AddStorySchema = Yup.object({
  uploadPicture: Yup.mixed()
    .required("Picture is required")
    .test("fileType", "Unsupported file type", (value) => {
      if (!value) return false;
      return ["image/jpeg", "image/png", "image/gif"].includes(value.type);
    }),

  fullname: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(250, "Full name must not exceed 250 characters"),

  quote: Yup.string()
    .required("Quote is required")
    .min(3, "Quote must be at least 3 characters")
    .max(250, "Quote must not exceed 250 characters"),

  firstShot: Yup.string()
    .required("First Shot is required")
    .min(3, "First Shot must be at least 3 characters")
    .max(250, "First Shot must not exceed 250 characters"),

  secondShot: Yup.string()
    .required("Second Shot is required")
    .min(3, "Second Shot must be at least 3 characters")
    .max(250, "Second Shot must not exceed 250 characters"),

  linkedin_link: Yup.string()
    .required("LinkedIn link is required")
    .url("LinkedIn link must be a valid URL")
    .min(3, "LinkedIn link must be at least 3 characters")
    .max(250, "LinkedIn link must not exceed 250 characters"),

  youTubelink: Yup.string()
    .required("YouTube link is required")
    .url("YouTube link must be a valid URL")
    .min(3, "YouTube link must be at least 3 characters")
    .max(250, "YouTube link must not exceed 250 characters"),
});
