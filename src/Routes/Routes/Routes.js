import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main"
import Home from "../../Pages/Home/Home/Home"
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import FOfRoute from "../FOfRoute/FOfRoute";

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
    }
])
export default router;