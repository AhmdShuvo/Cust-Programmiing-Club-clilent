import React, { useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Alertp from '../../Alert/Alertp'
const Login = () => {


  const [loginData, setLoginData] = useState({});
  const { loginUser, user, isLoading, authError } = useAuth();

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
      .then((usercredential)=>{const user= usercredential.user
      isLoading(false)
    history('/')
    });

      e.preventDefault();
  }
 
console.log(loginData)


// console.log(handleLogIn)




    return (
        <div>
            <h2>hhhhh</h2>
        </div>
    );
};

export default Login;
