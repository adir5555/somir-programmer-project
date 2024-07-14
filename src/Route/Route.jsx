import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import HomeB from "../Page/HomeA/HomeB/HomeB";
import CoursesB from "../Page/CoursesA/CoursesB/CoursesB";
import Login from "../Page/Login/Login";
import SingUp from "../Page/SingUp/SingUp";
import Serect from "../Page/HomeA/Shaired/Serect/Serect";
import PrivetRoute from "./PrivetRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
      path: '/',
      element: <HomeB></HomeB>
     },
     {
      path: 'courses',
      element: <CoursesB></CoursesB>
     },
     {
      path: 'login',
      element: <Login></Login>
     },
     {
      path: 'signup',
      element: <SingUp></SingUp>
     },
     {
      path: 'serect',
      element: <PrivetRoute><Serect></Serect></PrivetRoute>
     }

    ]
  },
]);