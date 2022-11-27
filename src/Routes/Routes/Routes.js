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
import AddProducts from "../../Pages/B2B/AddProducts";
import BSaddProducts from "../../Pages/B2C/Seller/BSaddProducts";
import MyOrders from "../../Pages/B2B/MyOrders"
import B2cSellerRoute from "../B2cSellerRoute"
import B2bRoute from "../B2bRoute"
import CustomerOrder from "../../Pages/B2B/CustomerOrder";
import MyShop from "../../Pages/B2B/MyShop"
import MyProfile from "../../Pages/B2B/MyProfile"
import BuyerOrders from "../../Pages/B2C/Seller/BuyerOrders"
import BSmyShop from "../../Pages/B2C/Seller/BSmyShop"
import SellerProfile from "../../Pages/B2C/Seller/SellerProfile"
import BMyProfile from "../../Pages/B2C/Buyer/BMyOffers"
import BMyOffers from "../../Pages/B2C/Buyer/BMyOffers"
import LikedShop from "../../Pages/B2C/Buyer/LikedShop"
import BMyOrder from "../../Pages/B2C/Buyer/BMyOrder"
import B2cBuyerRoute from "../B2cBuyerRoute"
import BAllProducrs from "../../Pages/B2B/BAllProducrs";
import AllProducts from "../../Pages/B2C/Buyer/AllProducts";
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
                element:<AdminRoute><B2bUsers></B2bUsers></AdminRoute>
            },
            {
                path:'/dashboard/b2cSeller',
                element:<AdminRoute><B2cSeller></B2cSeller></AdminRoute>
            },
            {
                path:'/dashboard/b2cBuyer',
                element:<AdminRoute><B2cBuyer></B2cBuyer></AdminRoute>
            },
            {
                path:'/dashboard/b2bAddproduct',
                element:<B2bRoute><AddProducts></AddProducts></B2bRoute>
            },
            {
                path:'/dashboard/b2bMyorder',
                element:<B2bRoute><MyOrders></MyOrders></B2bRoute>
            },
            {
                path:'/dashboard/b2bCustomerorder',
                element:<B2bRoute><CustomerOrder></CustomerOrder></B2bRoute>
            },
            {
                path:'/dashboard/b2bProducts',
                element:<B2bRoute><BAllProducrs></BAllProducrs></B2bRoute>
            },
            {
                path:'/dashboard/b2bmyShop',
                element:<B2bRoute><MyShop></MyShop></B2bRoute>
            },
            {
                path:'/dashboard/b2bmyprofile',
                element:<B2bRoute><MyProfile></MyProfile></B2bRoute>
            },
            {
                path:'/dashboard/b2csellerAddProducts',
                element:<B2cSellerRoute><BSaddProducts></BSaddProducts></B2cSellerRoute>
            },
            {
                path:'/dashboard/b2csellerCustomerOrders',
                element:<B2cSellerRoute><BuyerOrders></BuyerOrders></B2cSellerRoute>
            },
            {
                path:'/dashboard/b2csellerMyShop',
                element:<B2cSellerRoute><BSmyShop></BSmyShop></B2cSellerRoute>
            },
            {
                path:'/dashboard/b2csellerMyProfile',
                element:<B2cSellerRoute><SellerProfile></SellerProfile></B2cSellerRoute>
            },
            {
                path:'/dashboard/b2cbuyerMyOrders',
                element:<B2cBuyerRoute><BMyOrder></BMyOrder></B2cBuyerRoute>
            },
            {
                path:'/dashboard/b2cbuyerLikedshop',
                element:<B2cBuyerRoute><LikedShop></LikedShop></B2cBuyerRoute>
            },
            {
                path:'/dashboard/b2cbuyerMyProfile',
                element:<B2cBuyerRoute><BMyProfile></BMyProfile></B2cBuyerRoute>
            },
            {
                path:'/dashboard/b2cbuyerMyoffers',
                element:<B2cBuyerRoute><BMyOffers></BMyOffers></B2cBuyerRoute>
            },
            {
                path:'/dashboard/b2cProducts',
                element:<B2cBuyerRoute><AllProducts></AllProducts></B2cBuyerRoute>
            },

        ]
    },
    {
        path:'/*',
        element:<FOfRoute></FOfRoute>
    }
   
])
export default router;