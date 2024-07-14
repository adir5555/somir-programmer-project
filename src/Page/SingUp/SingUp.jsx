

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import imass from "../../assets/image/download.png";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AutProvider";
import Swal from "sweetalert2";
// import { useContext } from "react";


const SingUp = () => {

  const { register, handleSubmit,reset ,formState: { errors }, } = useForm();
  const { creatUser ,updateUserProfile} = useContext(Authcontext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    creatUser(data.email, data.password)
      .then(result => {
        const logUser = result.user;
        console.log(logUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('user profile info update');
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user created success full",
              showConfirmButton: false,
              timer: 1500
            });
             navigate('/')

          })
          .catch(error => console.log(error))

      })
  };

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse bg-slate-600
          rounded-lg  border-double border-4 border-indigo-600
        ">
          
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold">SingUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <img className="w-96" src={imass} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-400
          ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input text-gray-900 input-bordered " />
                {errors.name && <span className="text-fuchsia-700">This name is Name</span>}
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text ">photoURL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input text-gray-900 input-bordered border-2 border-rose-600" />
                {errors.photoURL && <span className="text-fuchsia-700">This photoURL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input text-gray-900 input-bordered" />
                {errors.email && <span className="text-fuchsia-700">This name is email</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input text-gray-900 input-bordered" />
                {errors.password?.type === "required" && (
                  <p className="text-fuchsia-600">Password is required</p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>


              <div className="form-control mt-6">
                <input className="btn btn-primary"
                  type="submit" value='sing up' />
              </div>
            </form>
            <p className='py-7 text-3xl text-center text-sky-600'><small>New Hear? <Link to='/login'>Create an account</Link></small></p>
          </div>

        </div>
      </div>
    </>
  );
};

export default SingUp;