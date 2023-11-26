import './BrandCircle.scss';
import {Link} from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {useState} from "react";

const BrandCircle = (props) => {
  const storage = getStorage();
  const [imgSrc, setImgSrc] = useState('');

  getDownloadURL(ref(storage, 'brands/' + props.url))
    .then((url) => {
      setImgSrc(url);
    })
    .catch((error) => {
      // Handle any errors
    });

  return <div className="p-4 brand-logo-container">
    <img className="brand-logo-image" src={imgSrc} alt={props.description} style={props.customStyle}/>
  </div>

};

export default BrandCircle;




