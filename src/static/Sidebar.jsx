import { FaTag } from "react-icons/fa6";
import {
  DashboardIcon,
  LockIcon,
  LogoutIcon,
  NotiIcon,
  SuccesStory,
  UserIcon,
} from "../assets/export";
import { FaKey } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

export const sidebarData = [
  {
    title: "Dashboard",
    icon: DashboardIcon,
    whiteIcon: DashboardIcon,
    link: "/app/home",
  },
  {
    title: "User Management",
    icon: UserIcon,
    whiteIcon: UserIcon,
    link: "/app/users",
  },
  {
    title: "Success Stories",
    icon: SuccesStory,
    whiteIcon: SuccesStory,
    link: "/app/success-story",
  },
  {
    title: "Push Notifications",
    icon: NotiIcon,
    whiteIcon: NotiIcon,
    link: "/app/push-notifications",
  },

  {
    title: "Update Password",
    icon: LockIcon,
    whiteIcon: LockIcon,
    link: "/app/update-password",
  },
  {
    title: "Promo & Access Code",
    icon: <FaTag />,
    whiteIcon: <FaTag />,
    link: "/app/promo-code",
  },
  {
    title: "Add School",
    icon: <BiSolidSchool />,
    whiteIcon: <BiSolidSchool />,
    link: "/app/add-school",
  },
];
