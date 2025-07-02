import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Container, Spinner } from 'react-bootstrap';
import Buscador from './components/Buscador';
import Paginador from './components/Paginador';


function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

 // Estado para la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

  // Cargar los productos desde la API
  const cargarProductos = async () => {
    try {
      const respuesta = await fetch('https://fakestoreapi.com/products');
      const datos = await respuesta.json();
      setProductos(datos);
    } catch (error) {
      toast.error("Error al cargar los productos");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);


  const manejarAgregar = () => {
    toast.success("Producto agregado al carrito 😜");
  };


// Lógica de paginación
  const indiceUltimoProducto = paginaActual * productosPorPagina; 
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosVisibles = productos.slice(indicePrimerProducto, indiceUltimoProducto);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

 
  return (
    <Container className="my-5">     
      <Helmet>
        <title>Tienda React con API</title>
        <meta name="description" content="" />
      </Helmet>
      <h1 className="mb-4 text-center">Tienda Online</h1>    
      <Button variant="success" className="mb-4" onClick={manejarAgregar}>
        Agregar producto
      </Button>     
      {cargando ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
        <Buscador productos={productosVisibles} />
           <Paginador
            totalPaginas={totalPaginas}
            paginaActual={paginaActual}
            cambiarPagina={setPaginaActual}
          />
        </>
      )}

      <ToastContainer />
    </Container>
  );
}












export default App
