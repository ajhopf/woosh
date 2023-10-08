import './Home.scss'

import VideoContainer from "../components/VideoContainer";
import image1 from '../assets/imagem-1.jpg'
import image2 from '../assets/image-2.PNG'

const Home = () => {
  return <>
    <VideoContainer/>
    <article className="text-center">
      <img src={image1}/>
      <p>A Woosh é mais do que uma produtora de áudio. Somos contadores de histórias por meio de sons, criando universos únicos que ecoam a identidade de nossos clientes</p>
      <img src={image2}/>
      <p>Não apenas produzimos áudio, traduzimos emoções. Nossa equipe mergulha nas ideias e conceitos dos clientes através de ampla pesquisa de referências musicais, culturais e de mercado e dedicamo-nos a criar sons que cativam e definem marcas de forma memorável.</p>
    </article>
  </>
};

export default Home;