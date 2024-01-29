import { lazy } from "react";

const Header = lazy(() => import('../Header'))
const Content = lazy(() => import('../../pages/Setttings/Content'))
const Setting = lazy(() => import('../../pages/Setttings/Setting'))

import '../../../styles/Settings.scss'

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
