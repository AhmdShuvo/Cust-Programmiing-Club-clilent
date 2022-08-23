import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
const Navigation = () => {
  const { user, logOut } = useAuth();
  const logoutWithAlart = () => {
      logOut()
  }




    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to='/Register'>Sign Up</Link>
        </li>
        <li>
          <Link to='/Research'>Research</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
        <li>
          <Link to='/Blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='/apply'>Apply </Link>
        </li>

      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a href="https://cust.edu.bd/" className="btn btn-ghost normal-case text-xl"> <img src='https://i.ibb.co/RQf78N9/291605210-454802836471911-4788002618510328382-n.png'width={40} ></img>  </a><span className='m-2'>Cust Programming Club</span>
  </div>
  
  {user.email &&
                                <div className="d-flex user my-2">
                                    <img className="bg-white ms-5" src={user?.photoURL} alt="" />
                                    <p className="mt-1 ms-2">{user?.displayName}</p>

                                </div>
                            }


                            {
                                user.email ?
                                    <Link to="/">  <button onClick={logoutWithAlart} className="signup-button ms-5">Log Out</button></Link>
                                    :
                                    <Link to="/register"> <button className="signup-button ">Sign Up</button></Link>
                            }
 
  
</div>

    );
};

export default Navigation;