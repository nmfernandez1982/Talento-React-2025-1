import { Container, ListGroup } from 'react-bootstrap';

export default function Productos() {
  return (
    <Container className="mt-4">
      <h2>Productos Disponibles</h2>
      <ListGroup>
        <ListGroup.Item>Producto A</ListGroup.Item>
        <ListGroup.Item>Producto B</ListGroup.Item>
        <ListGroup.Item>Producto C</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
