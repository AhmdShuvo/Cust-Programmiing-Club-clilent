import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
              <Link to='/Login'>LogIn</Link>
            </li>
            <li>
              <Link to='/Research'>Research</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='blogs'>Blogs</Link>
            </li>
            <li>
              <Link to='notice'>notice</Link>
            </li>
            <li>
              <Link to='/apply'>Apply </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="https://cust.edu.bd/" className="btn btn-ghost normal-case text-xl"> <img src='./images/cpclogo.png' alt="" width={40} ></img>  </a><span className='m-2'>Cust Programming Club</span>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        <div className="avatar placeholder">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
    <span>Tanjir Ahmed</span>
  </div>
</div>
        </button>
      </div>
    </div>

  );
};

export default Navigation;