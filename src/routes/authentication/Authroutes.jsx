import ForgetPassword from "../../pages/authentication/ForgetPassword";
import Login from "../../pages/authentication/Login";
import OtpEmail from "../../pages/authentication/OtpEmail";
import ResetPassword from "../../pages/authentication/ResetPassword";

export const Authroutes = [
  {
    url:'login',
    title: "Login",
    page: <Login />,
    ispublic: true,
  },
  {
    url:'forgot-password',
    title: "ForgetPassword",
    page: <ForgetPassword />,
    ispublic: true,
  },
  {
    url:'otp-email',
    title: "OtpEmail",
    page: <OtpEmail />,
    ispublic: true,
  },
  {
    url:'reset-password',
    title: "OtpEmail",
    page: <ResetPassword />,
    ispublic: true,
  },
];
