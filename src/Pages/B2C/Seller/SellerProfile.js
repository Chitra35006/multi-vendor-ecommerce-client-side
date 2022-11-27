import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const SellerProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="h-[600px]  mt-2 login-div">
        <div className="w-96 p-7">

        <div className="avatar flex justify-center items-center mb-5">
            <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt=''/>
            </div>
        </div>
            
            <form>
            

            <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full mt-3 mb-3" />
            <input name="email" type="email" defaultValue={user?.displayName}  placeholder="Email Address" className="input input-bordered w-full mt-3 mb-3" />
         
            <input
                className="btn btn-accent mt-4 w-full"
                value="Update Profile"
                type="submit"
            />
           
            </form>
        </div>
    </div>
    );
};

export default SellerProfile;