import React from "react";
import {
  Route,
  Link,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/cjs/Navbar';
import MedicalAppointment from '../medicalAppointment';

const HomeIntranet = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/intranet">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
          <div className="row w-100">
            <div className="col-12 d-flex justify-content-around">
              <Link className="link-item" to={`/intranet/citas`}>Citas</Link>
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
