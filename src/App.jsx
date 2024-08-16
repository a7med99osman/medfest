import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { MFE } from "./pages/MFE Festival/MFE";
import { Press } from "./pages/Press/Press";
import { PreviousEvents } from "./pages/Previous Events/PreviousEvents";
import { Programs } from "./pages/Programs/Programs";


import Layout from './components/layout/Layout';

const App = () => {

  const Routing = createBrowserRouter([
    {
      path : "/" ,
      element : <Layout /> ,
      children : [
        { index : true , element : <Home /> },
        {path : "/aboutUs" , element : <AboutUs />},
        {path : "/contact" , element : <ContactUs />},
        {path : "/MFEfestival" , element : <MFE />},
        {path : "/press" , element : <Press />},
        {path : "/previousEvents" , element : <PreviousEvents />},
        {path : "/360program" , element : <Programs />}
      ]
    }
  ])
  return (
    <RouterProvider router={Routing} />
  )
}

export default App
