import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth"
import Alert from '../../Alert/Alert';
import Alertp from  "../../Alert/Alertp"
const Register = () => {
  const [loginData, setLoginData] = useState({});
  
  const history = useNavigate()
  const { registerUser, isLoading, user, authError } = useAuth()
  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData }
      newLoginData[field] = value;
      setLoginData(newLoginData);

  }

  const handleRegister = e => {
    e.preventDefault();

    if (loginData.password !== loginData.password2) {
        alert("Didn't matched the password")
        return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);

}
console.log(loginData)

    return (
        <>

<div className="font-sans">
{
                                            user?.email && <Alert severity="success">Congratulation you are added succesfully!</Alert>

                                        }
                                        {
                                            authError && <Alertp variant="outlined" severity="error">
                                                {authError}
                                            </Alertp>
                                        }
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label htmlFor className="block mt-3 text-lg text-gray-700 text-center font-semibold">
                Sign Up
              </label>
              <form method="#" action="#" className="mt-10"onSubmit={handleRegister}>
                <div>
                  <input  name='name' type="text" placeholder="   Full Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 text-gray-700"onChange={handleOnChange} required  />
                </div>
                <div className="mt-7">                
                  <input name='email' type="email" placeholder="  Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 text-gray-700" onChange={handleOnChange} required  />                           
                </div>
                <div className="mt-7">                
                  <input name='password' type="password" placeholder="  Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 text-gray-700" onChange={handleOnChange} required  />                           
                </div>
                <div className="mt-7">                
                  <input name='password2' type="password" placeholder="  Confirm Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 text-gray-700" onChange={handleOnChange} required  />                           
                </div>
                <div className="mt-7">
                  <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Sign up
                  </button>
                </div>
                
                
                  
                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2 text-gray-700"> Already have an account? </label>
                    <Link className="no-underline border-b border-blue text-red-600 " to='/login'>
              Log in
            </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>



        </>
    );
};

export default Register;