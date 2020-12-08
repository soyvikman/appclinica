import React from "react";
import {
  Route,
  Link,
} from 'react-router-dom';
import Navbar from 'react-bootstrap/cjs/Navbar';
import MedicalAppointment from './pages/medicalAppointment';

const RouterIntranet = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-items-center">
          <div className="row w-100">
            <div className="col-12 d-flex justify-content-around">
              <Link className="link-item" to={`/home/nosotros`}>Mantenimiento</Link>
              <Link className="link-item" to={`/home`}>Citas médicas</Link>
              <Link className="link-item" to={`/home/citas`}>Consulta externa</Link>
              <Link className="link-item" to={`/home/intranet`}>Programación</Link>
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
      {/*      <Switch>
       <Route
       path='/home/inicio'
       component={Home}
       />

       </Switch>*/}
    </div>
  );
};

export default RouterIntranet


/*
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/cjs/Navbar';

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const Topics = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/foo`}>Foo</Link>
        </li>
        <li>
          <Link to={`${url}/bar`}>Bar</Link>
        </li>
        <li>
          <Link to={`${url}/baz`}>Baz</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

export default Topics
*/
