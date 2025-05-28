import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => 
    {
    logout();
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Tienda Noemi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Perfil</Nav.Link>
            </Nav>
            <Navbar.Text className="me-3">
              Usuario: <strong>{user}</strong>
            </Navbar.Text>
            <Button variant="outline-light" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card style={{ width: "30rem" }}>
          <Card.Body className="text-center">
            <Card.Title>Dashboard</Card.Title>
            <Card.Text className="mb-4">
              ¡Hola <strong>{user}</strong>, Bienvenido al panel !!!
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
