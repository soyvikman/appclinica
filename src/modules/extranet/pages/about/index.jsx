import React from 'react';
import Start from '../../../../shared/images/start.png';
import Graduated from '../../../../shared/images/gorro.png';
import Pills from '../../../../shared/images/pill.png';
import Copa from '../../../../shared/images/copa.png';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-container d-flex align-items-center justify-content-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="title">
                    Sobre nosotros
                  </h2>
                </div>
                <div className="line-title" />
              </div>

              <div className="row">
                <div className="col-12">
                  <p>
                    En CLINICA-WEB, nuestro equipo de atención médica tiene un lema: "Cuidar la vida". Simboliza la variedad de
                    capacidades y servicios que le brindamos.
                    En esencia, representa el espíritu y la pasión por brindar la mejor atención médica, en asociación con
                    usted con un enfoque en mejorar su salud y su vida. En la práctica, se ha convertido en la piedra de
                    toque de un enfoque sistemático y bien coordinado que une a médicos, enfermeras y personal de apoyo en
                    la búsqueda del bienestar.
                    Nuestra misión es ser reconocidos como el centro de atención médica más importante del sur de California,
                    proporcionando servicios médicos de alta calidad, rentables y de vanguardia de una manera compasiva y
                    solidaria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-container d-flex align-items-center justify-content-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="title">
                    Nuestros logros
                  </h2>
                </div>
                <div className="line-title" />
              </div>

              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="icon-box mx-auto">
                  <img src={Copa} alt="pills"/>
                </div>
                <p>Mejor centro médico</p>
                </div>
                <div className="col-12 col-md-3">
                  <div className="icon-box mx-auto">
                  <img src={Graduated} alt="pills"/>
                </div>
                <p>Certificación internacional</p>
                </div>
                <div className="col-12 col-md-3">
                  <div className="icon-box mx-auto">
                  <img src={Pills} alt="pills"/>
                </div>
                <p>Premio al mejor doctor</p>
                </div>
                <div className="col-12 col-md-3">
                  <div className="icon-box mx-auto">
                  <img src={Start} alt="pills"/>
                </div>
                  <p>Premio a mejor clinica</p>
                </div>
              </div>
            </div>
          </div>


          <h2>
            Equipo médico
          </h2>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
