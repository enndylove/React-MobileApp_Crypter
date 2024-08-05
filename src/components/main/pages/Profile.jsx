/**
 * Profile component that renders the Header and ProfileContent components.
 *
 * @returns {JSX.Element} The Profile component.
 *
 * @example
 * import Profile from './Profile';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <Profile />
 *     </div>
 *   );
 * };
 */
import { lazy } from "react";
import "../../../styles/Profile.scss";

import Header from "../Header";

/**
 * Lazily loaded ProfileContent component.
 *
 * @type {React.LazyExoticComponent<React.ComponentType<any>>}
 */
const ProfileContent = lazy(() =>
    import("../../UI/pages/profile/ProfileContent")
);

/**
 * Profile component that renders the Header and ProfileContent components.
 *
 * @returns {JSX.Element} The Profile component.
 */
const Profile = () => {
    return (
        <>
            <Header />
            <ProfileContent />
        </>
    );
};

export default Profile;