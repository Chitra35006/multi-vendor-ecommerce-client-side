import { createBrowserRouter } from "react-router-dom"
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main/Main"
import B2BBuyer from "../../Pages/Admin/B2BBuyer";
import Home from "../../Pages/Home/Home/Home"
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import FOfRoute from "../FOfRoute/FOfRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path:'/*',
                element:<FOfRoute></FOfRoute>
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
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<B2BBuyer></B2BBuyer>

            }
        ]
    },

])
export default router;