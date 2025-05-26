import React, { useState, useEffect } from "react";

const LifeCycle = () => {
  const [text, setText] = useState("");

  // Se ejecutan dos veces por el strict mode de index.js

  // componentDidMount
  useEffect(() => {
    console.log("Componente montado");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Componente actualizado");
  }, [text]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      // Necesario regresar una funcion (puede ser una funcion vacia)
      console.log("Componente desmontado");
    };
  }, []);

  // componentDidMount y componentDidUpdate combinados (no tiene dependencias)
  useEffect(() => {
    console.log("Componente montado o actualizado");
  });

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="LifeCycle Component"
      />
      <p>{text}</p>
    </div>
  );
};

export default LifeCycle;
