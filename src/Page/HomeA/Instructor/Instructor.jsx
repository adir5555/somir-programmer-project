import photos from '../../../assets/image/logoOne.webp';
import SwiperA from '../Shaired/SwiperA/SwiperA';
import './Instructo.css'
const Instructor = () => {
  return (
    <div className='my-20'>
      <div className="text-center mb-20">
        <h1 className="text-5xl">Lead <span className="text-blue-600">Instructor</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  mt-8 max-w-screen-lg mx-auto">
        {/*  */}
        
        <div className=" ">
          <SwiperA ></SwiperA>

        </div>
        <div className="lines ml-64"> <hr /></div>
        {/*  */}
        <div className="  ">
        
          <p className='text-gray-400 mt-8'>Eshan Ahamed Ahad & Harun-Ur-Roshid (Tutul) Both Are Full Stack  Web Developer. They Has Been Involved In Web Development And  Software Profession For 5+ Years.</p>
          {/*  */}
          <p className='text-gray-400 my-5'>At The Time Of Class 9, Out Of Love For Programming And Passion For Teaching People, Eshan Founded Hablu Programmer Platform In February 2021 Which Has Around 600+ Programming Related Video Tutorials.</p>
          {/*  */}
          <p className='text-gray-400 my-5'>More Than 250,000 People Are Learning Free Programming From Hablu Programmer YouTube Channel And Public Facebook Gro</p>

          {/*  */}
          <h2 className='my-5'>Eshan Ahmed Ahad</h2>
          <h2 className='my-5'>Founder & CEO - Hablu Programmer</h2>
          <img src={photos} alt="" />
          <p className='text-gray-400 my-5'>Trade License: TRAD/6NOGUPN/000340/2023</p>
        </div>


      </div>


    </div>
  );
};

export default Instructor;