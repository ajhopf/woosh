import './Home.scss';

import VideoContainer from "../components/VideoContainer";
import TextWriter from "../components/TextWriter";
import {useEffect, useState} from "react";

const Home = () => {
  const text1 = 'Mais do que uma produtora de áudio, somos contadores de histórias por meio de sons, criando' +
    ' universos únicos que ecoam a identidade de nossos clientes.';

  const text2 = 'Não apenas produzimos áudio, traduzimos emoções. Nossa equipe mergulha nas ideias e conceitos dos clientes através de ampla pesquisa de referências musicais, culturais e de mercado e dedicamo-nos a criar sons que cativam e definem marcas de forma memorável.';

  const [renderSecondText, setRenderSecondText] = useState(false);

  setTimeout(() => {
    setRenderSecondText(true);
  }, 7000);

  return <>
    <VideoContainer/>
     <article className="text-center d-flex align-items-center">
       <div className="w-50 p-1 m-1">
         <TextWriter text={ text1 } delay={ 50 } infinite={ false }/>

       </div>
       <div className="w-50 p-1 m-1">
         { renderSecondText && <TextWriter text={ text2 } delay={ 50 } infinite={ false }/> }
       </div>
    </article>
  </>;
};

export default Home;