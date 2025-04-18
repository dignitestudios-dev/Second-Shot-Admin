import React, { useContext, useRef, useState } from "react";
import { useResendOtp, useVerifyOtp } from "../../hooks/api/Post";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { AuthIcon, OtpIcon } from "../../assets/export";
import Button from "../../components/global/Button";
import BackButton from "../../components/global/BackButton";
import { processResendOtp, processVerifyOtp } from "../../lib/utils";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
const OtpEmail = () => {
  const { loading, postData } = useVerifyOtp();
  const { loader, OtpResend } = useResendOtp();
  const navigate = useNavigate();
  const email = sessionStorage.getItem("user_email");
  const inputs = useRef([]);
  const { resendTime,setResendTime,timer  } = useContext(AuthContext);

  const [otp, setOtp] = useState(Array(6).fill(""));

  const { values, handleBlur, handleSubmit, errors, touched, setFieldValue } =
    useFormik({
      initialValues: { otp: "" },
      validationSchema: Yup.object({
        otp: Yup.string()
          .length(6, "OTP must be 6 digits")
          .required("OTP is required"),
      }),
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email,
          otp: values.otp,
        };
        postData(
          "/api/auth/admin/verify-otp",
          false,
          null,
          data,
          processVerifyOtp
        );
      },
    });

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const joinedOtp = newOtp.join("");
      setFieldValue("otp", joinedOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      setFieldValue("otp", newOtp.join(""));

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleResend = () => {
    const data = {
      email: email,
    };
    OtpResend(
      "/api/auth/admin/resend-otp",
      false,
      null,
      data,
      processResendOtp,
      setResendTime,
    );
  };

  return (
    <div className="bg-gradient-to-br from-[#d2e1ee]/60 to-[#dff7d6]/40 p-8">
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-12 md:col-span-3 hidden md:flex justify-center bg-grad-button rounded-l-[20px]"></div>
        <div className="col-span-12 md:col-span-9 flex justify-center items-center bg-white pb-4 relative overflow-hidden rounded-r-[20px]">
          <div className="w-full max-w-md p-7">
            <div className="flex justify-center ">
              <img
                src={OtpIcon}
                alt=""
                className="w-[121.48px] h-[121.48px] object-cover"
              />
            </div>

            <h1 className="text-center mt-4 text-[32px] font-[600] text-[#181818] ">
              Verify OTP
            </h1>
            <p className="text-center mt-2 text-[16px] leading-[100%] font-[400] text-[#181818]  ">
              The code was sent to <span className="font-[500]">{email}</span>
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-[393px] mt-4  flex flex-col justify-start items-start gap-4"
            >
              <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
                <div className="flex justify-center space-x-4 ">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={(el) => (inputs.current[index] = el)}
                      className="w-[49px] h-[49px] border border-gray-300 rounded-[12px] text-center text-lg font-medium focus:outline-none focus:ring-1 focus:ring-[#0E73D0]"
                    />
                  ))}
                </div>
              </div>

              {errors.otp && touched.otp && (
                <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
              )}
              <div className="w-full">
                <Button text={"Verify"} type={"submit"} loading={loading} />
              </div>
              <div className="flex justify-center w-full">
                <p className="text-center flex justify-center  text-[16px] text-[#181818] font-[500] ">
                  Didn’t receive the code yet?{" "}
                  <div
                    className={`font-medium text-[#012C57] hover:underline mx-2 cursor-pointer ${
                      resendTime ? "pointer-events-none text-gray-400" : ""
                    }`}
                    onClick={() => handleResend()}
                  >
                    {resendTime ? `Resend in ${timer}s` : "Resend"}
                  </div>
                </p>
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

export default OtpEmail;
