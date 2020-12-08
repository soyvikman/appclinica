import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';
import DropdownInput from '../../../../../../global/components/DropdownInput';

import './steOne.css';

const documentList = [
  { "textContent": "Documento Nacional de Identidad", "value": "00", "shortContent": "DNI" },
  { "textContent": "Carnet de extranjería", "value": "01", "shortContent": "CE" },
  { "textContent": "Pasaporte", "value": "04", "shortContent": "PAS" }
];

const StepOne = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const nextStep = (e) => {
    console.log(e);
    history.push('/home/citas/step-2')
  }

  return (
    <Layout step={1}>
      <form className="mt-4" onSubmit={handleSubmit(nextStep)}>
        <div className="row d-flex justify-content-between">
          <MaterialInput
            className="col-12 col-md-6"
            placeholder="Nombres"
            name="name"
            register={register}
          />
          <MaterialInput
            className="col-12 col-md-6 mt-4 mt-md-0"
            placeholder="Apellidos"
            name="lastName"
            register={register}
          />
        </div>
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <DropdownInput
              selectOptions={documentList}
              resetInputWhenSelectChange={true}
              onChange={() => {}}
              capitalizeInput={2}
              name="document"
              selectName="documentList"
              placeholder="Tipo de documento"
              registerInput={register}
              registerSelect={register}
            />
          </div>
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <p className="mt-3">Es menor de edad</p>
            <div className="d-flex justify-content-between mx-5">
              <div className="form-check d-inline-block ml-4 ml-md-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isMinor"
                  value="si"
                  ref={register}
                />
                <label className="form-check-label" htmlFor="isMinor">
                  Sí
                </label>
              </div>
              <div className="form-check d-inline-block mr-4 ml-md-0">
                <input
                  className="form-check-input"
                  type="radio"
                  name="isMinor"
                  value="no"
                  ref={register}
                />
                <label className="form-check-label" htmlFor="isMinor">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-between">
          <MaterialInput
            className="col-12 col-md-6 mt-4 mt-md-0"
            placeholder="Fecha de nacimiento"
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

export default StepOne;
