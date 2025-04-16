import React from "react";

const TextArea = ({
  text,
  placeholder,
  row,
  value,
  onChange,
  onBlur,
  error,
  id,
  name
}) => {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor="" className="text-[14px] text-[#0F0F0F] font-[500] ">
          {text}
        </label>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className="border border-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-blue-300 w-full rounded-[12px] p-4 text-[16px] placeholder:text-[#212121]"
        rows={row}
        id={id}
        name={name}
      ></textarea>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default TextArea;
