import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider'
import useB2B from '../Hooks/useB2B';
import Loading from '../Pages/Shared/Loading'

const B2bRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isB2Buser,isB2BuserLoading] = useB2B(user?.email);
    const location = useLocation();

    if(loading || isB2BuserLoading){
        return <Loading></Loading>
    }

    if(user && isB2Buser){
        return children;
    }

    return <Navigate to ="/signin" state={{from:location}} replace></Navigate>
};

export default B2bRoute;