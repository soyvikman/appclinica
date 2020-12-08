import React, {useState} from 'react';

import FormLogin from './components/formLogin';

import './login.css';

const Login = () => {
  return (
    <div className="main">
      <h1>Login</h1>
      <FormLogin />
    </div>
  );
}

export default Login;
