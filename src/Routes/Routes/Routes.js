import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main"
import Home from "../../Pages/Home/Home/Home"
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import FOfRoute from "../FOfRoute/FOfRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../Pages/Admin/AllUsers";
import AdminRoute from '../AdminRoute';
import Offer from "../../Pages/Offer";
import B2bUsers from "../../Pages/Admin/B2bUsers";
import B2cSeller from "../../Pages/Admin/B2cSeller";
import B2cBuyer from "../../Pages/Admin/B2cBuyer";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'home',
                element:<Home></Home>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Offer></Offer>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/b2busers',
                element:<B2bUsers></B2bUsers>
            },
            {
                path:'/dashboard/b2cSeller',
                element:<B2cSeller></B2cSeller>
            },
            {
                path:'/dashboard/b2cBuyer',
                element:<B2cBuyer></B2cBuyer>
            },
        ]
    },
    {
        path:'/*',
        element:<FOfRoute></FOfRoute>
    }
   
])
export default router;