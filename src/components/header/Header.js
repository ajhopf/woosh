import {useEffect, useState} from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

import './Header.scss'

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update the screen width in state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add a resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const header = screenWidth > 968 ? <DesktopHeader/> : <MobileHeader/>;

  return header;
};

export default Header;