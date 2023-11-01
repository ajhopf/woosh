import './BrandCircle.scss';
import {Link} from "react-router-dom";

const BrandCircle = (props) => {
  return <div className="col-sm-6 col-md-4 col-lg-3 text-center my-3 brand">
    <Link>
      <img src={props.src} alt={props.description} style={props.customStyle}/>
    </Link>
  </div>
};

export default BrandCircle;