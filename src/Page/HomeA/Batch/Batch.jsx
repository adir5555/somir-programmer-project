

const Batch = () => {
  return (
    <div>
      <h1 className="text-sky-500 text-4xl text-center font-medium">Batch 2 <span className="text-white">Schedule</span></h1>

      <div className=" grid md:grid-cols-3  lg:grid-cols-4  my-9 bg-indigo-600 max-w-screen-lg mx-auto text-center py-12">
        <div >
          <h2 className="text-cyan-500 text-3xl my-3">Enrollment <br /> Starts</h2>
          <h3 >15 Aug, 2024</h3>
        </div>
        <div className="">
          <h2 className="text-cyan-500 text-3xl my-3">Enrollment <br /> Ends</h2>
          <h3>15 Sep, 2024</h3>
        </div>
        <div className="">
          <h2 className="text-cyan-500 text-3xl my-3">Orientation <br /> Starts</h2>
          <h3>16 Sep, 2024</h3>
        </div>
        <div className="">
          <h2 className="text-cyan-500 text-3xl my-3">Class Starts</h2>
          <h3>17 Sep, 2024</h3>
        </div>
      </div>
      <div className="text-center">
        <p>Course Fees <span className="text-cyan-200"> ৫০০০ টাকা</span> <br />If You Are Interested To Enroll In  <span className="text-cyan-200"> 3rd Batch</span>  Then
          Register On The Website</p>
      </div>
    </div>
  );
};

export default Batch;