import { NavLink, useLocation } from "react-router";
import { IoMdClose } from "react-icons/io";
import { LogoutIcon, SideBarLogo } from "../../assets/export";
import { sidebarData } from "../../static/Sidebar";

const Sidebaar = ({ toggleModal, setIsOpen }) => {
  const location = useLocation();

  return (
    <div className="w-full h-full overflow-y-auto px-10 py-4 flex flex-col gap-3">
      <div className="flex justify-end mb-2">
        <button onClick={toggleModal} className="lg:hidden block">
          <IoMdClose className="text-2xl text-white" />
        </button>
      </div>

      <div className="mb-6 flex justify-start">
        <img
          src={SideBarLogo}
          loading="lazy"
          alt="logo-organization"
          className="w-[155px] h-[76px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        {sidebarData?.map((sidebar) => (
          <NavLink
            key={sidebar?.link}
            to={sidebar?.link}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 h-[40px] py-2 mt-4 rounded-[8px] text-[13px] font-medium transition-all ${
                isActive
                  ? "bg-[#FFFFFF14] text-white"
                  : "text-white hover:bg-[#ffffff0c]"
              }`
            }
          >
            {typeof sidebar.icon === "string" ? (
              <img
                src={
                  location?.pathname === sidebar.link
                    ? sidebar?.whiteIcon
                    : sidebar?.icon
                }
                className="w-4 h-4 object-contain"
                alt={`${sidebar.title}-icon`}
              />
            ) : (
              <span className="text-lg">
                {location?.pathname === sidebar.link
                  ? sidebar.whiteIcon
                  : sidebar.icon}
              </span>
            )}

            <span>{sidebar?.title}</span>
          </NavLink>
        ))}

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-3 py-2 mt-4 rounded-[8px] text-[13px] font-medium text-white hover:bg-[#ffffff0c] transition-all"
        >
          <img
            src={LogoutIcon}
            className="w-4 h-4 object-contain"
            alt="logout-icon"
          />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebaar;
