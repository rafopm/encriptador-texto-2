import React from "react";
import "../styles/boton.css"

function Boton({ texto, operacion, className}) {

  

  return (
    <button
      className={className}
      onClick={operacion}
    >
      {texto}
    </button>
  );
}

export default Boton;