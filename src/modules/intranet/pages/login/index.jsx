import React, {useState} from 'react';

import FormLogin from './components/formLogin';

import './login.css';

const Login = () => {
  return (
    <div className="main d-flex align-items-center">
      <FormLogin />
    </div>
  );
}

export default Login;
