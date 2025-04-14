import { useState } from 'react'
import './App.css'
import ListaUsuarios from './Components/ListaUsuarios';
import Saludo from './Components/Saludo';
import Usuario from './Components/Usuario';
import ListaProductos from './Components/ListaProductos';
import Producto from './Components/Producto';



function App() {
  const [count, setCount] = useState(0)

  const usuario={nombre:"Nicolas",edad:43};
  const nombres=["Lucas","Maria","Nicolas","Juana"];

  const productos=[
    {
      id:1,
      nombre:"mouse",
      precio:2500,
      imagen:"https://picsum.photos/200/150?random=1",
    },
    {
      id:2,
      nombre:"monitor",
      precio:400000,
      imagen:"https://picsum.photos/200/150?random=2",
    },
    {
      id:3,
      nombre:"teclado",
      precio:150000,
      imagen:"https://picsum.photos/200/150?random=3",
    },
  ];

  return (
    // <ListaUsuarios/>    
    // <Saludo nombre="Julieta"/>
    // <Usuario info={usuario} />

    // <div>
    //     <h1>Catalogo de productos</h1>
    //     <ListaProductos productos={productos} />     
    // </div>

    <Producto nombre="Teclado" precio={50000}/>



  )
}

export default App
