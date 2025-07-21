import { ErrorToast, SuccessToast } from "../components/global/Toaster";

export const processSignup = (data, navigate) => {
  if (data?.success) {
    navigate("/app/dashboard");
    return;
  }
};

export const processLogin = (data, navigate, loginAuth) => {
  if (data?.success) {
    loginAuth(data);
    SuccessToast(data?.message);
    navigate("/app/home");
    return;
  }
};

export const processForget = (data, navigate, email) => {
  if (data?.success) {
    sessionStorage.setItem("user_email", email);
    SuccessToast(data?.message);
    navigate("/auth/otp-email");
    return;
  }
};

export const processUpdatePassword = (data, navigate, setOpen, resetForm) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setOpen(true);
    resetForm();
    return;
  }
};

export const processResetPassword = (data, navigate, setIsTrue) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setIsTrue(true);
    return;
  }
};
export const processCoupenCode = (
  data,
  navigate,
  loginAuth,

  setGenerateCode
) => {
  if (data?.success) {
    SuccessToast(data?.message);

    sessionStorage.setItem("couponId", data?.data?.id);
    setGenerateCode(true);
    return;
  }
};
export const processGenerateCode = (
  data,
  navigate,
  loginAuth,
  resetForm,
  setGenerateCode
) => {
  if (data?.success) {
    SuccessToast(data?.message);
    if (typeof resetForm === "function") {
      resetForm();
    }
    setGenerateCode(false);
    navigate("/app/promo-code");
    return;
  }
};
export const processVerifyOtp = (data, navigate) => {
  if (data?.success) {
    SuccessToast(data?.message);
    navigate("/auth/reset-password");
    return;
  }
};
export const processResendOtp = (data, navigate, setResendTime, startTimer) => {
  if (data?.success) {
    SuccessToast(data?.message);
    setResendTime(true);
    startTimer();
    return;
  }
};

export const processNotification = (data, navigate, resetForm) => {
  if (data?.success) {
    SuccessToast(data?.message);
    resetForm();
    navigate("/app/push-notifications");
    return;
  }
};
export const processSuccessStory = (data, setOpen, setUpdate) => {
  console.log(data, "data==>");
  if (data?.message) {
    SuccessToast(data?.message);
    setOpen(false);
    setUpdate((prev) => !prev);

    return;
  }
};

export const processError = (error) => {
  if (error?.response?.data?.message) {
    ErrorToast(error?.response?.data?.message);
    return;
  } else {
    ErrorToast("Something went wrong");
  }
};
