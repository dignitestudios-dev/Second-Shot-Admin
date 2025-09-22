import { useState } from "react";

export default function HobbiesDropdown({ hobbiesData, selectedHobbies, setSelectedHobbies }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (hobby) => {
    if (selectedHobbies.includes(hobby.hobbie_name)) {
      // agar already select hai to remove kar do
      setSelectedHobbies(selectedHobbies.filter((name) => name !== hobby.hobbie_name));
    } else {
      // warna add kar do
      setSelectedHobbies([...selectedHobbies, hobby.hobbie_name]);
    }
  };

  return (
    <div className="relative w-full">
     <label className="font-[500] text-[14px]">Hobbies</label>
      <div
        className="border rounded-lg px-3 py-2 bg-white cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {selectedHobbies.length > 0
          ? selectedHobbies.join(", ") // show names instead of count
          : "Select hobbies"}
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-20 max-h-40 overflow-y-auto">
          {hobbiesData?.map((hobby) => (
            <label
              key={hobby._id}
              className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedHobbies.includes(hobby.hobbie_name)}
                onChange={() => handleSelect(hobby)}
              />
              {hobby.hobbie_name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
