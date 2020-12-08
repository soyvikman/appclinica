import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';

import './stepTwo.css';

const StepTwo = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const nextStep = (e) => {
    console.log(e);
    history.push('/home/citas/step-3')
  }

  return (
    <Layout step={2}>
      <form className="mt-4" onSubmit={handleSubmit(nextStep)}>
        <div className="row d-flex justify-content-center">
          <MaterialInput
            className="col-12 col-md-8"
            placeholder="Teléfono"
            name="phoneNumber"
            register={register}
          />
          <MaterialInput
            className="col-12 col-md-8 mt-3"
            placeholder="Correo electrónico"
            name="email"
            register={register}
          />
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <button className="btn btn-lg btn-skyblue" type="submit">Continuar</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default StepTwo;
