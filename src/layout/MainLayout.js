import MainNav from "../components/MainNav";
import {Outlet} from "react-router-dom";

import './MainLayout.scss'
import {useState} from "react";

const MainLayout = () => {
  const [mainClasses, setMainClasses] = useState('');
  const setMainDisplay = () => {
    if (mainClasses.length > 0) {
      setMainClasses("")
    } else {
      setMainClasses("display-none")
    }
  }

  return <>
    <MainNav setMainDisplay={setMainDisplay}/>
    <main className={ mainClasses }>
      <Outlet/>
    </main>
  </>
};

export default MainLayout;