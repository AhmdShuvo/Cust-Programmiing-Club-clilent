import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       
          
            
    
<>

<div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src="https://www.hirestar.io/jp/assets/login_new.jpg" alt="" />
          </a>
          <div className="p-6">
          <form>
               
               {/* Email input */}
               <div className="mb-6">
                 <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Email address" />
               </div>
               {/* Password input */}
               <div className="mb-6">
                 <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleFormControlInput2" placeholder="Password" />
               </div>
               <div className="flex justify-between items-center mb-6">
                 <div className="form-group form-check">
                   
                 </div>
                 <a href="#!" className="text-gray-800">Forgot password?</a>
               </div>
               <div className="text-center lg:text-left">
                 <button type="button" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
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



      
















      
     
        
       </>
    );
};

export default Login;
