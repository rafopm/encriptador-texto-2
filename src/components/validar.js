import React from "react";
import "../styles/validar.css";

export default function Validar({ defaultValue, onChange, className }) {
  function soloMinusculas(value) {
    const pattern = /^[a-zñ Backspace/A-ZÑ]+$/;
    return pattern.test(value);
  }

  return (
    <textarea
      cols={10}
      rows={20}
      value={defaultValue}
      onChange={onChange}
      placeholder="Ingrese su texto aquí."
      onKeyDown={(e) => {
        if (!soloMinusculas(e.key)) {
          e.preventDefault();
        }
      }}
      className={className}
    ></textarea>
  );
}
