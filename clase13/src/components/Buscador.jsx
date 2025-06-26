import { useState } from 'react';
import ProductoCard from './ProductoCard';
import { FaSearch } from 'react-icons/fa';

export default function Buscador({ productos }) 
{
  const [busqueda, setBusqueda] = useState('');

  const filtrados = productos.filter(p =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text"><FaSearch /></span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      <div className="row">
        {filtrados.map(p => (
          <div key={p.id} className="col-md-4">
            <ProductoCard producto={p} />
          </div>
        ))}
      </div>
    </>
  );
}
