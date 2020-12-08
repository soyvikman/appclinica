import React from "react";
import {
  Route,
  Link,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/cjs/Navbar';
import Home from './pages/home';
import AboutUs from './pages/about';
import Login from '../intranet/pages/login';
import MedicalAppointment from './pages/medicalAppointment';
import Intranet from '../intranet';

import './index.css';

const RouterExtranet = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
          <div className="row w-100">
            <div className="col-12 d-flex justify-content-around">
              <Link className="link-item" to={`/home`}>Inicio</Link>
              <Link className="link-item" to={`/home/nosotros`}>Conócenos</Link>
              <Link className="link-item" to={`/home/citas`}>Citas</Link>
              <Link className="link-item" to={`/home/intranet`}>Intranet</Link>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Route
        path="/home"
        render={({ match: { url } }) => {
          console.log(url);
          return (
            <>
              <Route path={`${url}/`} component={Home} exact/>
              <Route path={`${url}/nosotros`} component={AboutUs} />
              <Route path={`${url}/citas`} component={MedicalAppointment} />
              <Route path={`${url}/intranet`} component={Intranet} />
            </>
          )
        }}
      />
{/*      <Switch>
        <Route
          path='/home/inicio'
          component={Home}
        />

      </Switch>*/}
    </div>
  );
};

export default RouterExtranet
