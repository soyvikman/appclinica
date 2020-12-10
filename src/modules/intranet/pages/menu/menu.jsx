import Navbar from 'react-bootstrap/cjs/Navbar';
import React, {Fragment} from 'react';
import {Link, useHistory} from "react-router-dom";

const Menu = () => {
    const history = useHistory();
    const logOut = (value) => {
        localStorage.setItem('usuario', null);
        history.push('/')
    }
    if(localStorage.getItem('usuario')=== null){

        history.push('/')
    }
    return(
    <Fragment>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/intranet/menu">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
                <div className="row w-100">
                    <div className="col-12 d-flex justify-content-around">
                        <Link className="link-item" to={`/intranet/citas`}>Citas</Link>
                        <Link className="link-item" to={`/intranet/agregarcitas`}>Agregar Cita</Link>
                        <p className="link-item" onClick={logOut}>Cerrar sesión</p>
                    </div>
                </div>
            </Navbar.Collapse>
        </Navbar>
        <div>
            <div style={{textAlign: "center", fontSize: "2em"}}>
                Bienvenido, {localStorage.getItem('usuario')}
            </div>
            <div style={{textAlign: "center"}}>
                <button type="button" className="btn btn-primary" style={{margin: "1%"}}>Ver Citas</button>
                <button type="button" className="btn btn-success" style={{margin: "1%"}}>Agregar Cita</button>
                <button type="button" className="btn btn-warning" style={{margin: "1%"}}>Editar Citas</button>
                <button type="button" className="btn btn-danger" style={{margin: "1%"}}>Borrar Citas</button>
            </div>
        </div>
    </Fragment>
    )
}

export default Menu;