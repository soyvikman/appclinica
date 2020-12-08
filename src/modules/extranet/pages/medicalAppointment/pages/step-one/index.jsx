import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';
import DropdownInput from '../../../../../../global/components/DropdownInput';

const documentList = [
  { "textContent": "Documento Nacional de Identidad", "value": "00", "shortContent": "DNI" },
  { "textContent": "Carnet de extranjería", "value": "01", "shortContent": "CE" },
  { "textContent": "Pasaporte", "value": "04", "shortContent": "PAS" }
];

const StepOne = () => {
  const history = useHistory();
  const nextStep = () => {
      history.push('/home/citas/step-2')
  }

  return (
    <Layout step={1}>
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
            />
          </div>
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <p className="mt-3">Es menor de edad</p>
            <div className="d-flex justify-content-between mx-5">
              <div className="form-check d-inline-block ml-4 ml-md-0">
                <input className="form-check-input" type="radio" name="isMinor"
                       value="si"/>
                <label className="form-check-label" htmlFor="isMinor">
                  Sí
                </label>
              </div>
              <div className="form-check d-inline-block mr-4 ml-md-0">
                <input className="form-check-input" type="radio" name="isMinor"
                       value="no"/>
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
        <button onClick={nextStep}>Continuar</button>
      </div>
    </Layout>
  );
};

export default StepOne;
