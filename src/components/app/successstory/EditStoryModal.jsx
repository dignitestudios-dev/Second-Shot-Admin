import React, { useEffect, useState } from "react";
import { UplaodPic } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";
import Input from "../../global/Input";
import TextArea from "../../global/TextArea";
import Button from "../../global/Button";
import { useFormik } from "formik";
import { AddStoryValues } from "../../../init/authentication/AddStoryValues";
import { processSuccessStory } from "../../../lib/utils";
import { useEditSuccessStory, useSuccessStory } from "../../../hooks/api/Post";
import * as Yup from "yup";
const EditStoryModal = ({
  showModal,
  handleClose,
  data,
  setUpdate,
  setOpen,
}) => {
  console.log(data, "data==>");
  const { loading, postData } = useEditSuccessStory();
  const [previewImage, setPreviewImage] = useState(null);

  const [initialValues, setInitialValues] = useState(AddStoryValues);

  useEffect(() => {
    if (data) {
      setInitialValues({
        uploadPicture: "",
        fullname: data?.name || "",
        firstShot: data?.profession || "",
        secondShot: data?.profession2 || "",
        youTubelink: data?.youtube_link || "",
        quote: data?.current_profession || "",
        linkedin_link: data?.linkedin_profile || "",
        currentProfession: data?.current_profession || "",
      });

      if (data?.profile_img) {
        setPreviewImage(data.profile_img);
      }
    }
  }, [data]);

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    enableReinitialize: true, // ✅ IMPORTANT
    initialValues: initialValues,
    validationSchema: Yup.object({
      uploadPicture: previewImage
        ? Yup.mixed() // If preview exists, don't require again
        : Yup.mixed()
            .required("Picture is required")
            .test("fileType", "Unsupported file type", (value) => {
              if (!value) return false;
              return ["image/jpeg", "image/png", "image/gif"].includes(
                value.type
              );
            }),

      fullname: Yup.string().required("Full name is required").min(3).max(250),

      quote: Yup.string().required("Quote is required").min(3).max(250),

      firstShot: Yup.string()
        .required("First Shot is required")
        .min(3)
        .max(250),

      secondShot: Yup.string()
        .required("Second Shot is required")
        .min(3)
        .max(250),

      linkedin_link: Yup.string()
        .required("LinkedIn link is required")
        .url("LinkedIn link must be a valid URL")
        .min(3)
        .max(250),

      youTubelink: Yup.string()
        .required("YouTube link is required")
        .url("YouTube link must be a valid URL")
        .min(3)
        .max(250),
    }),
    validateOnChange: true,
    validateOnBlur: true,

    onSubmit: async (values, action) => {
      console.log(values, "values==>");
      const formData = new FormData();
      formData.append("profile_img", values.uploadPicture);
      formData.append("name", values.fullname);
      formData.append("profession", values.firstShot);
      formData.append("profession2", values.secondShot);
      formData.append("youtube_link", values.youTubelink);
      formData.append("current_profession", values.quote);
      formData.append("linkedin_profile", values.linkedin_link);
      postData(
        `/api/admin/update-success-story/${data?._id}`,
        true,
        formData,
        null,
        processSuccessStory,
        setOpen,
        setUpdate
      );
    },
  });

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div className="relative h-[667px] overflow-auto bg-white rounded-[20px] p-6 w-[90%] max-w-[1200px] shadow-lg">
          <div className="flex     items-center justify-between">
            <h2 className="text-[24px] font-[600] text-[#212121] capitalize mb-4">
              Edit Success Story
            </h2>
            <button
              className=" text-gray-600 hover:text-black"
              onClick={handleClose}
            >
              <RxCross2 size={24} />
            </button>
          </div>
          <hr />
          <div>
            <form action="" onSubmit={handleSubmit}>
              <label className="flex items-center gap-5 mt-5 cursor-pointer">
                <input
                  type="file"
                  name="uploadPicture"
                  className="hidden"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    setFieldValue("uploadPicture", file);

                    // Set preview
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setPreviewImage(imageUrl);
                    }
                  }}
                />
                <div>
                  <img
                    src={previewImage || UplaodPic}
                    className="w-[80px] h-[80px] object-cover rounded-full"
                    alt="Upload Preview"
                  />
                </div>
                <div>
                  <h2 className="underline text-[16px] text-[#181818] font-medium">
                    Upload Picture
                  </h2>
                </div>
              </label>
              {errors.uploadPicture && touched.uploadPicture && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.uploadPicture}
                </div>
              )}
              <div className="grid grid-cols-2 text-start gap-10 mt-10">
                <div>
                  <div className="mt-2">
                    <Input
                      text={"Full Name"}
                      placeholder={"Name"}
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"fullname"}
                      name={"fullname"}
                      error={errors.fullname}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      value={values.firstShot}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"firstShot"}
                      name={"firstShot"}
                      text={"First Shot"}
                      placeholder={"First Shot"}
                      error={errors.firstShot}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      value={values.secondShot}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"secondShot"}
                      name={"secondShot"}
                      text={"Second Shot"}
                      placeholder={"Second Shot"}
                      error={errors.secondShot}
                    />
                  </div>

                  <div className="mt-4">
                    <Input
                      text={"YouTube link"}
                      placeholder={"Name"}
                      value={values.youTubelink}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"youTubelink"}
                      name={"youTubelink"}
                      error={errors.youTubelink}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      text={"Linkedin link"}
                      placeholder={"Linkedin link"}
                      value={values.linkedin_link}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"linkedin_link"}
                      name={"linkedin_link"}
                      error={errors.linkedin_link}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="mt-4">
                      <TextArea
                        text={"Quote"}
                        placeholder={"Describe your Quote"}
                        row={10}
                        value={values.quote}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.quote}
                        id={"quote"}
                        name={"quote"}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end ">
                    <div className="w-[197px] ">
                      <Button
                        text={"Add Success Story"}
                        type={"submit"}
                        loading={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default EditStoryModal;
