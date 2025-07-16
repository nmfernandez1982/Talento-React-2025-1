import React, { useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const FlipCatalog = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);


  return (
    <div className="d-flex justify-content-center">

        
      <HTMLFlipBook width={300} height={400} size="stretch">
        {productos.map((producto) => (
          <div key={producto.id} className="p-3 bg-light border h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 className="text-primary">{producto.title}</h5>
              <img
                src={producto.image}
                alt={producto.title}
                className="img-fluid my-2"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <p className="small">{producto.description.slice(0, 100)}...</p>
            </div>
            <div>
              <span className="badge bg-success">${producto.price}</span>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipCatalog;
