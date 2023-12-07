import { lazy } from "react";
import "../../../styles/Profile.scss";

const Header = lazy(() => import("../Header"));

const ProfileContent = lazy(() =>
  import("../../UI/pages/profile/ProfileContent")
);

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileContent />
    </>
  );
};

export default Profile;
