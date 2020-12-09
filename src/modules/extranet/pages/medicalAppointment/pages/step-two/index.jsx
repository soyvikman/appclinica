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
            className="col-12"
            placeholder="Teléfono"
            name="phoneNumber"
            register={register({required: true, minLength: 9, maxLength: 12})}
          />
          <MaterialInput
            className="col-12 mt-3"
            placeholder="Correo electrónico"
            name="email"
            register={register({required: true, pattern: /^\S+@\S+$/i})}
          />
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <button className="btn btn-skyblue" type="submit">Continuar</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default StepTwo;
