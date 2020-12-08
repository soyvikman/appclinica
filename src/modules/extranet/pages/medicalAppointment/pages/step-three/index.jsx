import React from 'react';
import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';
import { useHistory } from 'react-router-dom';

const StepThree = () => {
  const history = useHistory();
  const nextStep = () => {
    console.log('save');
  }
  return (
    <Layout step={3}>
      step 3
      <div className="mt-4">
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

export default StepThree;
