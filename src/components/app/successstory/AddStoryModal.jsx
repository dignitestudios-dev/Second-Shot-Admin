import React, { useState } from "react";
import { UplaodPic } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";
import Input from "../../global/Input";
import TextArea from "../../global/TextArea";
import Button from "../../global/Button";
import { useFormik } from "formik";
import { AddStoryValues } from "../../../init/authentication/AddStoryValues";
import { AddStorySchema } from "../../../schema/app/AddStorySchema";
import {
  useSuccessStory,
} from "../../../hooks/api/Post";
import { processSuccessStory } from "../../../lib/utils";

const AddStoryModal = ({ showModal, handleClose, setOpen ,setUpdate}) => {
  const { loading, postData } = useSuccessStory();
  const [previewImage, setPreviewImage] = useState(null);
  
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: AddStoryValues,
    validationSchema: AddStorySchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("profile_img", values.uploadPicture);
      formData.append("name", values.fullname);
      formData.append("profession", values.firstShot);
      formData.append("profession2", values.secondShot);
      formData.append("youtube_link", values.youTubelink);
      formData.append("current_profession", values.quote);
      formData.append("linkedin_profile", values.linkedin_link);
      postData(
        "/api/admin/create-success-story",
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
              Add New Success Story
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

export default AddStoryModal;
