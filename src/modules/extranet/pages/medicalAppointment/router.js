import React, {Fragment} from "react";
import {Link, Route, useHistory} from 'react-router-dom';
import StepOne from './pages/step-one';
import StepTwo from './pages/step-two';
import StepThree from './pages/step-three';
import Navbar from "react-bootstrap/cjs/Navbar";

const RouterMedicalAppointment = () => {
    const history = useHistory();
    const logOut = (value) => {
        localStorage.setItem('usuario', null);
        history.push('/')
    }
  return (
    <div>
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
      <Route
        path="/intranet/agregarcita"
        render={({ match: { url } }) => {
          console.log(url);
          return (
            <>
              <Route path={`${url}/`} component={StepOne} exact />
              <Route path={`${url}/step-2`} component={StepTwo} />
              <Route path={`${url}/step-3`} component={StepThree} />
            </>
          )
        }}
      />

    </div>
  );
};

export default RouterMedicalAppointment
