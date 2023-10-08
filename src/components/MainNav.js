import {Link, NavLink} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import {useState} from "react";

import logo from '../assets/woosh-icon.png';
import './MainNav.scss';

const MainNav = (props) => {
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

  const navBackgroundClasses = open ? "main-nav open" : "main-nav";
  const toggleMenuBtnClasses = open ? "menu-toggle open" : "menu-toggle";
  const navLinkClasses = "nav-link woosh-nav-link fs-2 ";

  return <Navbar expand="sm" expanded={ open } className={ navBackgroundClasses }>
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

//old nav


// <Navbar expand="lg" className="main-nav">
//   <Navbar.Brand>
//     <Link className="link" to="/">
//       <img className="img" src={ logo } alt="Woosh logo"/>
//     </Link>
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Container className="d-flex justify-content-center justify-content-md-end">
//       <Nav  className="flex-grow-1 flex-md-grow-0">
//         <NavLink className={({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses} to="/">HOME</NavLink>
//         <NavLink className={({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses} to="/">WORKS</NavLink>
//         <NavLink className={({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses} to="/">WHO</NavLink>
//         <NavLink className={({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses} to="/">CONTACT</NavLink>
//         <NavLink className={({isActive}) => isActive ? navLinkClasses + "actual" : navLinkClasses} to="/font-test">FONT TEST</NavLink>
//       </Nav>
//     </Container>
//   </Navbar.Collapse>
// </Navbar>