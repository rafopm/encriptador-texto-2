import React from "react";

function Boton({ texto, esBotonDeEncriptar, operacion }) {

  

  return (
    <button
      className={esBotonDeEncriptar ? "boton-encriptar" : "boton-desencriptar"}
      onClick={operacion}
    >
      {texto}
    </button>
  );
}

export default Boton;
