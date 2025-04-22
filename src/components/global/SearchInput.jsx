import React from "react";
import { SearchIcon } from "../../assets/export";

const SearchInput = ({ onChange, value }) => {
  return (
    <div>
      {" "}
      <div className="relative w-full sm:w-auto">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={SearchIcon} className="h-4 w-4 " alt="" />
        </div>
        <input
          type="text"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 pr-10"
          placeholder="Search"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchInput;
