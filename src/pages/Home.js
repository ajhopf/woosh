import './Home.scss';

import VideoContainer from "../components/VideoContainer";

import olympikus from '../assets/brands/olympikus.png';
import tiktok from '../assets/brands/tiktok.jpg';
import canalOff from '../assets/brands/canal-off.jpg';
import corona from '../assets/brands/corona.png';
import mizuno from '../assets/brands/mizuno.svg';

import BrandCircle from "../components/BrandCircle";

const Home = () => {
  return <>
    <VideoContainer/>
     <article className="d-flex align-items-center">
       <div className="p-1 m-5 flex-grow-1">
         <h2 className="clients-header">CLIENTS</h2>
         <hr className="w-100"/>
         <div className="row align-items-center justify-content-center">
           <BrandCircle src={olympikus} description="Olympikus brand"/>
           <BrandCircle src={tiktok} description="Tiktok brand"/>
           <BrandCircle src={corona} description="Corona  brand"/>
           <BrandCircle src={canalOff} description="Canal off  brand" customStyle={ {backgroundColor: "#000" }}/>
           <BrandCircle src={mizuno} description="Mizuno  brand"/>
         </div>
       </div>
    </article>
  </>;
};

export default Home;