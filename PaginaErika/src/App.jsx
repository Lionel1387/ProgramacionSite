import React, { useState } from 'react';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState('');
  const [mostrarJuego, setMostrarJuego] = useState(false);
  const [jugadaUsuario, setJugadaUsuario] = useState('')
  const [random, setRandom] = useState(0)
  const opciones = ["Piedra", "Papel", "Tijeras"];

  const manejarCambioUsuario = (e) => setNuevoUsuario(e.target.value);
  const manejarJugadaUsuario = (e) => setJugadaUsuario(e.target.value);
  const agregarUsuario = () => {
    if (nuevoUsuario.trim()) {
      setUsuarios([...usuarios, nuevoUsuario]);
      setNuevoUsuario('');
    }
  };
  const checkearJuego = (e) =>{
    const jugadaMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    console.log(jugadaMaquina)
  }
  return (
    <div>
      {mostrarJuego ? (
        <div>
          <h1>Juego Piedra, Papel o Tijera</h1>
          <h2>Ingresa tu jugada</h2>
          <div className='jugada-container'>
            <div className='jugada piedra'></div>
            <div className='jugada papel'></div>
            <div className='jugada tijeras'></div>
          </div>
          <button onClick={checkearJuego}>Jugar</button>
          <button onClick={() => setMostrarJuego(false)}>Volver a Usuarios</button>
        </div>
      ) : (
        <div>
          <h1>Agregar Usuarios</h1>
          <input
            type="text"
            value={nuevoUsuario}
            onChange={manejarCambioUsuario}
            placeholder="Agregar usuario"
          />
          <button onClick={agregarUsuario}>Agregar Usuario</button>
          <button onClick={() => setMostrarJuego(true)}>Iniciar Juego</button>

          <h2>Usuarios:</h2>
          <ul>
            {usuarios.map((usuario, index) => (
              <li key={index}>{usuario}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
