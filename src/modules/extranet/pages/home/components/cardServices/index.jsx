import React from 'react';
import { Card } from 'react-bootstrap';

const CardsServices = () => {
  return (
    <Card style={{ width: '18rem' }} className="my-3">
      <Card.Body>
        <Card.Title className="title-card text-center">Servicio médico</Card.Title>
        <div className="line-title-card" />
        {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
        <Card.Text>
          Descripción de servicio
        </Card.Text>
{/*        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>*/}
      </Card.Body>
    </Card>
  );
};

export default CardsServices;
