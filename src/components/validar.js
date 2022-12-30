import React from "react";

export default function Validar({ defaultValue, onChange }) {
  
  function soloMinusculas(value) {
    const pattern = /^[a-zñ ]+$/;
    return pattern.test(value);
  };

  return (
    <input
      type="text"
      value={defaultValue}
      onChange={onChange}
      onKeyDown={
        (e) => {
          if (!soloMinusculas(e.key)) {
            e.preventDefault();
          }
      }}
    />
  );
}
