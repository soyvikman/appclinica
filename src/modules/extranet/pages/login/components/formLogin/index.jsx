import React from 'react';
import './formLogin.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const FormLogin = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Usuario" name="userName" ref={register}/>
            <input type="password" placeholder="Contraseña" name="psw" ref={register}/>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
