import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import { Authcontext } from "../../Provider/AutProvider";

import logph from '../../assets/image/download (1).jpeg';
import { Link } from "react-router-dom";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";



const Login = () => {

  const { singIn } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(true);

  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state);


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    singIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User log in success full",
          showClass: {
            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
          },
          hideClass: {
            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
          }
        });
        navigate(from, { replace: true });
      })

  }
  const handleCaptcha = (e) => {
    const userValueCaptcha = e.target.value;
    if (validateCaptcha(userValueCaptcha)) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }


  }
  return (
    <>

      <div className="hero min-h-screen ">
        <div className="hero-content  flex-col lg:flex-row-reverse p-20 bg-slate-600
        border-dashed border-2 border-indigo-600 rounded-lg
         ">
          <div className="text-center  md:w-1/2 lg:text-left">
            {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
            <img className="w-96" src={logph} alt="" />

          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-slate-400">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered text-slate-800" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered text-slate-800" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="  type the captcha above" className="input text-slate-800 input-bordered border-2 border-rose-600" />
                {/* <button  className="btn btn-outline mt-2 btn-xs">validat</button> */}
              </div>
              <div className="form-control mt-6">
                {/* Todo caphs */}
                <input disabled={false} className="btn btn-primary"
                  type="submit" value='login' />
              </div>
            </form>

            <p className='py-7 text-3xl text-center text-sky-600'><small>New Hear? <Link to='/signup'>Create an account</Link></small></p>
            <GoogleLogin></GoogleLogin>

          </div>
        </div>

      </div>
    </>
  );
};

export default Login;