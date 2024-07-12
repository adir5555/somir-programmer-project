import {
  createBrowserRouter,
  
} from "react-router-dom";
import Main from "../Layout/Main";
import HomeB from "../Page/HomeA/HomeB/HomeB";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
     {
      path: '/',
      element: <HomeB></HomeB>
     }
    ]
  },
]);