import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {createUser,  updateUser} = useContext(AuthContext);

  const [signUpError,setSignUpError] = useState('');
  const [createUserEmail,setCreatedUserEmail] = useState('');
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();

  if(token){
    navigate('/');
  }


  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      toast.success('User Created Successfully');
      const userInfo ={
        displayName: data.name
  
      }
      updateUser(userInfo)
      .then(()=>{
        saveUser(data.email,data.name,data.account);
      })
      .catch(err=>console.log(err));
    })
    .catch(error => {
      console.log(error)
      setSignUpError(error.message)
    });

    const saveUser = (email,name,account)=>{
       const user ={email,name,account};
       fetch('http://localhost:5000/users',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(user)
        
       })
       .then(res => res.json())
       .then(data =>{
        // console.log('save user',data);
        setCreatedUserEmail(email);
       })
    }
    

  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Account Type</span>
            </label>
        <select {...register("account", { required: true })}>
            <option value="b2b">B2B</option>
            <option value="b2cBuyer">B2C Buyer</option>
            <option value="b2cSeller">B2C Seller</option>
        </select>
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
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className='text-red-600'>{signUpError}</p>}
        </form>
        <p className="mt-2">
          Already have an account{" "}
          <Link className="text-secondary" to="/signin">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
