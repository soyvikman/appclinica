import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MaterialInput from '../../../../../../global/components/MaterialInput';
import './formLogin.css';

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
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8">
          <form className="card mx-width" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center mt-5 title-login">Login</h1>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <MaterialInput
                    placeholder="Usuario"
                    name="userName"
                    register={register}
                  />
                </div>
                <div className="col-12 mt-3">
                  <MaterialInput
                    placeholder="Contraseña"
                    name="psw"
                    register={register}
                  />
                </div>
                <div className="col-12 text-center mt-3">
                  <button className="btn btn-md btn-skyblue" type="submit">Iniciar sesión</button>
                </div>
              </div>
              <div className="alert alert-danger" style={loginError} role="alert">
                La contraseña proporcionada es incorrecta.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
