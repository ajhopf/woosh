import olympikus from "../assets/works/olympikus.jpg";
import corona from "../assets/works/corona.jpg";
import underArmour from "../assets/works/under-armour.jpg";
import mizuno from "../assets/works/mizuno.jpg";
import {useNavigate} from "react-router-dom";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

import './WorksDisplay.scss';

const images = [
  {src: olympikus, text: "Olympikus", id: 1},
  {src: corona, text: "Corona", id: 2},
  {src: underArmour, text: "Under Armour", id:3},
  {src: mizuno, text: "Mizuno", id: 4}
];

const WorkItem = (props) => {
  const navigate = useNavigate();

  const backgroundImage = {
    backgroundImage: `url(${ props.src })`
  };

  const handleCarouselItemClick = (id) => {
    navigate(`/work/${id}`);
  }


  return <button onClick={() => handleCarouselItemClick(props.id)} className="btn works-display-item" style={ backgroundImage }>
    <p className="works-display-text">{ props.text.toUpperCase() }</p>
  </button>;
};


const WorksDisplay = () => {
  return  <div className="row works-display">
    {images.map(image => <WorkItem src={image.src} id={image.id} text={image.text}/>)}
  </div>;
};

export default WorksDisplay;