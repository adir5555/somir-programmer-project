import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Authcontext } from "../../Provider/AutProvider";


const GoogleLogin = () => {

  const {googleSingin}= useContext(Authcontext);

  const handleGoogleLogin = () =>{
    googleSingin()
    .then(result =>{
      console.log(result.user);
    })
  }
  return (
    <div className="p-8">
      <div className="divider "></div>
      <button onClick={handleGoogleLogin} className="btn text-3xl ">
        <FaGoogle className=" mr-4 text-fuchsia-400 text-3xl"></FaGoogle>
        GOOGLE
      </button>
    </div>
  );
};

export default GoogleLogin;