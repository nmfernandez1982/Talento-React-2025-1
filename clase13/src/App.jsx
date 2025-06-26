import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, Spinner } from 'react-bootstrap';
import Buscador from './components/Buscador';

export default function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargarProductos = async () => 
    {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      toast.error("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleAgregar = () => {
    toast.success("Producto agregado al carrito 🎉");
  };

  return (
    <Container className="my-5">
      <Helmet>
        <title>Tienda React con API</title>
        <meta name="description" content="Tienda conectada a una API real" />
      </Helmet>

      <h1 className="mb-4 text-center">Tienda Online</h1>

      <Button variant="success" className="mb-4" onClick={handleAgregar}>
        Agregar producto
      </Button>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Buscador productos={productos} />
      )}
      <ToastContainer />
    </Container>
  );
}
