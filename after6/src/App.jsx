import { useState,useEffect } from 'react'


function App() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results); 
        setLoading(false);
    })
    .catch(error => console.error('Error al cargar los personajes:', error));
  }, []);
    
    
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Personajes de Rick and Morty</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {characters.map(character => (
            <div key={character.id} style={{ margin: '1rem', display: 'inline-block' }}>
              <img src={character.image} alt={character.name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
              <h3>{character.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App
