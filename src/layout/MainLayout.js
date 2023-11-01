import {Outlet} from "react-router-dom";

import {useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import './MainLayout.scss'

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const setMainDisplay = () => {
    setMobileMenuOpen(prevState => !prevState);
  }

  return <>
    {/*<MainNav setMainDisplay={setMainDisplay}/>*/}

    <Header/>
    <main>
      {!mobileMenuOpen && <Outlet/>}
    </main>
    <Footer/>
  </>
};

export default MainLayout;