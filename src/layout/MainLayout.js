import {Outlet, useLocation, useNavigation} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/header/Header";

import './MainLayout.scss';
import {useEffect, useState} from "react";

const MainLayout = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const location = useLocation();
  const navigation = useNavigation()
  let isLoading = false;

  if (navigation.state === 'loading') {
    console.log('loading...')
    isLoading = true
    setTimeout(() => {
      console.log('loading finished')
      isLoading = false
    }, 2000)
  }

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
    <Footer/>
  </>;
};

export default MainLayout;