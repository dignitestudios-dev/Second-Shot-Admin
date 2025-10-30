import React, { useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";
import { signInSchema } from "../../schema/authentication/LoginSchema";
import { NavLink, useNavigate } from "react-router";
import { FiLoader } from "react-icons/fi";
import { AuthIcon, Logo } from "../../assets/export";
import Input from "../../components/global/Input";
import Button from "../../components/global/Button";
import { loginValues } from "../../init/authentication/LoginValues";

const Login = () => {
  const { loading, postData } = useLogin();
  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: loginValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email: values?.email,
          password: values?.password,
        };
        postData("/api/auth/admin/login", false, null, data, processLogin);
      },
    });

  return (
    <div className="bg-gradient-to-br from-[#d2e1ee]/60 to-[#dff7d6]/40 p-8">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-12 md:col-span-3 hidden md:flex justify-center bg-grad-button rounded-l-[20px]"></div>

        <div className="col-span-12 md:col-span-9 flex justify-center items-center bg-white pb-4 relative overflow-hidden rounded-r-[20px]">
          <div className="w-full max-w-md p-7">
            <div className="flex justify-center ">
              <img src={Logo} alt="" className="w-[335.54px] h-[233.01px] " />
            </div>

            <h1 className="text-center text-[32px] font-[600] text-[#181818] ">
              Sign In
            </h1>
            <p className="text-center mt-2 text-[16px] leading-[100%] font-[400] text-[#181818]  ">
              Please enter the details below to continue
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-[393px] mt-4  flex flex-col justify-start items-start gap-4"
            >
              <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                <Input
                  id={"email"}
                  name={"email"}
                  onChange={handleChange}
                  value={values.email}
                  type={"email"}
                  placeholder={"Email"}
                  error={errors.email}
                  maxLength={254}
                />
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                <Input
                  onChange={handleChange}
                  id={"password"}
                  name={"password"}
                  value={values.password}
                  type={"password"}
                  placeholder={"Password"}
                  error={errors.password}
                  maxLength={50}
                />
              </div>

              <div className="w-full -mt-1  relative z-10  flex items-center justify-end">
                <NavLink
                  to={"/auth/forgot-password"}
                  className="text-black hover:no-underline hover:text-black text-[12px] font-[500]  leading-[1%]"
                >
                  Forgot Password
                </NavLink>
              </div>

              <Button text={"Sign In"} type={"submit"} loading={loading} />
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

export default Login;
