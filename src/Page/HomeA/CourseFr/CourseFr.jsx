
import Disenio from '../../../assets/image/imgDisenioWebMedida.ceefbcdb.svg';


import { SlArrowDownCircle } from "react-icons/sl";
import { FaRegCircleCheck } from "react-icons/fa6";
const CourseFr = () => {
  return (
    <div className="my-14">
      <div className="text-3xl text-center text-blue-600 font-bold"><span className="text-white ">Effective </span>
        Personalized Learning
      </div>


      <div className=" mt-8 items-center  grid md:grid-cols-2 gap-40 p-20 mr-20">
        {/* <div className="grid grid-cols-2 mt-8 "> */}


        <div className="timeline timeline-snap-icon  timeline-vertical ">
       
          <li>

            <div className="timeline-middle">
              <SlArrowDownCircle className="text-4xl text-blue-500"></SlArrowDownCircle>
            </div>
            <div className="timeline-end mb-10">

              <h1 className='text-xl  font-bold '>Interactive Live & Recording Classes</h1>
              <p className='text-gray-400'>Learn Something New Everyday By Watching Recorded Conceptual  Classes And Join Live Classes For Clearing Your Doubts.</p>


            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div className="timeline-middle">
              <SlArrowDownCircle className="text-4xl text-blue-500"></SlArrowDownCircle>
            </div>
            <div className="timeline-end mb-6">
              <h1 className='text-xl   font-bold '>Module Based Study Plan</h1>
              <p className='text-gray-400'>There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.</p>

            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <SlArrowDownCircle className="text-4xl text-blue-500"></SlArrowDownCircle>
            </div>
            <div className="timeline-end mb-6">
              <h1 className='text-xl  font-bold '>Conceptual Crash Course</h1>
              <p className='text-gray-400'>You Are Not Just Enrolling In One Course. Its A Mission To Learn Lifelong Programming Journey With Hablu Programmer.</p>


            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <SlArrowDownCircle className="text-4xl text-blue-500"></SlArrowDownCircle>
            </div>
            <div className="timeline-end mb-6">
              <h1 className='text-xl font-bold '>Freelancing & Job Placement Guide</h1>
              <p className='text-gray-400'>Only Serious Course Completers Will Get A Freelancing Guide And Job Placement Support From Zero To Until Success Your Career.</p>


            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <SlArrowDownCircle className="text-4xl text-blue-500"></SlArrowDownCircle>
            </div>
            <div className="timeline-end mb-6">

              <h1 className='text-xlfont-bold '>Learning Process Track Record</h1>
              <p className='text-gray-400'>Track Your Progress In Real Time To See Your Position On The Leader Board And Get Ahead Of Everyone Else In The Competition.</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaRegCircleCheck className="text-4xl text-blue-500"></FaRegCircleCheck>
            </div>
            <div className="timeline-end">

              <h1 className='text-xl font-bold '>Unlimited Support</h1>


            </div>

          </li>
        </div>
        {/*  */}

        <div className="">
          <img src={Disenio} alt="" />
        </div>
      </div>

    </div>
  );
};

export default CourseFr;