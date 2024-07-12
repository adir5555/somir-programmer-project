import { Outlet } from "react-router-dom";
import NavBar from "../Page/HomeA/Shaired/NavBar/NavBar";
import Footer from "../Page/HomeA/Shaired/Footer/Footer";


const Main = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Main;