import { useEffect } from "react"
import About from "../components/about"
import Hero from "../components/Hero"
import Themechanger from "../components/Themechanger"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Slogan from "../components/Slogan"

const Home = () => {
  
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: true
      });
  })
  
  return (
    <div className="min-h-screen">     
     <div className="container mx-auto min-h-96">
      <Themechanger/>
      <Hero/>      
      <About/> 
      <Slogan/>     
     
      
    </div>
    

    </div>
  )
}

export default Home
