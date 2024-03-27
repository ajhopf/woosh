import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense, useEffect, useState} from "react";

import './Home.scss';

import BannerContainer from "../components/home/BannerContainer";
import BrandCircle from "../components/home/BrandCircle";

import {getDownloadURL, getStorage, ref} from "firebase/storage";
import Transition from "../components/Transition";

const HomeContent = (props) => {
  const brandsArray = Object.values(props.loaderData.english.brands);
  const texts = props.loaderData.english.texts;
  const homeImage = props.loaderData.english.homeImage;

  const storage = getStorage();

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    getDownloadURL(ref(storage, homeImage.url))
      .then((url) => {
        setImgSrc(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }, [storage, homeImage.url]);

  return <>
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

  return <Transition >
    <Suspense>
      <Await resolve={data.homeVideo}>
        {(videoUrl) => <BannerContainer url={videoUrl}/>}
      </Await>
      <Await resolve={data.texts}>
        {(texts) => <HomeContent loaderData={texts}/>}
      </Await>
    </Suspense>
  </Transition>
};

export default Home;

const loadHomeTexts = async () => {
  try {
    const response = await fetch('https://woosh-85018-default-rtdb.firebaseio.com/home/.json');

    if (!response.ok) {
      throw json(
        {message: 'Could not fetch information from database'},
        {status: 500}
      )
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (e) {
    throw new Error();
  }
}

const loadHomeVideo = async () => {
  const storage = getStorage();
    try {
      return await getDownloadURL(ref(storage, 'home/wave-video.mp4'));
    } catch (e) {
      // console.log(e)
      return new Response();
    }
}

export const loader = async () => {
  return defer({
    texts: loadHomeTexts(),
    homeVideo: loadHomeVideo()
  })
}