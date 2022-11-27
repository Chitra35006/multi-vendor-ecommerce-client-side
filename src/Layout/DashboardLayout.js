import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useB2B from '../Hooks/useB2B';
import useB2cBuyer from '../Hooks/useB2cBuyer';
import useB2cSeller from '../Hooks/useB2cSeller';

import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashBoardLayout = () => {
    const{user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const[isB2Buser] = useB2B(user?.email)
   const[isB2Cseller] = useB2cSeller(user?.email)
    const[isB2Cbuyer] = useB2cBuyer(user?.email)
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
                {
                    isB2Buser && <>
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
                 <li>
                <Link to='/dashboard/b2bmyprofile'>My Profile</Link>
                </li>
                <li>
                <Link to='/dashboard/b2bProducts'>All Products</Link>
                </li>
                    </>
                }
                


                {/* b2c seller */}
                {
                    isB2Cseller && <>
                <li>
                <Link to='/dashboard/b2csellerCustomerOrders'>Customer Order</Link>
                </li>
                <li>
                <Link to='/dashboard/b2csellerAddProducts'>Add Product</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2csellerMyShop'>My Shop</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2csellerMyProfile'>My Profile</Link>
                </li>
                    </>
                }

                {/* b2c buyer */}
               {
                isB2Cbuyer && <>
                 <li>
                <Link to='/dashboard/b2cbuyerMyOrders'>My Order</Link>
                </li>
                <li>
                <Link to='/dashboard/b2cbuyerLikedshop'>Liked Shop</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2cbuyerMyoffers'>My Offers</Link>
                </li>
                 <li>
                <Link to='/dashboard/b2cbuyerMyProfile'>My Profile</Link>
                </li>
                </>
               }

            </ul>
            </div>
      </div>
    </div>
    );
};

export default DashBoardLayout;