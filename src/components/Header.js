import {Link, NavLink} from "react-router-dom";
import logo from "../assets/woosh_audio-140x70.png";

import './Header.scss'
import instagramIcon from "../assets/instagram_icon.png";
import vimeoIcon from "../assets/vimeo_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";
import SocialMediaIcons from "./SocialMediaIcons";

const Header = (props) => {
  return <header>
    <div className="header-logo-container">
      <Link to="/">
        <img src={logo}/>
      </Link>
    </div>
    <nav className="header-nav-container">
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/works">WORKS</NavLink>
        <NavLink to="/who">WHO</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
      </ul>
    </nav>
    <div className="header-social-media-container">
      <SocialMediaIcons/>
    </div>
  </header>;
};

export default Header;