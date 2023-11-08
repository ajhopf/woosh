import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/woosh_audio-2.png";
import {useState} from "react";

import './MobileHeader.scss'

const MobileHeader = (props) => {
  const [open, setOpen] = useState(false);

  open ? props.setMobileHeaderIsOpen(true) : props.setMobileHeaderIsOpen(false);

  const handleNavBarToggle = () => {
    setOpen(prevState => !prevState);
  };

  return <>
    <header className="mobile-header">
      <div className="header-logo-container">
        <Link to="/">
          <img src={logo} alt="Woosh Logo"/>
        </Link>
      </div>
      <div className="header-middle-space">
      </div>
      <div className="header-toggle-button-container">
        <button
          onClick={handleNavBarToggle}
          className={open ? "menu-toggle open" : "menu-toggle"}
          type="button"
          data-bs-target="#basic-navbar-nav"
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
    <nav className={ open ? "header-nav show" : "header-nav"}>
      <ul>
        <NavLink to="/">HOME onClick={() => setOpen(false)}</NavLink>
        <NavLink to="/works" onClick={() => setOpen(false)}>WORKS</NavLink>
        <NavLink to="/who" onClick={() => setOpen(false)}>WHO</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>CONTACT</NavLink>
        <NavLink to="/shop" onClick={() => setOpen(false)}>SHOP</NavLink>
      </ul>
    </nav>
  </>
}

export default MobileHeader;