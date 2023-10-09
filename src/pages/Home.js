import './Home.scss';

import VideoContainer from "../components/VideoContainer";
import TextWriter from "../components/TextWriter";
import {useEffect, useState} from "react";

import olympikus from '../assets/brands/olympikus.png';
import tiktok from '../assets/brands/tiktok.jpg';
import canalOff from '../assets/brands/canal-off.jpg';
import corona from '../assets/brands/corona.png';
import mizuno from '../assets/brands/mizuno.svg';

import BrandCircle from "../components/BrandCircle";

const Home = () => {
  const text1 = 'Mais do que uma produtora de áudio, somos contadores de histórias por meio de sons, criando' +
    ' universos únicos que ecoam a identidade de nossos clientes.';

  const text2 = 'Não apenas produzimos áudio, traduzimos emoções. Nossa equipe mergulha nas ideias e conceitos dos clientes através de ampla pesquisa de referências musicais, culturais e de mercado e dedicamo-nos a criar sons que cativam e definem marcas de forma memorável.';

  const [text, setText] = useState(text1);

  setInterval(() => {
    if (text === text1) {
      setText(text2)
    } else {
      setText(text1)
    }
  }, 11000);

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
         {/*<TextWriter text={ text } delay={ 50 } infinite={ false }/>*/}
       </div>
    </article>
  </>;
};

export default Home;