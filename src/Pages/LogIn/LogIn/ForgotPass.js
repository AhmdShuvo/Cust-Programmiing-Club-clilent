import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ForgotPass = () => {

    const {user,forgetPassword}=useAuth()
    const[email,setemail]=useState('')

    return (
        <div>
            <center>

                <form onSubmit={()=>forgetPassword()} action="">
                    <input required type="text" style={{width:"50%",padding:'10px'}} onChange={(e)=>setemail(e.target.value)}  name="email" id="" /> <br /> <br />
                    <button className='btn' onClick={()=>forgetPassword(email)}>Get Varification Email</button>


                </form>
            </center>
        </div>
    );
};

export default ForgotPass;