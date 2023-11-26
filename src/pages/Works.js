import './Works.scss'

import WorksDisplay from "../components/WorksDisplay";
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

const Works = () => {
  const data = useLoaderData()

  return <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
    <Await resolve={data.texts}>
      {(texts) => <WorksDisplay loaderData={texts}/>}
    </Await>
  </Suspense>

};

export default Works;

const loadWorksContent = async () => {
  const response = await fetch('https://woosh-85018-default-rtdb.firebaseio.com/works/.json');
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
    return responseData;
  }
}

export const loader = () => {
  return defer({
    texts: loadWorksContent()
  })
}