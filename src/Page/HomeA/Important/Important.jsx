import './imporent.css'

const Important = () => {
  return (
    <div className="max-w-screen-xl  mx-auto my-10 grid lg:grid-cols-2  ">
     <div className="grid grid-cols-2 my-8">
      {/*  */}
     <div className="">
        <h1 className="text-xl">Important Links</h1>
        <p className="text-gray-400 bsx">About</p>
        <p className="text-gray-400 bsx">Privacy Policy</p>
        <p className="text-gray-400 bsx">Terms & Conditions</p>
        <p className="text-gray-400 bsx">Refund Policy</p>
        <p className="text-gray-400 bsx">FAQ</p>
      </div>
      <div className="">
        <h1 className="text-xl">Quick Links</h1>
        <p className="text-gray-400 bsx">Courses</p>
        <p className="text-gray-400 bsx">Success Story</p>
        <p className="text-gray-400 bsx">My Account</p>
      </div>
     </div>
     <div className="grid grid-cols-2 my-8">
      {/*  */}
     <div className="">
        <h1 className="text-xl">Social Links</h1>
        <p className="text-gray-400 bsx">Youtube</p>
        <p className="text-gray-400 bsx">Linkedin</p>
        <p className="text-gray-400 bsx">Github</p>
      </div>
      <div className="">
        <h1 className="text-xl">Contact Info</h1>
        <p className="text-gray-400 bsx">Call Us: +880 1816986263</p>
        <p className="text-gray-400 bsx">Address: Narayonpur,<br /> Gormati, Baraigram, Natore</p>
        <p className="text-gray-400 bsx">Mail Us: support@hablu- <br /> programmer.com</p>
        
      </div>
     </div>
      
    </div>
  );
};

export default Important;