import React from 'react';
import Slide from '../../components/Carousel';

import Pills from '../../../../shared/images/pill.png';
import Ambulance from '../../../../shared/images/ambulance.png';
import Doctor from '../../../../shared/images/doctoricon.png';
import Citas from '../../../../shared/images/diagnosticos.png';

import './home.css';
import CardsServices from './components/cardServices';

const Home = () => {
  const cards = [1,2,3,4,5,6]
  return (
    <>
      <Slide />
      <div className="container">
        <section className="section-container first-section d-flex align-items-center justify-content-center">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title">¿Qué nos hace diferentes?</h2>
              </div>
              <div className="line-title" />
            </div>
            <div className="row">
              <div className="col-12 col-md-4 text-center">
                <div className="icon-box mx-auto">
                  <img src={Pills} alt="pills"/>
                </div>
                <p>Moderna infraestructura</p>
              </div>
              <div className="col-12 col-md-4 text-center">
                <div className="icon-box mx-auto">
                  <img src={Doctor} alt="Doctor"/>
                </div>
                <p>Staff y médicos calificados</p>
              </div>
              <div className="col-12 col-md-4 text-center">
                <div className="icon-box mx-auto">
                  <img src={Ambulance} alt="Ambulance"/>
                </div>
                <p>Servicio de ambulancia</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section
        style={
         {backgroundImage: `url(${Citas})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}}
        className="section-container second-section"
      />
      <div className="container">
        <section className="section-container  d-flex align-items-center justify-content-center my-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title">
                  Nuestros servicios
                </h2>
              </div>
              <div className="line-title" />
              <div className="row d-flex justify-content-around mx-auto">
                {
                  cards.map((elm) => (
                    <CardsServices />
                  ))
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};

export default Home;
