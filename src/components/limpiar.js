import React from "react";

export default function Limpiar({texto, className, onClick}) {


  return (
    <button
    className={className}
    onClick={onClick}
  >
    {texto}
  </button>
  )
}
