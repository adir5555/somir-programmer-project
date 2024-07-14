import { useEffect, useRef } from "react";
import watApp from "../../../assets/image/WhatsApp Image 2024-07-13 at 00.15.54_23d745f6.jpg";
import pdff from "../../../assets/image/5.pdf";
// import hero from "./data/hero.json";
import Typed from "typed.js";
import './Developers.css'
const Developer = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Adir Das Shanto",
        "I'm full stack developer",
        "Androide Developer (React.js)",
        "Itll be an immense pleasure to...",
        "work with you. Lets get started ",

      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container max-w-screen-lg -mt-28 mx-auto 
      grid md:grid-cols-2
      home " id="home">
      <div className="left " data-aos="fade-up-right " data-aos-duration="1000">
          <h1 className="text-4xl " ref={typedRef}></h1>

          <a
            href={pdff}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right ml-48">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={watApp} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Developer;