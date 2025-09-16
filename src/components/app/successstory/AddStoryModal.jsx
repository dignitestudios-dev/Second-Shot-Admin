import React, { useState } from "react";
import { UplaodPic } from "../../../assets/export";
import { RxCross2 } from "react-icons/rx";
import Input from "../../global/Input";
import TextArea from "../../global/TextArea";
import Button from "../../global/Button";
import { useFormik } from "formik";
import { AddStoryValues } from "../../../init/authentication/AddStoryValues";
import { AddStorySchema } from "../../../schema/app/AddStorySchema";
import { useSuccessStory } from "../../../hooks/api/Post";
import { processSuccessStory } from "../../../lib/utils";
import { useGetSuccess } from "../../../hooks/api/Get";

const AddStoryModal = ({ showModal, handleClose, setOpen, setUpdate }) => {
  const { loading, postData } = useSuccessStory();
  const [previewImage, setPreviewImage] = useState(null);
  const {
    data,
    loading: loader,
    pagination,
  } = useGetSuccess(`/api/admin/career-list`);

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
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("profile_img", values.uploadPicture);
      formData.append("name", values.fullname);
      formData.append("profession", values.firstShot);
      formData.append("profession2", values.secondShot);
      formData.append("youtube_link", values.youTubelink);
      formData.append("current_profession", values.quote);
      formData.append("linkedin_profile", values.linkedin_link);
      formData.append("school", values.school);
      formData.append(
        "career_recommendations",
        JSON.stringify(values.career_recommendations)
      );

      postData(
        "/api/admin/create-success-story",
        true,
        formData,
        null,
        (res, modal, update) => {
          processSuccessStory(res, setOpen, setUpdate, resetForm);
        },
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
                  <div className="mt-4">
                    <Input
                      value={values.school}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id={"school"}
                      name={"school"}
                      text={"School"}
                      placeholder={"School"}
                      error={errors.school}
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="career"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Select Career(s)
                    </label>

                    <div
                      onClick={() =>
                        setFieldValue(
                          "careerDropdownOpen",
                          !values?.careerDropdownOpen
                        )
                      }
                      className="border border-gray-300 rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer"
                    >
                      <span className="text-sm text-gray-700">
                        {values?.career_recommendations?.length > 0
                          ? `${values?.career_recommendations?.length} selected`
                          : "Select Career(s)"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transform transition-transform ${
                          values?.careerDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {values?.careerDropdownOpen && (
                      <div className="mt-1 w-full max-h-48 overflow-auto bg-white border border-gray-300 rounded-lg shadow-lg">
                        {data?.data?.map((item) => (
                          <label
                            key={item._id}
                            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              value={item?._id}
                              checked={values?.career_recommendations?.includes(
                                item?._id
                              )}
                              onChange={(e) => {
                                const currentValues =
                                  values?.career_recommendations || []; // ✅ fallback empty array

                                if (e.target.checked) {
                                  setFieldValue("career_recommendations", [
                                    ...currentValues,
                                    item?._id,
                                  ]);
                                } else {
                                  setFieldValue(
                                    "career_recommendations",
                                    currentValues.filter(
                                      (id) => id !== item._id
                                    )
                                  );
                                }
                              }}
                              className="mr-2"
                            />
                            {item?.career_name}
                          </label>
                        ))}
                      </div>
                    )}

                    {values?.career_recommendations?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {values?.career_recommendations?.map((id) => {
                          const career = data?.data?.find((c) => c._id === id);
                          return (
                            <span
                              key={id}
                              className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs"
                            >
                              {career?.career_name}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

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
