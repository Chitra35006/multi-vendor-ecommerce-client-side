import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashBoardLayout = () => {
    const{user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <Outlet></Outlet>
            </div>
            <div className="drawer-side">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li>
                <Link to='/dashboard'>Add Offer</Link>
                </li>

                {/* //admin */}
                {
                    isAdmin && <>
                <li>
                <Link to='/dashboard/allusers'>All Users</Link>
                </li>
                <li>
                <Link to='/dashboard/b2busers'>B2B Users</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2cSeller'>B2C Seller</Link>
                </li>
                <li>
                <Link to='/dashboard/b2cBuyer'>B2B Buyer</Link>
                </li>  
                    </>
                }

                
                {/* b2busers */}
                <li>
                <Link to='/dashboard/b2bMyorder'>My Orders</Link>
                </li>
                <li>
                <Link to='/dashboard/b2bAddproduct'>Add Product</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2bCustomerorder'>Customer Order</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2bmyShop'>My Shop</Link>
                </li>
                


                {/* b2c seller */}
                <li>
                <Link to='/dashboard/b2cCustomerOrders'>Customer Order</Link>
                </li>
                <li>
                <Link to='/dashboard/b2cAddProducts'>Add Product</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2cMyShop'>My Shop</Link>
                </li>

                {/* b2c buyer */}
                <li>
                <Link to='/dashboard/b2cMyOrders'>My Order</Link>
                </li>
                <li>
                <Link to='/dashboard/b2cLikedshop'>Liked Shop</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2cMyoffers'>My Offers</Link>
                </li>



            </ul>
            </div>
      </div>
    </div>
    );
};

export default DashBoardLayout;