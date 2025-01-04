import React from "react";
import Galaxy from "./assets/Galaxy.mp4";
import Surface_m from './assets/Surface_m.png';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Banner from "./Components/Banner";
import Banner2 from "./Components/Banner2";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css"; 
export default function App() {
   React.useEffect(() => { 
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
     });
  }); 
  return (
    <>
      <NavBar></NavBar>
      <div className="h-[700px] relative">
        <video autoPlay loop muted className="fixed right-0 top-0 h-[700px] w-full object-cover z-[-2]">
          <source src={Galaxy} type="video/mp4"/>
        </video>
        <img src={Surface_m} alt="Surface_m" className='fixed right-0 bottom-0 w-full max-h-[300px] brightness-50 object-cover'/>
              <div className='absolute bottom-0 w-full z-30 h-[20px] sm:h-[50px] md:h-[60px]'></div>
        <Home></Home>
      </div>
      <Service></Service>
      <Banner></Banner>
      <Banner2></Banner2>
      <Footer></Footer>
    </>
  )
}