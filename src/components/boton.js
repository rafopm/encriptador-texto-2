import React from "react";

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