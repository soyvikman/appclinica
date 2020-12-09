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
          <div className="col-12 col-md-6">
            <OutlinedSelectContainer>
              <MaterialSelect
                placeholder="Departamento"
                selectOptions={departmentList}
                name="department"
                register={register}
              />
            </OutlinedSelectContainer>
          </div>
          <div className="col-12 col-md-6">
            <OutlinedSelectContainer>
              <MaterialSelect
                placeholder="Especialidad"
                selectOptions={departmentList}
                name="specialty"
                register={register}
              />
            </OutlinedSelectContainer>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <MaterialInput
            className="col-12 col-md-6 mt-4 mt-md-0"
            name="specialty"
            register={register}
            placeholder="Especialidad"
          />
          <MaterialInput
            className="col-12 col-md-6 mt-4 mt-md-0"
            placeholder="Fecha de atención"
            name="attentionDay"
            register={register}
            type="date"
          />
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <label htmlFor="comments" className="form-label">Descripción del malestar físico</label>
            <textarea
              className="form-control"
              id="comments"
              rows="4"
              name="comments"
              ref={register}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <button className="btn btn-skyblue" type="submit">Generar cita</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default StepThree;
