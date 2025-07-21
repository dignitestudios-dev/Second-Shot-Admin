import { useContext, useState } from "react";
import axios from "../../axios";
import { ErrorToast } from "../../components/global/Toaster";
import { processError } from "../../lib/utils";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { loginAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    resetForm,
    setGenerateCode
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(
          response?.data,
          navigate,
          loginAuth,
          resetForm,
          setGenerateCode
        );
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useForgetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    extraParam = null
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, extraParam);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useUpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    modal = false,
    resetForm
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, modal, resetForm);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

const useVerifyOtp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useResendOtp = () => {
  const [loader, setLoading] = useState(false);
  const navigate = useNavigate();
  const { startTimer } = useContext(AuthContext);
  const OtpResend = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    timer = false
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, timer, startTimer);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loader, OtpResend };
};

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    modal = false
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, modal);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useCreateNotification = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback,
    resetForm
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, navigate, resetForm);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useSuccessStory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback = null,
    modal = false,
    update = false
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, modal, update);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};
const useEditSuccessStory = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const postData = async (
    url,
    isFormData = false,
    formdata = null,
    data = null,
    callback = null,
    modal = false,
    update = false
  ) => {
    try {
      setLoading(true);
      const response = await axios.put(url, isFormData ? formdata : data);
      if (typeof callback === "function") {
        callback(response?.data, modal, update);
      }
      return response?.data;
    } catch (error) {
      console.log(error);
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, postData };
};

export {
  useLogin,
  useForgetPassword,
  useResetPassword,
  useVerifyOtp,
  useUpdatePassword,
  useResendOtp,
  useCreateNotification,
  useSuccessStory,
  useEditSuccessStory,
};
