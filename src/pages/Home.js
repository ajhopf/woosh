import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense, useState} from "react";
import {storageRef} from "../firebase";

import './Home.scss';

import BannerContainer from "../components/BannerContainer";
import BrandCircle from "../components/BrandCircle";

import {getDownloadURL, getStorage, ref} from "firebase/storage";

const HomeContent = (props) => {
  const brandsArray = Object.values(props.loaderData.english.brands);
  const texts = props.loaderData.english.texts;
  const homeImage = props.loaderData.english.homeImage;

  const storage = getStorage();

  const [imgSrc, setImgSrc] = useState('');

  getDownloadURL(ref(storage, homeImage.url))
    .then((url) => {
      setImgSrc(url);
    })
    .catch((error) => {
      // Handle any errors
    });

  return <>
    <BannerContainer/>
    <h1 className="home-slogan">{texts.slogan}</h1>
    <article className="clients-container d-flex align-items-center">
      <div className="p-1 my-5 flex-grow-1">
        <hr className="w-100"/>
        <h2 className="clients-header text-center">{texts.clients.toUpperCase()}</h2>
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {brandsArray.map((brand, index) => {
            return <BrandCircle url={brand.url} description={brand.description} key={index} storage={storage}/>
          })}
        </div>
      </div>
    </article>
    <div className="home-image-container">
      <img src={imgSrc} alt={ homeImage.description }/>
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

const loadHomeContent = async () => {
  const response = await fetch('https://woosh-85018-default-rtdb.firebaseio.com/home/.json');
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
    texts: loadHomeContent()
  })
}