import React from "react";
import {
  Route,
  Link, useHistory
} from 'react-router-dom';
import Navbar from 'react-bootstrap/cjs/Navbar';
import MedicalAppointment from '../medicalAppointment';

const HomeIntranet = () => {
const history = useHistory();
  const logOut = () => {
      localStorage.setItem('usuario', null);
      history.push('/')
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/intranet/citas">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
          <div className="row w-100">
            <div className="col-12 d-flex justify-content-around">
              <Link className="link-item" to={`/intranet/citas`}>Citas</Link>
                <Link className="link-item" to={`/intranet/agregarcita`}>Agregar Cita</Link>
              <p className="link-item" onClick={logOut}>Cerrar sesión</p>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Route
        path="/intranet"
        render={({ match: { url } }) => {
          console.log(url);
          return (
            <>
              <Route path={`${url}/citas`} component={MedicalAppointment} exact/>
            </>
          )
        }}
      />
    </div>
  );
};

export default HomeIntranet;
