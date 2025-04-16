import { useState, useEffect, useRef } from "react";
import { TimeCircle } from "../../assets/export";

const TimePicker = ({ onSave, onCancel,value }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  // Time picker state
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState("01");
  const [period, setPeriod] = useState("AM");

  // Hours, minutes and periods for the picker
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const periods = ["AM", "PM"];
  useEffect(() => {
    setSelectedTime(value || "");
  }, [value]);
  // Update selectedTime whenever hour, minute, or period changes
  useEffect(() => {
    setSelectedTime(`${hour}:${minute} ${period}`);
  }, [hour, minute, period]);

  // Handle save
 
  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPicker && !event.target.closest(".time-picker-modal")) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  // Refs for the selected items
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const periodRef = useRef(null);

  // Scroll to center the selected values when picker opens
  useEffect(() => {
    if (showPicker) {
      setTimeout(() => {
        if (hourRef.current) {
          hourRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
        if (minuteRef.current) {
          minuteRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
        if (periodRef.current) {
          periodRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    }
  }, [showPicker, hour, minute, period]);

  return (
    <div className="relative">
      <div className="rounded-[8px] h-[35px] w-[220px] px-2 border flex items-center gap-2">
        <img
          src={TimeCircle || "/placeholder.svg"}
          className="cursor-pointer h-[20px] w-[20px]"
          alt="Time Icon"
        />
        <input
          type="text"
          value={value}
          readOnly
          onClick={() => setShowPicker(true)}
          className={`cursor-pointer bg-transparent w-full px-2 py-1 text-sm outline-none ${
            !selectedTime ? "text-gray-400" : ""
          }`}
        />
      </div>

      {showPicker && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="time-picker-modal bg-white rounded-lg shadow-lg w-[280px] overflow-hidden">
            <div className="time-picker-header flex justify-between items-center p-3 border-b">
              <div className="text-lg font-medium"></div>
              <button
                className="close-btn text-gray-500 hover:text-gray-700"
                onClick={() => setShowPicker(false)}
              >
                ✕
              </button>
            </div>

            <div className="time-picker-content p-4">
              {/* Selected time display */}

              <div className="time-columns flex justify-between h-[200px]">
                {/* Hours column */}
                <div className="time-column flex-1 overflow-y-auto scrollbar-hide">
                  <div className="flex flex-col items-center">
                    {hours.map((h) => (
                      <div
                        key={`hour-${h}`}
                        ref={h === hour ? hourRef : null}
                        className={`time-item py-2 px-4 my-1 cursor-pointer rounded-md w-16 text-center
                          ${
                            h === hour
                              ? " bg-gray-200 font-bold"
                              : "hover:bg-gray-100"
                          }`}
                        onClick={() => setHour(h)}
                      >
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Minutes column */}
                <div className="time-column flex-1 overflow-y-auto scrollbar-hide">
                  <div className="flex flex-col items-center">
                    {minutes.map((m) => (
                      <div
                        key={`minute-${m}`}
                        ref={m === minute ? minuteRef : null}
                        className={`time-item py-2 px-4 my-1 cursor-pointer rounded-md w-16 text-center
                          ${
                            m === minute
                              ? " bg-gray-200 font-bold"
                              : "hover:bg-gray-100"
                          }`}
                        onClick={() => setMinute(m)}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* AM/PM column */}
                <div className="time-column flex-1 overflow-y-auto scrollbar-hide">
                  <div className="flex flex-col items-center">
                    {periods.map((p) => (
                      <div
                        key={`period-${p}`}
                        ref={p === period ? periodRef : null}
                        className={`time-item py-2 px-4 my-1 cursor-pointer rounded-md w-16 text-center
                          ${
                            p === period
                              ? " bg-gray-200 font-bold"
                              : "hover:bg-gray-100"
                          }`}
                        onClick={() => setPeriod(p)}
                      >
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="time-picker-footer p-3 border-t flex justify-end">
            <button
  className="px-4 py-2 bg-grad-button text-white rounded-md"
  onClick={() => {
    onSave({ time: `${hour}:${minute} ${period}` });
    setShowPicker(false);
  }}
>
  Save
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
