import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/proyojon.png";
import { AuthContext } from "../../../Contexts/AuthProvider";
import "./Navbar.css";
const Navbar = () => {


  const {user,logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then(()=>{})
    .catch(err=>console.error(err));
  }

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      {
        user?.uid?
       <>
        <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
        <li className="flex justify-center items-center text-rose-400">Hello, {user?.displayName}</li>
        <li>
        <button onClick={handleLogout}>Sign Out</button>
      </li>
       </>
      :<>
      <li>
        <Link to="/signin">SignIn</Link>
      </li>
      <li>
      <Link to="/signup">SignUp</Link>
    </li>
      </>
      }
    </React.Fragment>
  );
  return (
    <div className="navbar nav-div flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="logo" src={logo} alt="" />
          <span className="web-title">Proyojon</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
