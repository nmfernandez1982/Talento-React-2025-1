import React, { useState } from 'react';
import Swal from 'sweetalert2';

function FormularioCOnSweetAlert() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Expresion Regular
  const emailEsValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valido Campos completos
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') 
      {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'POr favor completar todos los campos',
      });
      return;
    }

    // Validar formato de email
    if (!emailEsValido(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email no es valido',
        text: 'Ingresá un email con formato valido.',
      });
      return;
    }

    // Si todo está OK y no hay ningun return
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado',
      text: `Gracias, ${nombre}. Te responderemos pronto.`,
    });

    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Formulario de contacto</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Mensaje:</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribí tu mensaje..."
          rows="4"
          style={{ width: '100%', padding: '8px' }}
        ></textarea>
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>
        Enviar
      </button>
    </form>
  );
}

export default FormularioCOnSweetAlert;