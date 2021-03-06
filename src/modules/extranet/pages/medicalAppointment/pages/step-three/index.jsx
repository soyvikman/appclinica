import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Layout from '../../../../components/Layout';
import MaterialInput from '../../../../../../global/components/MaterialInput';
import { OutlinedSelectContainer } from '../../../../../../global/components/MaterialSelect';
import MaterialSelect from '../../../../../../global/components/MaterialSelect';
import Check from '../../../../../../shared/images/check.png';
import { Link, useHistory } from 'react-router-dom';

import './steThree.css';

const departmentList = [
  { "textContent": "Arequipa", "value": "00", "shortContent": "Arequipa" },
  { "textContent": "Lima", "value": "01", "shortContent": "Lima" },
  { "textContent": "Tacna", "value": "04", "shortContent": "Tacna" }
];

const hospitalList = [
  { "textContent": "A", "value": "00", "shortContent": "A" },
  { "textContent": "B", "value": "01", "shortContent": "B" },
  { "textContent": "C", "value": "04", "shortContent": "C" }
];

const StepThree = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [isRegister, setIsRegister] = useState(false);
  const store = useSelector(state => state.medicalAppointment);

  const nextStep = (e) => {
    const dataUSer = store.dataUser;
    // TODO: Se llama a la api y si es exitoso el registro se setea a isRegister como true
    setIsRegister(true)
    if (isRegister) {
      console.log('save', {
        ...dataUSer,
        ...e
      });
    }
  }
  return (
    <div>
      {
        isRegister ?
          <Layout step={3}>
            <form className="mt-4" onSubmit={handleSubmit(nextStep)}>
              <div className="row d-flex justify-content-between">
                <div className="col-12 col-md-6">
                  <OutlinedSelectContainer>
                    <MaterialSelect
                      placeholder="Departamento"
                      selectOptions={departmentList}
                      name="department"
                      register={register({required: true})}
                    />
                  </OutlinedSelectContainer>
                </div>
                <div className="col-12 col-md-6">
                  <OutlinedSelectContainer>
                    <MaterialSelect
                      placeholder="Centro de atención"
                      selectOptions={hospitalList}
                      name="hospital"
                      register={register({required: true})}
                    />
                  </OutlinedSelectContainer>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <MaterialInput
                  className="col-12 col-md-6 mt-4 mt-md-0"
                  name="specialty"
                  register={register({required: true})}
                  placeholder="Especialidad"
                />
                <MaterialInput
                  className="col-12 col-md-6 mt-4 mt-md-0"
                  placeholder="Fecha de atención"
                  name="attentionDay"
                  register={register({required: true})}
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
          :
          <>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="alert alert-success col-12 col-md-7 mt-4 justify-content-around" role="alert">
                  <p>
                    Se ha registrado su cita con éxito
                    <Link to={'/'} style={{color: 'inherit'}}> Volver </Link>
                  </p>
                  <div className="icon">
                    <img src={Check} alt="Check" className="img-fluid"/>
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    </div>
  );
};

export default StepThree;
