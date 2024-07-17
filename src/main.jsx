import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Route.jsx';
import AutProvider from './Provider/AutProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AutProvider>
    <div className="  bg-blue-950 text-white">
      <RouterProvider router={router} />
    </div>
    </AutProvider>
  </React.StrictMode>,
)
