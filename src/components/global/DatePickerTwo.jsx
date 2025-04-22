import { useState } from "react";
import { CalenderIconTwo } from "../../assets/export";
import DatePicker from "react-datepicker";

export default function DatePickerTwo({ startDate, setStartDate, setUpdate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (date) => {
    setStartDate(date);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="w-full lg:w-44">
        <div className="relative">
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
              : ""}
            <img
              src={CalenderIconTwo}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#012C57] w-[12.92px] h-[13.09px]"
              alt="calendar icon"
            />
          </div>
          {isOpen && (
            <div className={`absolute z-50 mt-2 right-2`}>
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
      </div>
    </div>
  );
}
