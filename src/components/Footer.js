import './Footer.scss'

import wooshIcon from '../assets/woosh-icons/icon-studio.png';
import SocialMediaIcons from "./SocialMediaIcons";
import {useEffect, useState} from "react";

const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, []);

  return <footer className={show ? "main-footer" : "main-footer hide"}>
    <div className="left-div">
      <p className="titles">{ "Reach out".toUpperCase() }</p>
      <img className="woosh-footer-icon" src={ wooshIcon } alt="Woosh Studio Icon"/>
    </div>
    <div className="right-div">
      <p>If you're interested in learning more about our love for music and innovative ideas, don't hesitate to reach out.</p>
      <div>
        <p>bgelpi@woosh.com</p>
        <p>+55 51 99423-1763</p>
      </div>
      <SocialMediaIcons/>
    </div>
  </footer>
};

export default Footer;