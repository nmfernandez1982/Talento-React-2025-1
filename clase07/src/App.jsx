import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './paginas/Inicio';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Productos from './paginas/Productos';
import Administracion from './paginas/Administracion';
import RutaProtegida from './components/RutaProtegida';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/perfil/:id" element={
          <RutaProtegida><Perfil /></RutaProtegida>
        } />
        <Route path="/admin" element={
          <RutaProtegida><Administracion /></RutaProtegida>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
