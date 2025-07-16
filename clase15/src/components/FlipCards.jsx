import React, { useEffect, useState } from 'react';

function FlipCards() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data.slice(0, 6)));
  }, []);


  return (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {productos.map((producto) => (
        <div
          key={producto.id}
          className="card"
          style={{
            width: '200px',
            height: '300px',
            perspective: '1000px',
          }}
        >
          <div
            className="w-100 h-100 position-relative"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotateY(180deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotateY(0deg)';
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100 bg-white border rounded d-flex flex-column align-items-center p-2"
              style={{
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                src={producto.image}
                alt={producto.title}
                className="img-fluid"
                style={{ height: '150px', objectFit: 'contain' }}
              />
              <h6 className="mt-2 text-center">{producto.title}</h6>
            </div>

            <div
              className="position-absolute top-0 start-0 w-100 h-100 bg-primary text-white rounded p-3 d-flex flex-column justify-content-center align-items-center"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <p className="small text-center">{producto.description.slice(0, 90)}...</p>
              <span className="badge bg-light text-dark">${producto.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlipCards;

