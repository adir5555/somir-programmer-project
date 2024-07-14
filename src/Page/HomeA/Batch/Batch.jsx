
import './batch.css';
const Batch = () => {
  return (
    <div >
      <h1 className="text-sky-500 text-4xl text-center font-medium">Batch 2 <span className="text-white">Schedule</span></h1>

      <div className="swep">
        <div className="boxsw grid md:grid-cols-3  lg:grid-cols-4  my-9 bg-indigo-900  text-center py-16 
        border border-indigo-500 rounded-md 
         max-w-screen-xl mx-auto">

          {/*  */}

          <div className=" ">
            <h2 className="text-cyan-300 text-3xl my-3">Enrollment Starts</h2>
            <h3 >15 Aug, 2024</h3>
          </div>
          <div className="">
            <h2 className="text-cyan-300 text-3xl my-3">Enrollment Ends</h2>
            <h3>15 Sep, 2024</h3>
          </div>
          <div className="">
            <h2 className="text-cyan-300 text-3xl my-3">Orientation Starts</h2>
            <h3>16 Sep, 2024</h3>
          </div>
          <div className="">
            <h2 className="text-cyan-300 text-3xl my-3">Class Starts</h2>
            <h3>17 Sep, 2024</h3>
          </div>
        </div>
        {/* <div className=""> */}
          <div className="text-center rightt -mt-16 ">
            <button className="btn btss  btn-info">Enrol Now</button>
          </div>
        {/* </div> */}

      </div>


      {/*  */}
      <div className="text-center">
        <p>Course Fees <span className="text-cyan-200"> ৫০০০ টাকা</span> <br />If You Are Interested To Enroll In  <span className="text-cyan-200"> 3rd Batch</span>  Then
          Register On The Website</p>
      </div>
    </div>
  );
};

export default Batch;