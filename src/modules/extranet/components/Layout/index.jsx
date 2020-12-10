import React, { useState, useEffect } from 'react';

import WhiteCard from '../../../../global/components/Cards/WhiteCard';
import MainTitle from '../../../../global/components/Titles/MainTitle';
import Stepper from '../../../../global/components/Stepper';
import { Text, ContainerStepper } from './styles.jsx';
const stepsRegisterAppointment = [
  {
    label: 'Datos del paciente',
    status: 'active',
  },
  {
    label: 'Información de contacto',
    status: '',
  },
  {
    label: 'Datos de la cita',
    status: '',
  },
];
const Layout = ({ step = 1, children }) => {
  const [steps, setSteps] = useState(stepsRegisterAppointment);

  useEffect(() => {
    switch (step) {
      case 1: {
        stepsRegisterAppointment.map((_, i) => i === 0 ? _.status = 'active' : _.status = '');
        break;
      }
      case 2: {
        stepsRegisterAppointment[0].status = 'completed';
        stepsRegisterAppointment[1].status = 'active';
        stepsRegisterAppointment[2].status = '';
        break;
      }
      case 3: {
        stepsRegisterAppointment.map((_, i) => i === 2 ? _.status = 'active' : _.status = 'completed');
      }
    }

    setSteps(stepsRegisterAppointment);
  })

  return (
    <WhiteCard className="mx-width">
      <MainTitle title="Agendar cita" />

      <ContainerStepper>
        <Stepper
          stepList={steps}
        />
      </ContainerStepper>

      {children}
    </WhiteCard>
  );
}

export default Layout;
