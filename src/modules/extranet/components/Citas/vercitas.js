import {useState, useEffect, Fragment} from "react";
import axios from "axios";

const VerCitas = () => {
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
            cambiarCitas(llamadaCitas.data)
        }catch (error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        console.log(citas)
    },[citas])


    return(
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
                    {
                        citas.map(function(cita){
                            <tr key={cita[0]}>
                                <th scope="row">{cita[1]}</th>
                                <td>{cita[2]}</td>
                                <td>{cita[3]}</td>
                                <td>{cita[4]}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default  VerCitas