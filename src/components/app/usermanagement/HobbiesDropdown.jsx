import { useState } from "react";

export default function HobbiesDropdown({
  hobbiesData,
  selectedHobbies,
  setSelectedHobbies,
  valueKey = "hobbie_name", // default: name, override: id
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (hobby) => {
    const value = hobby[valueKey]; // yahan id ya name aayega

    if (selectedHobbies.includes(value)) {
      setSelectedHobbies(selectedHobbies.filter((item) => item !== value));
    } else {
      setSelectedHobbies([...selectedHobbies, value]);
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
          ? hobbiesData
              ?.filter((hobby) => selectedHobbies.includes(hobby[valueKey]))
              .map((hobby) => hobby.hobbie_name)
              .join(", ")
          : "Select hobbies"}
      </div>

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
                checked={selectedHobbies.includes(hobby[valueKey])}
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
