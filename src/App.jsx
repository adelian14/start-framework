import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Layout from "./components/Layout";

function App() {
  RouterProvider
  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
        { path: '/*', element: <Notfound /> }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
