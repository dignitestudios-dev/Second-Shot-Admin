import React, { useState } from "react";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../global/Toaster";
import Button from "../../global/Button";
import { createSubAdminSchema } from "../../../schema/app/CreateNotificationSchema";
import Input from "../../global/Input";
import { useFormik } from "formik";

const CreateSubAdmin = ({ isOpen, onClose, setUpdate }) => {
  if (!isOpen) return null;
  const [loading, setLoading] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: createSubAdminSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
        role: "sub-admin",
      };
      try {
        const res = await axios.post("/api/auth/admin/sign-up", payload);
        if (res.status === 201) {
          SuccessToast("Sub Admin created successfully!");
          setUpdate((prev) => !prev);
          resetForm();
          onClose();
        }
      } catch (error) {
        const msg =
          error?.response?.data?.error ||
          error?.response?.data?.message ||
          "Something went wrong";
        ErrorToast(msg);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-lg w-[500px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Create Sub Admin</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              text="Name"
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              error={errors.name}
              placeholder="Enter Name"
            />
          </div>

          <div>
            <Input
              text="Email"
              name="email"
              id="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={errors.email}
              placeholder="Enter Email"
            />
          </div>

          <div>
            <Input
              text="Password"
              name="password"
              id="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={errors.password}
              placeholder="Enter Password"
            />
          </div>

          <div>
            <Input
              text="Confirm Password"
              name="confirm_password"
              id="confirm_password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm_password}
              error={errors.confirm_password}
              placeholder="Confirm Password"
            />
          </div>

          <Button text="Create" loading={loading} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateSubAdmin;
