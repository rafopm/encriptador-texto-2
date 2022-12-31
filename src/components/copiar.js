import React from "react";

export default function Copiar({ texto, className, onClick }) {


  return (
    <button className={className} onClick={onClick}>
      {texto}
    </button>
  );
}
