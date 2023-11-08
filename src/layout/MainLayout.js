import {Outlet} from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/header/Header";

import './MainLayout.scss'

const MainLayout = () => {
  return <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
  </>
};

export default MainLayout;