import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/woosh-icons/icon_header_transparent.png";
import SocialMediaIcons from "../SocialMediaIcons";

import './DesktopHeader.scss'

const DesktopHeader = () => {
  return <header className="desktop-header">
    <div className="header-logo-container">
      <Link to="/">
        <img src={logo} alt="woosh logo"/>
      </Link>
    </div>
    <nav className="header-nav-container">
      <ul>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/works">WORKS</NavLink>
        <NavLink to="/who">WHO</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </ul>
    </nav>
    <div className="header-social-media-container">
      <SocialMediaIcons/>
    </div>
  </header>
}

export default DesktopHeader;