import React from 'react';

import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';




const PrivateRoute = ({ children }) => {
    const { user, isLoading,approved } = useAuth();
    const location = useLocation();
    console.log(approved.approved);
    if (isLoading && !approved.keys) {
        return (
           'loading'
        );
    }
    if(!user.email){

        return <Navigate to={'/Login'} state={{ from: location }}></Navigate>
    }

   if (!approved.approved) {
        return <Navigate to='/approval' state={{ from: location }} />;
    }
    
    return children;
};

export default PrivateRoute;