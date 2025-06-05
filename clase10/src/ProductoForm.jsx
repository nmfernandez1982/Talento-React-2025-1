import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

function ProductoForm({ onSubmit, productoAEditar, onCancel }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [errores, setErrores] = useState([]);

  useEffect(() => {
    if (productoAEditar) {
      setNombre(productoAEditar.nombre);
      setPrecio(productoAEditar.precio.toString());
      setErrores([]);
    } else {
      setNombre('');
      setPrecio('');
      setErrores([]);
    }
  }, [productoAEditar]);

  const validar = () => {
    const erroresValidacion = [];
    if (!nombre.trim()) {
      erroresValidacion.push('El nombre no puede estar vacío.');
    }
    if (precio === '' || isNaN(precio) || Number(precio) <= 0) {
      erroresValidacion.push('El precio debe ser un número mayor a 0.');
    }
    setErrores(erroresValidacion);
    return erroresValidacion.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validar()) return;

    const producto = {
      nombre: nombre.trim(),
      precio: Number(precio),
    };

    if (productoAEditar) {
      producto.id = productoAEditar.id; 
    }

    onSubmit(producto);

    if (!productoAEditar) {
      setNombre('');
      setPrecio('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {errores.length > 0 && (
        <Alert variant="danger">
          <ul>
            {errores.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Form.Group as={Row} className="mb-3" controlId="nombre">
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="precio">
        <Form.Label column sm={2}>Precio</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit" className="me-2">
        {productoAEditar ? 'Actualizar' : 'Agregar'}
      </Button>

      {productoAEditar && (
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      )}
    </Form>
  );
}

export default ProductoForm;