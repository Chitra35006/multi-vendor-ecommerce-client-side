import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider'
import useB2cSeller from '../Hooks/useB2cSeller';
import Loading from '../Pages/Shared/Loading'

const B2cSellerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isB2Cseller,isB2CsellerLoading] = useB2cSeller(user?.email);
    const location = useLocation();

    if(loading || isB2CsellerLoading){
        return <Loading></Loading>
    }

    if(user && isB2Cseller){
        return children;
    }

    return <Navigate to ="/signin" state={{from:location}} replace></Navigate>
};

export default B2cSellerRoute ;