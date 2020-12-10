import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/login';
import HomeIntranet from './pages/home';
import MedicalAppointment from "../extranet/pages/medicalAppointment";

const IntranetRoute = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/home/intranet'>
          <Login />
        </Route>
        <Route path='/intranet/citas'>
          <HomeIntranet />
        </Route>
        <Route path='/intranet/agregarcita'>
          <MedicalAppointment />
        </Route>
      </Switch>
    </div>
  );
};

export default IntranetRoute;
