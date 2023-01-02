import React, { useState } from "react";
import Boton from "./boton";
import Limpiar from "./limpiar";
import Validar from "./validar";
import Copiar from "./copiar";
import { FcHighPriority, FcHeatMap } from "react-icons/fc";
import LogoGit from "../images/logo_github_verde.png";

import "../styles/encriptador.css";

export default function Encriptador() {
  const [value, setValue] = useState("");
  const [mensaje, setMensaje] = useState(
    "Solo letras minúsculas y sin acentos."
  );
  const vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat", á: "ai", é: "enter", í: "imes", ó: "ober", ú: "ufat", c: cif };

  function mostrarMensaje(e) {
    setMensaje(e);
    setTimeout(() => {
      setMensaje("Solo letras minúsculas y sin acentos.");
    }, 4000);
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
      let desec = "";
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
    <div className="contenedor-app">
      <div className="nombre-app">
        <div>
          <FcHeatMap className="aviso-icono" />
          ENCRYPTOR
        </div>
        <div>
          <a href="https://github.com/rafopm/encriptador-texto-2">
            <img className="logo-git" src={LogoGit} alt="Logo GitHub" />
          </a>
        </div>
      </div>
      <div className="area-texto">
        <Validar
          onChange={registraTexto}
          defaultValue={value}
          className="encriptadorInput"
        />
      </div>
      <div className="area-informacion">
        <FcHighPriority className="aviso-icono" /> {mensaje}
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
        <div className="botones-short">
          <Limpiar texto="Limpiar" className="boton-limpiar" onClick={limpia} />
          <Copiar texto="Copiar" className="boton-copiar" onClick={copy} />
        </div>
      </div>
    </div>
  );
}
