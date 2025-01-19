import "../style.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";


const Hero = () => {
  const [text]= useTypewriter({
    words: ["Welcome to my portfolio", "I'm a full stack developer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 120,  
    delaySpeed:500,
    
  })
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl sm:text-8xl font-bold">
            <span className="hello">Hello, </span>Tulus.dev
          </h1>
          <h4 className="text-2xl font-semibold">{text}<span className="text-red-600 font-bold text-2xl"><Cursor /></span></h4>
          <p className="pb-14 pt-10 sm:pt-16 text-xl">
            <span className="text-xl sm:text-4xl font-bold text-customcolor">Hai, </span> I want to introduce my setup modern web
            applications using <span className="text-xl sm:text-2xl font-bold text-customcolor">Reactjs</span> for the frontend and <span className="sm:text-2xl text-xl font-bold text-customcolor">Nextjs</span>  for
            server-side rendering, static site generation, and seamless routing
          </p>
          <button className="btn btn-primary">Get Started </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
