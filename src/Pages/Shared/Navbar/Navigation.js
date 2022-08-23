import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
const Navigation = () => {

  const { user, logoutWithAlart } = useAuth()

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 bg-transparent">
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
             {user.email?<Link to="/">  <button onClick={logoutWithAlart} className="signup-button ms-5">Log Out</button></Link>: <Link to='/Login'>LogIn</Link>}
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

        <a href="https://cust.edu.bd/" className="btn btn-ghost normal-case text-xl"> <img src='./images/cpclogo.png' width={40} ></img>  </a><span className='m-2'>Cust Programming Club</span>
      </div>
      <div className="navbar-end">

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>
      </div>


      {user.email &&
        <div className="d-flex user my-2">
          <img className="bg-white ms-5" src={user?.photoURL} alt="" />
          <p className="mt-1 ms-2">{user?.displayName}</p>

        </div>
      }



    </div>





  );
};

export default Navigation;