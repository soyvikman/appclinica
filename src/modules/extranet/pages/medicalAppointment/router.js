import React from "react";
import { Route } from 'react-router-dom';
import StepOne from './pages/step-one';
import StepTwo from './pages/step-two';
import StepThree from './pages/step-three';

const RouterMedicalAppointment = () => {
  return (
    <div>
      <Route
        path="/home/citas"
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
