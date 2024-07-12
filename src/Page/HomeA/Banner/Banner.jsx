import Video from "../Shaired/Video/Video";


const Banner = () => {
  return (
    <div className="grid md:grid-cols-2  gap-4 my-3 max-w-screen-lg mx-auto">

      <div className="">
        <h1 className="text-cyan-600 text-5xl font-bold"><span className="text-white">Journey Of </span>Frontend Web <span className="text-fuchsia-600"> Development</span></h1>
        <p className="text-zinc-400">We Strongly Believe In Personalized
          Learning & Empower Individuals To Kick-Start
          Their Careers. There Is No Chance Of Falling Behind, With A Module-Wise Structured & Project Based Study Plan Packed With Quizzes, Assignments, Practice Homework For Interview Preparation & Special
          Guidance For Freelancing In Just One Course.</p>
        <div className="">
          <button className="btn btn-primary">Primary</button>
        </div>
      </div>
      <Video></Video>

    </div>
  );
};

export default Banner;