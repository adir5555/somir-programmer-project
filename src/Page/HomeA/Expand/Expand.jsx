import expand from '../../../assets/image/20137988-uhd_3840_2160_24fps.mp4';

import { TfiMenuAlt } from "react-icons/tfi";

const Expand = () => {
  return (
    <div className='my-14 max-w-screen-xl mx-auto'>
      <div className=" text-center">
        <h1 className='text-5xl'>Expand Your Career <span className="text-blue-600">Opportunity</span> <br />
          With Our Courses</h1>
      </div>


      {/* <div className=" w-96  "> */}
      <div className=" w-96 bg-gray-600 shadow-xl my-10 border border-indigo-600 ">
        <video className="banner-video  px-2 pt-2" autoPlay loop muted>
          <source src={expand} />
        </video>

        <div className="card-body">

          <p>joumey of frontend web Developement</p>

          <p>5000৳ ‍<sup><del>6000৳</del></sup></p>
          <div className="card-actions justify-end">
            <TfiMenuAlt></TfiMenuAlt>
            <h1 className="badge badge-outline ">160 lectures</h1>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Expand;