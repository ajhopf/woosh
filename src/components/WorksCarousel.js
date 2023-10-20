import './WorksCarousel.scss';

import olympikus from '../assets/works/olympikus.jpg';
import corona from '../assets/works/corona.jpg';
import underArmour from '../assets/works/under-armour.jpg';
import mizuno from '../assets/works/mizuno.jpg';

import rightArrow from '../assets/right-arrow.png';
import leftArrow from '../assets/left-arrow.png';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const images = [
  {src: olympikus, text: "Olympikus", id: 1},
  {src: corona, text: "Corona", id: 2},
  {src: underArmour, text: "Under Armour", id:3},
  {src: mizuno, text: "Mizuno", id: 4}
];

//video de transiçao
//https://www.youtube.com/watch?v=-pDPASqX97w&ab_channel=WebDevSimplified

const CarouselItem = (props) => {
  const navigate = useNavigate();

  const backgroundImage = {
    backgroundImage: `url(${ props.src })`
  };

  const handleCarouselItemClick = (id) => {
    navigate(`/work/${id}`);
  }


  return <button onClick={() => handleCarouselItemClick(props.id)} className="btn col-12 col-sm-6 col-lg-4 g-0 my-carousel-item" style={ backgroundImage }>
    <p className="my-carousel-text">{ props.text.toUpperCase() }</p>
  </button>;
};

const WorksCarousel = () => {
  const [index, setIndex] = useState(0);
  const [slideImages, setSlideImages] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update the screen width in state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add a resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  useEffect(() => {
    let numberOfImages;

    if (screenWidth < 576) {
      numberOfImages = 1;
    } else if (screenWidth < 992) {
      numberOfImages = 2;
    } else {
      numberOfImages = 3;
    }

    let selectedImages = [];
    let imageSelector = index;

    while (selectedImages.length < numberOfImages) {
      if (imageSelector < images.length) {
        selectedImages.push(images[imageSelector]);
        imageSelector++;
      } else {
        if (imageSelector === images.length) {
          imageSelector = 0;
        }
        selectedImages.push(images[imageSelector]);
        imageSelector++;
      }
    }

    setSlideImages(selectedImages);
  }, [index, screenWidth]);

  const showNextSlide = () => {
    setIndex(prevState => {
      if (prevState + 1 === images.length) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  const showPreviousSlide = () => {
    setIndex(prevState => {
      if (prevState - 1 <= 0) {
        return images.length - 1;
      } else {
        return prevState - 1;
      }
    });
  };

  return <div className="row my-carousel">
    <img onClick={ showPreviousSlide } className="previous-arrow" src={ leftArrow } alt="previous arrow"/>
    <img onClick={ showNextSlide } className="next-arrow" src={ rightArrow } alt="next-arrow"/>
    { slideImages.map((image) => <CarouselItem key={ image.id } id={image.id} text={ image.text } src={ image.src }/>) }
  </div>;

};

export default WorksCarousel;