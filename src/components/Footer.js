import './Footer.scss'

import wooshIcon from '../assets/woosh-icons/icon-studio.png';
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return <footer className="main-footer">
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