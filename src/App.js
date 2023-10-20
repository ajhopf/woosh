import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import FontTester from "./pages/FontTester";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Who from "./pages/Who";
import Work, {loader as worksLoader} from "./pages/Work";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/works',
          element: <Works/>
        },
        {
          path:'/work/:id',
          element: <Work />,
          loader: worksLoader
        },
        {
          path: '/who',
          element: <Who/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: 'font-test',
          element: <FontTester/>
        }
      ]
    }
  ])


  return <RouterProvider router={router}/>
}

export default App;
