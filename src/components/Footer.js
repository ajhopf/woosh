import './Footer.scss'

import {Link} from "react-router-dom";

import wooshIcon from '../assets/icon-studio.png';
import instagramIcon from '../assets/instagram_icon.png';
import whatsappIcon from '../assets/whatsapp_icon.png';
import vimeoIcon from '../assets/vimeo_icon.png';
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return <footer className="d-grid">
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