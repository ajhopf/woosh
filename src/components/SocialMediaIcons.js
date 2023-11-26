import {Link} from "react-router-dom";
import instagramIcon from "../assets/social-media-icons/instagram_icon.png";
import vimeoIcon from "../assets/social-media-icons/vimeo_icon.png";
import whatsappIcon from "../assets/social-media-icons/whatsapp_icon.png";

import './SocialMediaIcons.scss';

const SocialMediaIcons = () => {
  return <ul className="social-media">
    <li>
      <Link to="https://www.instagram.com/bgelpi/" target={"_blank"} aria-label="Bolivar Gelpi's Instagram">
        <img src={instagramIcon} alt="Instagram logo"/>
      </Link>
    </li>
    <li>
      <Link to="https://vimeo.com/wooshaudio" target={"_blank"} aria-label="Link to Woosh Vimeo Channel">
        <img className="vimeo" src={vimeoIcon} alt="Vimeo logo"/>
      </Link>
    </li>
    <li>
      <Link to="https://wa.me/5551994231763" target={"_blank"}  aria-label="Chat on WhatsApp">
        <img src={whatsappIcon} alt="Youtube logo"/>
      </Link>
    </li>
  </ul>
}

export default SocialMediaIcons;