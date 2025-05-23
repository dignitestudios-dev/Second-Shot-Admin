import React, { use, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Calender from "../../../components/global/DatePicker";
import { useNavigate } from "react-router";
import Button from "../../../components/global/Button";
import TimePicker from "../../../components/global/TimePicker";
import { useFormik } from "formik";
import { CreateNotificationSchema } from "../../../schema/app/CreateNotificationSchema";
import { CreateNotificationValues } from "../../../init/authentication/CreateNotificationValues";
import { useCreateNotification } from "../../../hooks/api/Post";
import { processNotification } from "../../../lib/utils";

const CreateNotification = () => {
  const [startDate, setStartDate] = useState(null); // null se start karein
  const { loading, postData } = useCreateNotification();
  const navigate = useNavigate();
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    resetForm
  } = useFormik({
    initialValues: CreateNotificationValues,
    validationSchema: CreateNotificationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, action) => {
      const data = {
        notification_title: values.title,
        notification_message: values.description,
      };
      postData(
        "/api/admin/send-notification",
        false,
        null,
        data,
        processNotification,
        resetForm
      );
    },
  });
  return (
    <div className="bg-white rounded-[20px] p-3 h-screen">
      <div className="flex items-center gap-3 mb-6">
        <button className="text-[28px]" onClick={() => navigate(-1)}>
          <IoIosArrowRoundBack />
        </button>
        <h2 className="text-[24px] font-semibold text-[#181818] tracking-[-0.2px]">
          Create Notification
        </h2>
      </div>

      <form className="space-y-6 px-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-[14px] font-medium text-[#181818] block mb-2">
            Title of Notification
          </label>
          <input
            type="text"
            placeholder="Type Here..."
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            id="title"
            name="title"
            maxLength={50}
            className="border border-[#D1D1D1] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[14px] placeholder:text-[#B9B9B9]"
            style={{ border: "1px solid", borderColor: "#00000030" }}
          />
          {errors && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="text-[14px] font-medium text-[#181818] block mb-2">
            Description of Notification
          </label>
          <textarea
            placeholder="Type Here..."
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
            name="description"
            maxLength={250}
            className="border border-[#D1D1D1] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[14px] placeholder:text-[#B9B9B9]"
            rows={4}
          ></textarea>
          {errors && (
            <p className="text-red-500 text-sm">{errors.description}</p>
          )}
        </div>

      
        <div className="flex gap-6">
          <div className="w-[150px]">
            <Button text={"Save"} type={"submit"} loading={loading} />
          </div>
          <div>
            <button className="bg-[#E9E9E9] w-[150px] h-[50px] rounded-[9px]   text-[#000000] text-[14px] font-[700] ">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNotification;
