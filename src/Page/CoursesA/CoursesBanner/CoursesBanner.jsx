import Video from "../../HomeA/Shaired/Video/Video";


const CoursesBanner = () => {
  return (
    // <div >
    <div className="grid md:grid-cols-2 mt-24 gap-4 max-w-screen-2xl mx-auto p-20">
    {/* <div className="grid md:grid-cols-2 mt-24 gap-4 max-w-screen-2xl mx-auto p-20"> */}

      <div className=" ">
        <h1 className="text-cyan-600 text-5xl max-w-md font-bold mb-6"><span className="text-white">Journey Of </span>Frontend Web <span className="text-fuchsia-600"> Development</span></h1>
        <p className="text-zinc-400 mb-6 max-w-sm">We Strongly Believe In Personalized
          Learning & Empower Individuals To Kick-Start
          Their Careers. There Is No Chance Of 
          Falling Behind, With A Module-Wise 
          Structured & Project Based Study Plan
           Packed With Quizzes, Assignments, 
           Practice Homework For Interview 
           Preparation & Special
          Guidance For Freelancing In Just
           One Course.</p>


        {/*  */}
        <div className=" grid md:grid-cols-3 gap-6">

          <button className="btn  w-48  btn-primary">Enroll Now <span className="text-red-700">|</span> 5000৳ </button>
          
          <div className="">
            <h1 className="text-3xl -mt-3"><del>6000৳ </del> </h1>
          </div>
          {/*  */}
          <div className=" ">
            <h2>17%off</h2>
            <h2 className="text-amber-500">400 Seats Left</h2>

          </div>

        </div>
      </div>
      <Video></Video>

    </div>
  );
};

export default CoursesBanner;