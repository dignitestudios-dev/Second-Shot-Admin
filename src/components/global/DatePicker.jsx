import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalenderIcon } from "../../assets/export";

const Calender = ({
  startDate,
  setStartDate,
  position = "right-0",
  text,
  setUpdate,
  endDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (date) => {
    setStartDate(date);
    if (endDate) {
      setUpdate((prev) => !prev);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-[160px]">
      <div
        onClick={toggleCalendar}
        className="relative w-full h-[34.89px] p-2 rounded-[8px] border border-[#D9D9D9] bg-white text-[11.63px] font-[500] text-[#212121] cursor-pointer flex items-center"
      >
        {startDate
          ? startDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })
          : text}
        <img
          src={CalenderIcon}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#012C57] w-[12.92px] h-[13.09px]"
          alt="calendar icon"
        />
      </div>

      {isOpen && (
        <div className={`absolute z-50 mt-2 ${position}`}>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            inline
            maxDate={new Date()}
            calendarClassName="shadow-lg border rounded-md"
            onClickOutside={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Calender;
