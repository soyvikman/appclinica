import React, {useState} from 'react';
import './formLogin.css';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const FormLogin = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loginError, gettingLogingError] = useState({display: "none"});

  const onSubmit = async (value) => {
    try{
      const data = await axios.post('http://localhost:5000/validarLogin', {
        inputUser: value.userName,
        inputPassword: value.psw
      })
      if(!data.data.error){
        localStorage.setItem('usuario', JSON.stringify(data.data.usuario));
        history.push('/intranet/citas');
      } else {
        gettingLogingError({display: "block"})
      }
    } catch(e){
      console.log(e)
    }

  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form className="card" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Usuario" name="userName" ref={register}/>
            <input type="password" placeholder="Contraseña" name="psw" ref={register}/>
            <button type="submit">Iniciar sesión</button>
              <div className="alert alert-danger" style={loginError} role="alert">
                La contraseña proporcionada es incorrecta.
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
