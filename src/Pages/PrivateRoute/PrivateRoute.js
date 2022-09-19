import React from 'react';

import { Navigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';




const PrivateRoute = ({ children }) => {
    const { user, isLoading,approved } = useAuth();
    const location = useLocation();

     
    if (isLoading ) {
      
        console.log(approved);
        return (
            <center> <h1 style={{margin:'50px',fontSize:'72px'}}>Loading ....</h1>
            </center>
        );
    }

    if(!user.email){

        return <Navigate to={'/login'} state={{ from: location }}></Navigate>
    }
    

    if(!approved){return <center> <h1 style={{margin:'50px'}}>application Not Approved  </h1>
    <Link to="/">Return To Home</Link>
    </center>}
  
        if (!approved ){
 
            return <Navigate to='/approval' state={{ from: location }} />;
        }
 
   
    
    return children;
};

export default PrivateRoute;