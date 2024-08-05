import { lazy } from "react";

const Header = lazy(() => import('../Header'))
const Content = lazy(() => import('../../pages/Setttings/Content'))
const Setting = lazy(() => import('../../pages/Setttings/Setting'))

import '../../../styles/Settings.scss'

/**
 * Renders the Settings component, which includes the Header, Content, and Setting components.
 *
 * @returns {JSX.Element} The Settings component
 *
 * @example
 * import Settings from './Settings';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <Settings />
 *     </div>
 *   );
 * };
 */
const Settings = () => {
    return (
        <>

            <Header />
            <Content />
            <Setting />

        </>
    );
};


export default Settings