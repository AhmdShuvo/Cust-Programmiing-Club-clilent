import React from 'react';

import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';




const PrivateRoute = ({ children }) => {
    const { user, isLoading,approved } = useAuth();
    const location = useLocation();

     
    if (isLoading ) {
      
        console.log(approved);
        return (
           'loading'
        );
    }

    if(!approved){return "not approved"}
    if(!user.email){

        return <Navigate to={'/Login'} state={{ from: location }}></Navigate>
    }
    
        if (!approved ){
 
            return <Navigate to='/approval' state={{ from: location }} />;
        }
 
   
    
    return children;
};

export default PrivateRoute;