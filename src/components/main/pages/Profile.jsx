import { lazy } from "react";
import "../../../styles/Profile.scss";

import Header from "../Header";

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
