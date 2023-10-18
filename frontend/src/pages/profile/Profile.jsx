import { useState } from "react";
import ProfileSidebar from "../../components/Profile/profileSidebar/ProfileSidebar";
import ProfileContent from "../../components/Profile/profileContent/ProfileContent";
import Header from "../../components/layout/header/Header";
import "./Profile.scss";

const Profile = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <div className="profile_container">
        <div className="profile_sidebar">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent  active={active}/>
      </div>
    </>
  );
};

export default Profile;
