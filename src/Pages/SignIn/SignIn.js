import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";
import "./SignIn.css";
const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const{signIn} = useContext(AuthContext);

  const[loginError,setLoginError] = useState('');
  const[loginUserEmail,setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from,{replace:true});
  }

  const handleSignIn = (data) => {
    // console.log(data);
    signIn(data.email,data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setLoginUserEmail(data.email);
    })
    .catch(error =>{
      console.log(error.message);
      setLoginError(error.message);
    });
  };

  return (
    <div className="h-[600px] flex justify-center items-center mt-5 login-div">
      <div className="w-96 p-7">
        <h2 className="text-3xl text-center">SignIn</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent mt-4 w-full"
            value="Sign In"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="mt-2 text-center">Forgot Password?<Link className='text-secondary' to="/signup">Click Here</Link></p>
        <p className="mt-2">Don't have any account? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
