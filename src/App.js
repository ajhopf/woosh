import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import FontTester from "./pages/FontTester";

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
          element: <Home/>
        },
        {
          path: '/who',
          element: <Home/>
        },
        {
          path: '/contact',
          element: <Home/>
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
