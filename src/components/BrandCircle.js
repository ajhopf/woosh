import './BrandCircle.scss';
import {Link} from "react-router-dom";

const BrandCircle = (props) => {
  return <Link className="p-4 brand-logo-link">
    <img className="brand-logo-image" src={props.src} alt={props.description} style={props.customStyle}/>
  </Link>

};

export default BrandCircle;