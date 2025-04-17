import React from 'react';
import { Nav as BootstrapNav, Navbar, Container } from 'react-bootstrap';

function Nav({ items, onSeleccion }) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <BootstrapNav className="me-auto">
          {items.map((item) => (
            <BootstrapNav.Link key={item} onClick={() => onSeleccion(item)}>
              {item}
            </BootstrapNav.Link>
          ))}
        </BootstrapNav>
      </Container>
    </Navbar>
  );
}

export default Nav;
