import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";
import Moment from 'react-moment';

const MedicalAppointment = () => {
  const [citas, cambiarCitas] = useState([]);
  const [dni, cambiarDNI] = useState("");
  const funcionCambiarDNI = e =>{
    cambiarDNI(e.target.value)
  }
  const funcionEnviar = async e => {
    e.preventDefault()
    try {
      const llamadaCitas = await axios.post('http://localhost:5000/buscarCitas', {
        _DNI: dni
      })
      cambiarCitas(...llamadaCitas.data)
    }catch (error){
      console.log(error.message)
    }
  }

  const borrarCampos = () => {
    cambiarCitas([]);
    cambiarDNI('')
  }

  useEffect(()=>{
    console.log(citas)
  },[citas])

console.log(citas.length)
  if(citas.length === 0){
    return (
        <Fragment>
          <form className="form-inline" onSubmit={funcionEnviar}>
            <div className="form-group mb-2">
              <label htmlFor="staticEmail2" className="sr-only">DNI</label>
              <input type="text" readOnly className="form-control-plaintext" id="staticEmail2"
                     value="Ingrese número de DNI"/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only"></label>
              <input type="text" className="form-control" id="inputPassword2" value={dni} onChange={funcionCambiarDNI}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Enviar</button>
          </form>
          <div>
            <table className="table table-striped">
              <thead>
              <tr>
                <th scope="col">Día</th>
                <th scope="col">Hora</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>


              </tbody>
            </table>
          </div>
        </Fragment>
    )
  }
  return (
    <Fragment>
      <form className="form-inline" onSubmit={funcionEnviar}>
        <div className="form-group mb-2">
          <label htmlFor="staticEmail2" className="sr-only">DNI</label>
          <input type="text" readOnly className="form-control-plaintext" id="staticEmail2"
                 value="Ingrese número de DNI"/>
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="inputPassword2" className="sr-only"></label>
          <input type="text" className="form-control" id="inputPassword2" value={dni} onChange={funcionCambiarDNI}/>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Enviar</button>
        <button onClick={borrarCampos} className="btn btn-danger mb-2">Limpiar campos</button>
      </form>
      <div>
        <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">Día</th>
            <th scope="col">Hora</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
          </tr>
          </thead>
          <tbody>
          {


            <tr key={citas[0]}>
              <th scope="row"><Moment format="DD/MM/YYYY">{citas[1]}</Moment></th>
              <td>{citas[2]}</td>
              <td>{citas[3]}</td>
              <td>{citas[4]}</td>
            </tr>

          }
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default MedicalAppointment;
