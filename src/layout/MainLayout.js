import {Outlet} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/header/Header";

import './MainLayout.scss';
import {useState} from "react";

const MainLayout = () => {
  const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false);

  const handleOpenMobileHeader = (isMobileScreen, isOpen) => {
    if (isMobileScreen && isOpen) {
      setMobileHeaderOpen(true);
    } else {
      setMobileHeaderOpen(false);
    }
  };

  if (mobileHeaderOpen) {
    return <Header handleOpenMobileHeader={ handleOpenMobileHeader }/>;
  }

  return <>
    <Header handleOpenMobileHeader={ handleOpenMobileHeader }/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>;
};

export default MainLayout;