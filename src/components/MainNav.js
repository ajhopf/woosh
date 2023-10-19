import {Link, NavLink, useLocation} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {useState} from "react";

import logo from '../assets/icon-white.png';

import './MainNav.scss';

const MainNav = (props) => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleNavItemClick = () => {
    if (open) {
      props.setMainDisplay();
    }

    setOpen(false);
  };
  const handleNavBarToggle = () => {
    setOpen(prevState => !prevState);
    props.setMainDisplay();
  };

  const isWorksPage = location.pathname.includes('works');
  const isWhoPage = location.pathname.includes('who');

  //not being used -> can be used to style nav based on current page
  const pageStyling = isWorksPage ? " works" : isWhoPage ? " who" : "";

  const navBackgroundClasses = open ? "main-nav open" : "main-nav";
  const toggleMenuBtnClasses = open ? "menu-toggle open" : "menu-toggle";
  const navLinkClasses = "nav-link woosh-nav-link fs-2 ";

  return <Navbar expand="sm" expanded={ open } className={ navBackgroundClasses + pageStyling }>
    <Link className="mobile-logo" to="/">
      <img className="img" src={ logo } alt="Woosh logo"/>
    </Link>
    <button
      onClick={handleNavBarToggle}
      className={ toggleMenuBtnClasses }
      type="button"
      data-bs-target="#basic-navbar-nav"
      aria-controls="basic-navbar-nav"
      aria-label="Toggle navigation">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
      <Nav className="align-items-center flex-grow-1 justify-content-around">
        <NavLink onClick={ handleNavItemClick }
                 className={ ({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses }
                 to="/">HOME</NavLink>
        <NavLink onClick={ handleNavItemClick }
                 className={ ({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses }
                 to="/works">WORKS</NavLink>
        <Navbar.Brand>
          <Link className="desktop-logo" to="/">
            <img className="img" src={ logo } alt="Woosh logo"/>
          </Link>
        </Navbar.Brand>
        <NavLink onClick={ handleNavItemClick }
                 className={ ({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses }
                 to="/who">WHO</NavLink>
        <NavLink onClick={ handleNavItemClick }
                 className={ ({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses }
                 to="/contact">CONTACT</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;
};

export default MainNav;