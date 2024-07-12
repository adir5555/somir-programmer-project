import nabimage from '../../../../assets/image/logoOne.webp';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = <>
    <li> <Link to='/'>Home</Link></li>
    <li> <Link to='/'>Our Menu</Link></li>
    <li> <Link to='/'>
    <FaRegUserCircle className='text-white text-3xl'></FaRegUserCircle>
    </Link></li>
  </>
  return (
    <div className="navbar   bg-blue-950  justify-between">
    <div className="navbar">
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
          className="menu bg-base-100   menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navOption}
        </ul>
      </div>
      <img  src={nabimage} alt="" />
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal  text-white  px-1">
      {navOption}
      </ul>
    </div>
  </div>
  );
};

export default NavBar;