import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BootstrapCarousel() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data.slice(0, 5)));
  }, []);


  
  return (
    <Carousel>
      {productos.map((producto) => (
        <Carousel.Item key={producto.id}>
          <div className="d-flex flex-column align-items-center p-4 bg-light">
            <img
              className="d-block"
              src={producto.image}
              alt={producto.title}
              style={{ height: '250px', objectFit: 'contain' }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 rounded mt-3 p-2">
              <h5>{producto.title}</h5>
              <p>${producto.price}</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BootstrapCarousel;
