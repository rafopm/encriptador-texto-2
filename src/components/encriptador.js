import React, { useState } from "react";
import Boton from "./boton";
import Limpiar from "./limpiar";
import Validar from "./validar";
import Copiar from "./copiar";

export default function Encriptador() {
  const [value, setValue] = useState("");
  const [mensaje, setMensaje] = useState("Encriptador de Texto");
  const vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

  function mostrarMensaje(e) {
    setMensaje(e);
    setTimeout(() => {
      setMensaje("Encriptador de Texto");
    }, 3000);
  }

  function registraTexto(e) {
    setValue(e.target.value.toLowerCase());
  }

  function copy() {
    if (value === "") {
      mostrarMensaje("Debe ingresar el texto a copiar.");
    } else {
      navigator.clipboard.writeText(value);
      mostrarMensaje("Texto copiado.");
    }
  }

  function limpia(e) {
    e.preventDefault();
    setValue("");
    mostrarMensaje("Área de texto limpia");
  }

  function encriptar(e) {
    e.preventDefault();
    if (value === "") {
      mostrarMensaje("Debe ingresar el texto a Encriptar.");
    } else {
      let enc = "";
      for (const element of value) {
        enc = vocales[element] ? (enc += vocales[element]) : (enc += element);
      }
      setValue(enc);
      mostrarMensaje("Texto encriptado");
    }
  }

  function desencriptar() {
    let obj = value;
    if (obj === "") {
      mostrarMensaje("Debe ingresar el texto a Desencriptar.");
    } else {
      var desec = "";
      for (let i = 0; i < obj.length; i++) {
        if (vocales[obj[i]]) {
            //Comparo si son iguales
            if (
              obj.substring(i, vocales[obj[i]].length + i) === vocales[obj[i]]
            ) {
              desec += obj[i];
              i += vocales[obj[i]].length - 1;
            } else {
              desec += obj[i];
            }
        } else desec += obj[i];
      }
      setValue(desec);
      mostrarMensaje("Texto desencriptado");
    }
  }

  return (
    <div className="contenedor-principal">
      <div>{mensaje}</div>
      <div className="area-texto">
        <Validar
          onChange={registraTexto}
          defaultValue={value}
          className="encriptadorInput"
        />
      </div>

      <div className="area-botones">
        <Boton
          texto="Encriptar"
          esBotonDeEncriptar={true}
          operacion={encriptar}
          className="boton-encriptar"
        />

        <Boton
          texto="Desencriptar"
          esBotonDeEncriptar={false}
          operacion={desencriptar}
          className="boton-desencriptar"
        />

        <Limpiar texto="Limpiar" className="boton-limpiar" onClick={limpia} />

        <Copiar texto="Copiar" className="boton-copiar" onClick={copy} />
      </div>
    </div>
  );
}
