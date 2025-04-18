import React, { useState } from "react";
import { useResetPassword } from "../../hooks/api/Post";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { AuthIcon, ForgotiIcon, TickIcon } from "../../assets/export";
import Button from "../../components/global/Button";
import BackButton from "../../components/global/BackButton";
import Input from "../../components/global/Input";
import { ResetPasswordSchema } from "../../schema/authentication/LoginSchema";
import { ResetValues } from "../../init/authentication/LoginValues";
import { processResetPassword } from "../../lib/utils";

const ResetPassword = () => {
  const { loading, postData } = useResetPassword();
  const navigate = useNavigate();
  const [isTrue, setIsTrue] = useState(false);

  const email = sessionStorage.getItem("user_email");

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ResetValues,
      validationSchema: ResetPasswordSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email: email,
          password: values.password,
          confirm_password: values.Cpassword,
        };

        postData(
          "/api/auth/admin/reset-password",
          false,
          null,
          data,
          processResetPassword,
          setIsTrue
        );
      },
    });

  return (
    <div className="bg-gradient-to-br from-[#d2e1ee]/60 to-[#dff7d6]/40 p-8">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-12 md:col-span-3 hidden md:flex justify-center bg-grad-button rounded-l-[20px]"></div>
        <div className="col-span-12 md:col-span-9 flex justify-center items-center bg-white pb-4 relative overflow-hidden rounded-r-[20px]">
          {isTrue ? (
            <div>
              <div className="flex justify-center mb-3">
                <img
                  src={TickIcon}
                  alt="logo"
                  className="object-cover w-[28%]"
                />
              </div>
              <div className="mb-3">
                <h1 className="text-[32px] font-semibold text-center">
                  Password Updated
                </h1>
                <p className="text-[16px] text-center">
                  Your password has been reset.
                </p>
              </div>
              <div className=" flex justify-center items-center">
                <div className="w-[164px]">
                  <Button
                    text="Continue"
                    type="button"
                    handleSubmit={() => navigate("/auth/login")}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md p-7">
              <div className="flex justify-center ">
                <img
                  src={ForgotiIcon}
                  alt=""
                  className="w-[121.48px] h-[121.48px] object-cover"
                />
              </div>

              <div>
                <div className="mb-3 px-12 mt-3">
                  <h1 className="text-[32px] font-semibold text-center">
                    Set New Password
                  </h1>
                </div>
                <form className="space-y-3" onSubmit={handleSubmit}>
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
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="Cpassword"
                    name="Cpassword"
                    value={values.Cpassword}
                    error={errors.Cpassword}
                    type="password"
                    placeholder="Confirm New Password"
                    maxLength={50}
                  />

                  <div className="mb-6 pt-2">
                    <Button type="submit" text="Save" loading={loading} />
                  </div>
                  <BackButton handleClick={() => navigate(-1)} />
                </form>
              </div>
            </div>
          )}
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

export default ResetPassword;
