import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Buscador = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => (
        <Col key={producto.id} md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={producto.image} style={{ height: '200px', objectFit: 'contain' }} />
            <Card.Body>
              <Card.Title>{producto.title}</Card.Title>
              <Card.Text>${producto.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Buscador;
