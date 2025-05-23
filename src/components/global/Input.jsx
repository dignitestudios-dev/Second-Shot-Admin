import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({
  register,
  text,
  type,
  error,
  placeholder,
  value,
  isDisabled = false,
  isAuth = true,
  maxLength,
  onChange,
  onBlur,
  name,
  id,
  onKeyDown,
  onkeypress,
}) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
      <label className="ml-1 text-[14px] font-medium text-[#181818] ">
        {text}
      </label>

      <div
        className={`w-full h-[52px] focus-within:border-[1px] border focus-within:border-[#0E73D0] rounded-[15px]  flex items-center justify-center ${
          error
            ? "focus-within:border-[#FF453A]"
            : "focus-within:border-[#55C9FA]"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center rounded-[12px] relative">
          <input
            value={value}
            type={isPassVisible ? "text" : type}
            disabled={isDisabled}
            maxLength={maxLength}
            placeholder={placeholder}
            onBlur={onBlur}
            id={id}
            name={name}
            onKeyDown={onKeyDown}
            onKeyPress={onkeypress}
            className={`w-full p-3 outline-none font-[500] focus:border-[#0E73D0]  border border-[#9A9A9A] rounded-[15px] 
              placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#181818] text-[#181818] ${
                (isAuth ? "bg-transparent" : "e",
                isDisabled ? "bg-gray-100 " : "bg-white")
              } h-full px-3 text-sm font-medium`}
            onChange={onChange}
          />

          {type === "password" && (
            <div className="absolute bg-white right-0 rounded-r-[15px] flex justify-center  h-12 w-10 mr-[0.5px] z-10">
              <button
                type="button"
                onClick={() => setIsPassVisible((prev) => !prev)}
                className="  top-4 right-3 text-lg"
                style={{
                  color: "#6B7373",
                }}
              >
                {!isPassVisible ? (
                  <FaEyeSlash className="text-lg text-gray-800" />
                ) : (
                  <FaEye className="text-lg text-gray-800" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
