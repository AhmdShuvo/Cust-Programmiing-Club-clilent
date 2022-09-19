import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import Alertp from '../../Alert/Alertp'
const Login = () => {


  const [loginData, setLoginData] = useState({});
  const { loginUser, user, isLoading, authError, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useNavigate();


  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    setLoginData(newLoginData);

  }

  const handleLogIn = e => {
    loginUser(loginData.email, loginData.password)
      .then((usercredential) => {
        const user = usercredential.user
        console.log(user);

      }).then(() => {
        setIsLoading(false)
        history('/')
      });

    e.preventDefault();
  }

  console.log(loginData)


  // console.log(handleLogIn)




  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img className="rounded-t-lg" src="https://www.hirestar.io/jp/assets/login_new.jpg" alt="" />
        </a>
        <div className="p-6">
          {authError && <Alertp >{authError}</Alertp>}
          <form onSubmit={handleLogIn}>
               
               {/* Email input */}
               <div className="mb-6">
                 <input type="text" pattern='[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+.(edu)+.(bd)'  name="email" onChange={handleOnChange}  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Email address" required/>
               </div>
               {/* Password input */}
               <div className="mb-6">
                 <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password"name="password" onChange={handleOnChange} required />
               </div>
               <div className="flex justify-between items-center mb-6">
                 <div className="form-group form-check">
                   
                 </div>
                 <Link className="forgot-password" to="/forgot-password">Forget Password? </Link>
               </div>
               <div className="text-center lg:text-left">
                 <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                   Login
                 </button>
                 <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-gray-800">
                   Don't have an account?
                   
              <Link className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out text-xl"to="/Register">          Register</Link>
                 </p>
                  
                
               </div>
             </form>
          </div>
        </div>
      </div>
   
  );
};

export default Login;
