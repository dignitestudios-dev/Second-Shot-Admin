import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(() => Cookies.get("token"));
  const [name, setName] = useState(Cookies.get("name"));
  const [email, setEmail] = useState(Cookies.get("email"));
  const [role, setRole] = useState(Cookies.get("role"));
  const [school, setSchool] = useState(Cookies.get("role"));
  const [timer, setTimer] = useState(30);
  const [resendTime, setResendTime] = useState(false);
  const loginAuth = (data) => {
    if (data) {
      Cookies.set("token", data?.data?.token);
      Cookies.set("name", data?.data?.name);
      Cookies.set("email", data?.data?.email);
      Cookies.set("role", data?.data?.role);
      Cookies.set("school", data?.data?.school);
      //   Cookies.set("profilePicture", data?.data?.userRecord?.profilePicture);

      setToken(data?.data?.token);
      setName(data?.data?.name);
      setEmail(data?.data?.email);
      setRole(data?.data?.role);
      setSchool(data?.data?.school);
    }
  };
  const startTimer = () => {
    let count = 30;
    setTimer(count);

    const intervalId = setInterval(() => {
      count -= 1;
      setTimer(count);
      if (count === 0) {
        clearInterval(intervalId);
        setResendTime(false);
      }
    }, 1000);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("email");
    Cookies.remove("school");
    // Cookies.clear();
    setToken(null);
    navigate("/auth/login");
  };

  useEffect(() => {
    const storedToken = Cookies.get("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        loginAuth,
        logout,
        email,
        name,
        startTimer,
        resendTime,
        timer,
        role,
        setResendTime,
        school,
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
