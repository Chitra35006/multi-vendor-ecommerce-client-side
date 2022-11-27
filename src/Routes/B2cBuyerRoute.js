import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider'
import useB2cBuyer from '../Hooks/useB2cBuyer';
import Loading from '../Pages/Shared/Loading'

const B2cBuyerRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isB2Cbuyer,isB2CbuyerLoading] = useB2cBuyer(user?.email);
    const location = useLocation();

    if(loading || isB2CbuyerLoading){
        return <Loading></Loading>
    }

    if(user && isB2Cbuyer){
        return children;
    }

    return <Navigate to ="/signin" state={{from:location}} replace></Navigate>
};

export default B2cBuyerRoute ;