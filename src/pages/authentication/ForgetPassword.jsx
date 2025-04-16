import React, { useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router";
import { AuthIcon, ForgotiIcon, Logo } from "../../assets/export";
import Input from "../../components/global/Input";
import Button from "../../components/global/Button";
import BackButton from "../../components/global/BackButton";
import { ForgetPasswordSchema } from "../../schema/authentication/LoginSchema";
import { ForgetValues } from "../../init/authentication/LoginValues";

const ForgetPassword = () => {
  const { loading, postData } = useLogin();
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ForgetValues,
      validationSchema: ForgetPasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        navigate("/auth/otp-email");
        // Use the loading state to show loading spinner
        // Use the response if you want to perform any specific functionality
        // Otherwise you can just pass a callback that will process everything
      },
    });

  return (
    <div className="bg-gradient-to-br from-[#d2e1ee]/60 to-[#dff7d6]/40 p-8">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-12 md:col-span-3 hidden md:flex justify-center bg-grad-button rounded-l-[20px]"></div>
        <div className="col-span-12 md:col-span-9 flex justify-center items-center bg-white pb-4 relative overflow-hidden rounded-r-[20px]">
          <div className="w-full max-w-md p-7">
            <div className="flex justify-center ">
              <img
                src={ForgotiIcon}
                alt=""
                className="w-[121.48px] h-[121.48px] object-cover"
              />
            </div>

            <h1 className="text-center mt-4 text-[32px] font-[600] text-[#181818] ">
              Forgot Password
            </h1>
            <p className="text-center mt-2 text-[16px] leading-[100%] font-[400] text-[#181818]  ">
              Enter your registered email address below
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
              className="w-full md:w-[393px] mt-4  flex flex-col justify-start items-start gap-4"
            >
              <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                <Input
                  id={"email"}
                  name={"email"}
                  onChange={handleChange}
                  value={values.email}
                  type={"email"}
                  placeholder={"Email Address"}
                  error={errors.email}
                  maxLength={254}
                />
              </div>
              <div className="w-full">
                <Button text={"Send"} type={"submit"} />
              </div>
              <div className="flex justify-center w-full">
                <BackButton handleClick={() => navigate(-1)} />
              </div>
            </form>
          </div>
          <img
            src={AuthIcon}
            alt="logo"
            className="absolute -bottom-8 -right-8 w-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
