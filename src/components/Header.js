import {Link, NavLink} from "react-router-dom";
import logo from "../assets/woosh_audio-140x70.png";

import './Header.scss'

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

    </div>
  </header>;
};

export default Header;