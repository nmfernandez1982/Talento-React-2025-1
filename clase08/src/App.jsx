import { useState } from 'react'
import { Container } from 'react-bootstrap';
import { UserProvider } from './context/UserContext';
import UserCard from './components/UserCard';
import CargarBotonDeUsuario from './components/CargarBotonDeUsuario';


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
               <Container className="text-center mt-5">
                  <h1>Usuario Aleatorio</h1>
                      <UserCard/>
                      <CargarBotonDeUsuario/>
               </Container>
    </UserProvider>
  )
}

export default App;
