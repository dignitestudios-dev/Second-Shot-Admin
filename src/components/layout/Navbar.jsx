import { CiSearch } from "react-icons/ci";
// import { beardGuy} from "../../assets/export";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
// import ProfileDropdown from "../global/ProfileDropdown";
import { useNavigate } from "react-router";
import { ProfileImg } from "../../assets/export";
// import { beardGuy } from "../../assets/export";

const Navbar = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  const navigate = useNavigate("");
  return (
    <div className="w-full h-full">
      <div className="w-full h-full  px-4 flex justify-between items-center">       
        <div className="flex relative items-center px-1 justify-end w-full gap-4">        
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setisProfileOpen(!isProfileOpen)}
          >
            <img
              src={ProfileImg}
              className="rounded-full w-[32px] h-[32px] lg:h-12 lg:w-12"
              alt=""
            />
            <div className="lg:block hidden">
              <h4 className="font-[500] text-[13px] lg:text-[13px] text-white">
              Mike Smith
              </h4>
              <span className="font-[400] text-[12px] lg:text-[12px] text-[#E6E6E6]">
                Admin
              </span>
            </div>
          
          </div>
        </div>
      </div>
      {/* {isProfileOpen && (
        <div className="fixed right-10 shadow-lg overflow-auto   p-5 top-30 bg-[#0E0E0E]  w-[200px] rounded-[15px] ">
          <ProfileDropdown />
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
