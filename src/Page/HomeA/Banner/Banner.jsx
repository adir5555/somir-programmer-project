import { Link } from "react-router-dom";
import Video from "../Shaired/Video/Video";


const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 mt-24 gap-4 max-w-screen-2xl mx-auto p-20">

      <div className=" ">
        <h1 className="text-cyan-600 text-5xl font-bold mb-6"><span className="text-white">Journey Of </span>Frontend Web <span className="text-fuchsia-600"> Development</span></h1>
        <p className="text-zinc-400 mb-6">We Strongly Believe In Personalized
          Learning & Empower Individuals To <br />Kick-Start
          Their Careers. There Is No Chance Of Falling Behind, With A<br /> Module-Wise Structured & Project Based Study Plan Packed With <br />Quizzes, Assignments, Practice Homework For Interview Preparation & <br />Special
          Guidance For Freelancing In Just One Course.</p>
        <div className="">
          <Link to='/courses'><button className="btn btn-primary">Course Detalis</button></Link>
        </div>
      </div>
      <Video></Video>
          
    </div>
  );
};

export default Banner;