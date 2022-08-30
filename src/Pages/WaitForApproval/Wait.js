import React from 'react';
import useAuth from '../../hooks/useAuth';


const Wait = () => {

    const{approved}=useAuth()
    console.log(approved.approved);
    return (
        <div>
             <h1>Your request is in progress </h1>
        </div>
    );
};

export default Wait;