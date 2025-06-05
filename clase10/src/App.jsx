import { useState } from 'react'
import { Container } from 'react-bootstrap';
import ProductoForm from './ProductoForm';
import ListaProductos from './ListaProductos';

function App() 
{
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [contadorId, setContadorId] = useState(1);

const agregarProducto=(producto)=>
{
    const nuevoProducto = { ...producto, id: contadorId };
    setProductos([...productos, nuevoProducto]);
    setContadorId(contadorId + 1);
};

const actualizarProducto = (productoActualizado) => 
    {
    setProductos(productos.map(p => (p.id === productoActualizado.id ? productoActualizado : p)));
    setProductoAEditar(null);
  };

 const borrarProducto = (id) => 
    {
    setProductos(productos.filter(p => p.id !== id));
  };

 const editarProducto = (producto) => 
    {
    setProductoAEditar(producto);
  };

  return (
    <Container className="my-4">
      <h2>Gestion de Productos</h2>

      <ProductoForm
        onSubmit={productoAEditar ? actualizarProducto : agregarProducto}
        productoAEditar={productoAEditar}
        onCancel={() => setProductoAEditar(null)}
      />
       <hr />
      <ListaProductos
        productos={productos}
        onEdit={editarProducto}
        onDelete={borrarProducto}
      />

    </Container>
  )
}

export default App
