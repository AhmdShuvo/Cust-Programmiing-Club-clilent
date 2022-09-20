import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ForgotPass = () => {
const [email,setemail]=useState('')
console.log(email);
    const {forgetPassword}=useAuth()
    return (
        <div>
           <center>
    
            <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Forgot Password </h2>
    <form onSubmit={(e)=>{
                forgetPassword(email)
                e.preventDefault()
            }} action="">
                <input style={{padding:'10px',width:"100%"}} placeholder="Enter your email" className='text-dark' onChange={(e)=>setemail(e.target.value)} type="email" name="" id="" />
<button className='btn' type='submit'> Get recovery email </button>



            </form>
  </div>
</div>
            </center> 
        </div>
    );
};

export default ForgotPass;