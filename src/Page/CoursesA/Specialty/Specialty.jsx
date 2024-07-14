import { key } from "localforage";
// import Useskills from "../../../Hooks/Useskills";
import Useexperience from "../../../Hooks/Useexperience";


const Specialty = () => {
  const [experience] = Useexperience();
  // const [skills, ] = Useskills();
  return (
    <div className="my-12 max-w-screen-xl mx-auto">
      <div className=" text-center">
        <h1 className="text-5xl">What Is The Specialty Of <span className="text-blue-500">This <br /> Course?</span></h1>
        <p className="text-gray-400 text-xl mt-4">LetsTake A Look</p>
      </div>
      {/*  */}
      <div className="mt-6 grid md:grid-cols-3 lg:grid-cols-4  gap-4">
        {
           experience.slice(0,8).map( expr =>  <div key={key._id} className="    bg-slate-600 rounded-md ">
            <figure className="px-10 pt-10">
              <img
                src={expr.imageSrc}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{expr.organisation}</h2>
              <p>{expr.experiences}</p>
              
            </div>
          </div>)
         
        }

      </div>

    </div>
  );
};

export default Specialty;