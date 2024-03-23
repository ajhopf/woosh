import Header from "../components/header/Header";
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred'
  let message = 'Something went wrong'

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = 'Not found!'
    message = 'Could not find resource or page'
  }


  return <>
    <Header/>
    <h1 style={{paddingTop: "70px"}}>{title}</h1>
    <p style={{paddingTop: "70px"}}>{message}</p>
  </>
};

export default ErrorPage;