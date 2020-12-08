import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';
import { OutlinedSelectContainer } from '../../../../../../global/components/MaterialSelect';
import MaterialSelect from '../../../../../../global/components/MaterialSelect';
import { useHistory } from 'react-router-dom';

import './steThree.css';

const departmentList = [
  { "textContent": "Arequipa", "value": "00", "shortContent": "Arequipa" },
  { "textContent": "Lima", "value": "01", "shortContent": "Lima" },
  { "textContent": "Tacna", "value": "04", "shortContent": "Tacna" }
];

const StepThree = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const nextStep = (e) => {
    console.log('save', e);
  }
  return (
    <Layout step={3}>
      <form className="mt-4" onSubmit={handleSubmit(nextStep)}>
        <div className="row d-flex justify-content-between">
          <OutlinedSelectContainer>
            <MaterialSelect
              className="col-12 col-md-6"
              placeholder="Departamento"
              selectOptions={departmentList}
              name="department"
              register={register}
            />
          </OutlinedSelectContainer>
          <MaterialInput
            className="col-12 col-md-6 mt-4 mt-md-0"
            name="specialty"
            register={register}
            placeholder="Especialidad"
          />
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <button className="btn btn-lg btn-skyblue" type="submit">Generar cita</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default StepThree;
