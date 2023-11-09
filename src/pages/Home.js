import './Home.scss';

import BannerContainer from "../components/BannerContainer";
import BrandCircle from "../components/BrandCircle";

import olympikus from '../assets/brands/bd_1.png';
import mizuno from '../assets/brands/bd_2.png';
import canalOff from '../assets/brands/bd_3.png';
import underArmour from '../assets/brands/bd_4.png'
import corona from '../assets/brands/bd_5.png';
import tiktok from '../assets/brands/bd_6.png';

import homeStudio from '../assets/home-studio.jpg';

const brands = [
  {src: olympikus, description: "Olympikus logo"},
  {src: mizuno, description: "Mizuno logo"},
  {src: canalOff, description: "Canal Off logo"},
  {src: underArmour, description: "Under Armour logo"},
  {src: corona, description: "Corona logo"},
  {src: tiktok, description: "Tik Tok logo"}
];

const Home = () => {
  return <>
    <BannerContainer/>
    <h1 className="home-slogan">Criamos universos sonoros</h1>
    <article className="clients-container d-flex align-items-center">
      <div className="p-1 my-5 flex-grow-1">
        <hr className="w-100"/>
        <h2 className="clients-header text-center">CLIENTS</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {brands.map((brand, index) => {
            return <BrandCircle src={brand.src} description={brand.description} key={index}/>
          })}
        </div>
      </div>
    </article>
    <div className="home-image-container">
      <img src={homeStudio} alt="Home studio"/>
    </div>
  </>;
};

export default Home;