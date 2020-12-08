import React from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';

const StepTwo = () => {
  const history = useHistory();
  const nextStep = () => {
    history.push('/home/citas/step-3')
  }

  return (
    <Layout step={2}>
      <div className="mt-4">
        paso 2
        <div className="row d-flex justify-content-between">
          <MaterialInput
            className="col-12 col-md-6"
            placeholder="Nombres"
          />
          <MaterialInput
            className="col-12 col-md-6 mt-4 mt-md-0"
            placeholder="Apellidos"
          />
        </div>
        <button onClick={nextStep}>Continuar</button>
      </div>
    </Layout>
  );
};

export default StepTwo;
