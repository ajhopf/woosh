import MainNav from "../components/MainNav";
import {Outlet} from "react-router-dom";

import {useState} from "react";
import Footer from "../components/Footer";

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const setMainDisplay = () => {
    setMobileMenuOpen(prevState => !prevState);
  }

  return <>
    <MainNav setMainDisplay={setMainDisplay}/>
    <main>
      {!mobileMenuOpen && <Outlet/>}
    </main>
    <Footer/>
  </>
};

export default MainLayout;