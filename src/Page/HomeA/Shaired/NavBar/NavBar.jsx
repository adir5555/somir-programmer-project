import { useContext } from 'react';
import nabimage from '../../../../assets/image/logoOne.webp';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Authcontext } from '../../../../Provider/AutProvider';

const NavBar = () => {

  const { user, logOut } = useContext(Authcontext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }


  const navOption = <>

    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/courses'>Courses</Link></li>
    <li> <Link to='/serect'>Serect</Link></li>
    {/*  */}
    <li>
      <details>
        <summary>Login <span className='text-rose-300 font-bold'>/</span> Signup</summary>
        <ul className="bg-sky-800
        border-4 border-indigo-200
         rounded-t-none  p-8">
          {
            user ? <>
              <FaRegUserCircle onClick={handleLogout} className='text-orange-500  text-3xl'></FaRegUserCircle>
            </> : <>
              <li> <Link to='/login'>LogIn</Link></li>

            </>
          }
          <li> <Link to='/signup'>SignUp</Link></li>
        </ul>
      </details>
    </li>
    {/*  */}



  </>
  return (
    <div className="navbar -mt-24 border-b border-indigo-500  fixed bg-blue-900  ">

      <div className="navbar  ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  bg-sky-600 menu-sm dropdown-content rounded-lg z-[1] mt-3 w-52 p-2 shadow">
            {navOption}
          </ul>
        </div>
        <img className='ml-14' src={nabimage} alt="" />
      </div>
      <div className="navbar-center mr-16 hidden lg:flex">
        <ul className="menu menu-horizontal  text-white  px-1">
          {navOption}
        </ul>
      </div>

    </div>
  );
};

export default NavBar;