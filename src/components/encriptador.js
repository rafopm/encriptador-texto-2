import React, { useState} from "react";
import Boton from "./boton";
import Validar from "./validar";

export default function Encriptador() {
  const [value, setValue] = useState("");
  // const handleChange = e => setValue(e.target.value);

  function registraTexto(e){
    setValue(e.target.value)
  }

  const vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
  function encriptar() {
    if (value === "") alert("Debe ingresar el texto a encriptar.");
    else {
      setValue(value.toLowerCase());
      var enc = "";
      for (const element of value) {
        enc = vocales[element]
          ? (enc += vocales[element])
          : (enc += element);
      }
      setValue(enc);
    }
  }

  function desencriptar(e) {
    setValue("dato desencriptar");
  }

  return (
    <div className="contenedor-principal">
      <Validar
        onChange={registraTexto}
        defaultValue={value}
        className="encriptadorInput"
      />
      <Boton
        texto="Encriptar"
        esBotonDeEncriptar={true}
        operacion={encriptar}
      />

      <Boton
        texto="Desencriptar"
        esBotonDeEncriptar={false}
        operacion={desencriptar}
      />
    </div>
  );
}
