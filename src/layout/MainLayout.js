import {Outlet, useLocation, useNavigation} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/header/Header";

import './MainLayout.scss';
import {useState} from "react";

const MainLayout = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const location = useLocation();
  const navigation = useNavigation();

  const handleOpenMobileHeader = (isMobileScreen, isOpen) => {
    if (isMobileScreen && isOpen) {
      setMobileHeaderOpen(true);
    } else {
      setMobileHeaderOpen(false);
    }
  };

  if (mobileHeaderOpen) {
    return <>
      <Header handleOpenMobileHeader={ handleOpenMobileHeader }/>
      <main></main>
    </>
  }

  if (location.pathname.includes("/contact")) {
    return <>
      <Header handleOpenMobileHeader={ handleOpenMobileHeader }/>
      <main>
        <Outlet/>
      </main>
    </>
  }

  return <>
    <Header handleOpenMobileHeader={handleOpenMobileHeader}/>
    <main>
      <Outlet/>
    </main>
    { navigation.state === 'idle' && <Footer />}
  </>;
};

export default MainLayout;