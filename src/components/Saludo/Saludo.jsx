import './Saludo.css';

function Saludo() {

  function saludarPorConsola(nombre) {
    console.log("HOLA", nombre);
  };

  return (
    <button className="btn btn-primary" onClick={() => saludarPorConsola("Lucas")}>Saludar</button>
    // <button style={{backgroundColor: "blue"}} onClick={() => saludarPorConsola("Lucas")}>Saludar</button>
  );
};

export default Saludo;