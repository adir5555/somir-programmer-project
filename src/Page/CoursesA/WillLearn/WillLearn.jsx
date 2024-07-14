import Useskills from "../../../Hooks/Useskills";


const WillLearn = () => {
  const [skills, ] = Useskills();
  return (
    <div className=" max-w-screen-xl mx-auto grid md:grid-cols-2 gap-5 my-14">
      <div >
        <h1 className="text-4xl">What You Will Learn In <span className="text-blue-500">This <br />
        Course!</span></h1>

       <p className="text-gray-300 mt-6">You Will Learn Everything Needed To Become A Junior Frontend Web Developer. Begin From HTML, CSS, Vs Code, Git & GitHub, Bootstrap, Sass, Javascript, ES6, Chrome Dev Tools, JSON, DOM, BOM, Web API.</p>
       <p className="text-gray-300 mt-6">Not Only That, You Will Also Learn The Most Famous JavaScript Library & Framework React JS & Next JS.</p>
       <p className="text-gray-300 mt-6">
       Also You Will Learn Most Popupler Programming Language TypeScript & Some Animation Library. After Finishing This Course You Will Get Special Guideline Session For Job Interview Preparation & Freelancing Guide.
       </p>
       <button className="btn btn-primary">Primary</button>
       </div>
       {/*  */}

       <div className="grid md:grid-cols-2 gap-5">
        {
           skills.slice(0, 6).map( skil => <div key={skil._id} className=" bg-gray-600   rounded-lg ">
            <figure className="px-10 pt-10">
              <img
                src={skil.imageSrc}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{skil.title}</h2>
              <p>{skil.description}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>)
        }
       </div>
    </div>
  );
};

export default WillLearn;