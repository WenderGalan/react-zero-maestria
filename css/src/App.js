import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const [n, setN] = useState(15)
  const [redTitle, setRedTitle] = useState(true)


  return (
    <div className="App">
      { /* CSS Global */ }
      <h1>React com CSS</h1>
      { /* CSS de Componente */ }
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      { /* Inline CSS */ }
      <p style={{
        color: "white",
        padding: "25px",
        borderTop: "5px solid red"
      }}>
        Este elemento foi estilizado de forma inline
      </p>
      { /* Inline CSS Dinamico */ }
      <h2 style={ n > 10 ? { color: "purple" } : { color: "pink" } }>CSS Dinâmico</h2>
      <button onClick={() => n > 10 ? setN(8) : setN(11)}>Mudar a cor</button>
      { /* Classe Dinamico */ }
      <h2 className={redTitle ? "red-title" : "title" }>Este titulo vai ter classe dinâmica</h2>
      <button onClick={() => redTitle ? setRedTitle(false) : setRedTitle (true)}>Mudar a cor</button>
      { /* CSS Modules */ }
      <Title />
    </div>
  );
}

export default App;
