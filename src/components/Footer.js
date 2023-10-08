import './Footer.scss'

import instagram from '../assets/instagram.svg'
import {Link} from "react-router-dom";


const Footer = () => {
  return <footer className="d-flex align-items-center justify-content-center">
    <Link to="https://www.instagram.com/bgelpi/" target={"_blank"}>
      <img src={instagram}/>
    </Link>

  </footer>
};

export default Footer;