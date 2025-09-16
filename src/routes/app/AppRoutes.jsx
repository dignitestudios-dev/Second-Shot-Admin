import Home from "../../pages/app/home/Home";
import UserManagement from "../../pages/app/usermanagement/UserManagement";
import PushNotification from "../../pages/app/pushnotification/PushNotification";
import CreateNotification from "../../pages/app/pushnotification/CreateNotification";
import UpdatePassword from "../../pages/app/updatepassword/UpdatePassword";
import SucessStory from "../../pages/app/successstory/SucessStory";
import ProfileDetail from "../../pages/app/successstory/ProfileDetail";
import UserDetail from "../../pages/app/usermanagement/UserDetail";
import GoalDetail from "../../pages/app/usermanagement/GoalDetail";

import ResumeDetail from "../../pages/app/usermanagement/ResumeDetail";
import CareerDetails from "../../pages/app/usermanagement/CareerDetails";
import PromoCode from "../../pages/app/promocode/PromoCode";
import PromoTable from "../../components/app/promocode/PromoTable";
import PromoForm from "../../components/app/promocode/PromoForm";
import School from "../../pages/app/addschools/School";

export const Approutes = [
  {
    url: "home",
    title: "Dashboard",
    page: <Home />,
    ispublic: true,
  },

  {
    url: "users",
    title: "UserManagemnet",
    page: <UserManagement />,
    ispublic: true,
  },
  {
    url: "user-detail/:id",
    title: "user-detail",
    page: <UserDetail />,
    ispublic: true,
  },
  {
    url: "push-notifications",
    title: "push-notifications",
    page: <PushNotification />,
    ispublic: true,
  },

  {
    url: "create-notification",
    title: "create-notification",
    page: <CreateNotification />,
    ispublic: true,
  },
  {
    url: "update-password",
    title: "update-password",
    page: <UpdatePassword />,
    ispublic: true,
  },
  {
    url: "success-story",
    title: "success-Story",
    page: <SucessStory />,
    ispublic: true,
  },
  {
    url: "success-detail-profile",
    title: "success-detail-profile",
    page: <ProfileDetail />,
    ispublic: true,
  },
  {
    url: "goal-detail/:id",
    title: "goal-detail",
    page: <GoalDetail />,
    ispublic: true,
  },
  {
    url: "carrer-detail/:id",
    title: "carrer-detail",
    page: <CareerDetails />,
    ispublic: true,
  },
  {
    url: "resume-detail",
    title: "resume-detail",
    page: <ResumeDetail />,
    ispublic: true,
  },
  {
    url: "promo-code",
    title: "promo-code",
    page: <PromoCode />,
    ispublic: true,
  },
  {
    url: "generate-promo-code",
    title: "generate-promo-code",
    page: <PromoForm />,
    ispublic: true,
  },
  {
    url: "access-code",
    title: "access-code",
    page: <PromoCode />,
    ispublic: true,
  },
  {
    url: "add-school",
    title: "add-school",
    page: <School />,
    ispublic: true,
  },
];
