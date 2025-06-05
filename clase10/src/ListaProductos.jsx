import { Table, Button } from 'react-bootstrap';

function ListaProductos({ productos, onEdit, onDelete }) 
{
  if (productos.length === 0) 
    {
    return <p>No hay productos cargados.</p>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>      
          <th>Nombre</th>
          <th>Precio</th>
          <th style={{ width: '150px' }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map(({ id, nombre, precio }) => (
          <tr key={id}>
            <td>{id}</td>  
            <td>{nombre}</td>
            <td>${precio.toFixed(2)}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                className="me-2"
                onClick={() => onEdit({ id, nombre, precio })}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(id)}
              >
                Borrar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListaProductos;
