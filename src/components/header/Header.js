import {useEffect, useState} from "react";

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

import './Header.scss'

const Header = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobileHeaderIsOpen, setMobileHeaderIsOpen] = useState(false)

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

  props.handleOpenMobileHeader(screenWidth <= 968, mobileHeaderIsOpen)

  return screenWidth > 968 ? <DesktopHeader/> : <MobileHeader setMobileHeaderIsOpen={setMobileHeaderIsOpen}/>;
};

export default Header;