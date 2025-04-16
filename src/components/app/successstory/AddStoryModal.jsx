import React, { useState } from "react";
import { UplaodPic } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";
import Input from "../../global/Input";
import TextArea from "../../global/TextArea";
import Button from "../../global/Button";
import { useFormik } from "formik";
import { AddStoryValues } from "../../../init/authentication/AddStoryValues";
import { AddStorySchema } from "../../../schema/app/AddStorySchema";

const AddStoryModal = ({ showModal, handleClose }) => {


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
    onSubmit: async (values, action) => {
      console.log(values,"values==>")
      handleClose()
      // postData("/admin/login", false, null, data, processLogin);
      // Use the loading state to show loading spinner
      // Use the response if you want to perform any specific functionality
      // Otherwise you can just pass a callback that will process everything
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
                      value={values.profession}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"profession"}
                      name={"profession"}
                      text={"Profession"}
                      placeholder={"Name"}
                      error={errors.profession}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      text={"Location"}
                      placeholder={"Name"}
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"location"}
                      name={"location"}
                      error={errors.location}
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
                    <span className="text-[14px]"></span>
                    <TextArea
                      text={"Current Profession"}
                      placeholder={"Describe your Current Profession"}
                      row={10}
                      value={values.currentProfession}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.currentProfession}
                      id={"currentProfession"}
                      name={"currentProfession"}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <TextArea
                      text={"Education"}
                      placeholder={"Describe your Education"}
                      row={4}
                      value={values.education}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.education}
                      id={"education"}
                      name={"education"}
                    />
                  </div>
                  <div>
                    <TextArea
                      text={"Experience"}
                      placeholder={"Describe your Experience"}
                      row={4}
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.experience}
                      id={"experience"}
                      name={"experience"}
                    />
                  </div>
                  <div>
                    <TextArea
                      text={
                        "  Can you identify your most valuable transferable skill, and how have you seen it manifest in different areas of your life?"
                      }
                      placeholder={"Describe"}
                      row={4}
                      value={values.mostValuable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.mostValuable}
                      id={"mostValuable"}
                      name={"mostValuable"}
                    />
                  </div>
                  <div>
                    <TextArea
                      text={
                        " If you could give one piece of advice to your younger self, what would it be, and why?"
                      }
                      placeholder={"Describe your Education"}
                      row={4}
                      value={values.advice}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.advice}
                      id={"advice"}
                      name={"advice"}
                    />
                  </div>
                  <div className="flex justify-end ">
                    <div className="w-[197px] ">
                      <Button text={"Add Success Story"} type={"submit"} />
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
