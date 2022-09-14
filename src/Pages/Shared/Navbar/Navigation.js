import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
const Navigation = () => {


  const { user, logOut } = useAuth()
  console.log(user.email);

  return (
    
    <div className="navbar bg-base-100  sticky top-0 z-50 bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li> <Link to="/">Home</Link></li>
            <li> <Link to='/research'>Research</Link></li>
            <li> <Link to='/notice'>Notice</Link></li>
            <li> <Link to='/about'>About</Link></li>
           {!user.email &&  <li> <Link to='/login'>Login</Link></li>}
            <li><Link to='/blogs'>Blogs</Link> </li>
            <li>{user.email ? <Link to="/">  <button onClick={logOut} className="signup-button ms-5">Log Out</button></Link> : <Link to='/register'>Sign Up </Link>}</li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href='/' className="btn btn-ghost normal-case text-xl"><img src="./images/291605210_454802836471911_4788002618510328382_n.png" alt="" width='50px' /></a>
      </div>
      <div className="navbar-end">

        {user.email&&<button className="btn btn-ghost btn-circle dropdown">
          <div className="indicator">

            <div className="avatar placeholder ">

              <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ">
                <span> <img src={user.photoURL} alt="user-photo" /></span>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-8">
                  <li><p>{user.displayName}</p></li>
                  <li><Link to="/">  <button onClick={logOut} className="signup-button ms-5">Log Out</button></Link> </li>
                </ul>
              </div>
            </div>
          </div>
        </button>}
      </div>
    </div>



  );
};

export default Navigation;