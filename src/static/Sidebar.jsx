import { DashboardIcon,LockIcon,LogoutIcon,NotiIcon,SuccesStory,UserIcon } from "../assets/export";

export const sidebarData = [
  {
    title: "Dashboard",
    icon:DashboardIcon,
    whiteIcon:DashboardIcon,
    link: "/app/home",
  },
  {
    title: "User Management",
    icon: UserIcon,
    whiteIcon:UserIcon,
    link: "/app/users",
  },
  {
    title: "Success Stories",
    icon: SuccesStory,
    whiteIcon:SuccesStory,
    link: "/app/success-story",
  }, 
  {
    title: "Push Notifications",
    icon: NotiIcon,
    whiteIcon:NotiIcon,
    link: "/app/push-notifications",
  }, 
  
   
  {
    title: "Update Password",
    icon: LockIcon,
    whiteIcon:LockIcon,
    link: "/app/update-password",
  }, 
 
];
