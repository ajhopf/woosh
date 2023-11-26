import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";
import {storageRef} from "../firebase";

import './Home.scss';

import BannerContainer from "../components/BannerContainer";
import BrandCircle from "../components/BrandCircle";

import homeStudio from '../assets/home-studio.jpg';

const HomeContent = (props) => {
  const brandsArray = Object.values(props.loaderData.english.home.brands);

  return <>
    <BannerContainer/>
    <h1 className="home-slogan">Criamos universos sonoros</h1>
    <article className="clients-container d-flex align-items-center">
      <div className="p-1 my-5 flex-grow-1">
        <hr className="w-100"/>
        <h2 className="clients-header text-center">CLIENTS</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {brandsArray.map((brand, index) => {
            return <BrandCircle url={brand.url} description={brand.description} key={index}/>
          })}
        </div>
      </div>
    </article>
    <div className="home-image-container">
      <img src={homeStudio} alt="Home studio"/>
    </div>
  </>;
}

const Home = () => {
  const data = useLoaderData()

  return <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
    <Await resolve={data.texts}>
      {(texts) => <HomeContent loaderData={texts}/>}
    </Await>
  </Suspense>
};

export default Home;

const loadTexts = async () => {
  const response = await fetch('https://woosh-85018-default-rtdb.firebaseio.com/.json');
  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({message: 'Could not fetch events'}),
    //   {status: 500}
    // );
    throw json(
      {message: 'Could not fetch events'},
      {status: 500}
    )
  } else {
    const responseData = await response.json();
    // console.log(responseData);
    return responseData;
  }
}

export const loader = () => {
  return defer({
    texts: loadTexts()
  })
}