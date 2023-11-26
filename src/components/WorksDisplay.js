import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

import './WorksDisplay.scss';


const WorkItem = (props) => {
  const navigate = useNavigate();

  const storage = getStorage();

  const [imgSrc, setImgSrc] = useState('');

  getDownloadURL(ref(storage, 'works/' + props.url))
    .then((url) => {
      setImgSrc(url);
    })
    .catch((error) => {
      // Handle any errors
    });

  const backgroundImage = {
    backgroundImage: `url(${ imgSrc })`
  };

  const handleCarouselItemClick = (id) => {
    navigate(`/work/${id}`);
  }


  return <button onClick={() => handleCarouselItemClick(props.id)} className="btn works-display-item" style={ backgroundImage }>
    <p className="works-display-text">{ props.description.toUpperCase() }</p>
  </button>;
};


const WorksDisplay = (props) => {
  const worksArray = Object.values(props.loaderData);

  return  <div className="row works-display">
    {worksArray.map((image, index) => <WorkItem key={index} url={image.url} id={image.id} description={image.description}/>)}
  </div>;
};

export default WorksDisplay;