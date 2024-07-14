import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Page/HomeA/Shaired/NavBar/NavBar";
import Footer from "../Page/HomeA/Shaired/Footer/Footer";




const Main = () => {
  const location = useLocation();
  console.log(location);
  const noheaderFooter = location.pathname.includes('login') || location.pathname.includes('singup');
  return (
    <div className="">
      {noheaderFooter|| <NavBar></NavBar>}
      <Outlet></Outlet>
     {noheaderFooter || <Footer></Footer>}
      
    </div>
  );
};

export default Main;