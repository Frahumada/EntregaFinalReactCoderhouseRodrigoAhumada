import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Contador = ({ initial = 1, stock }) => {
  const [contador, setContador] = useState(initial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <button onClick={incrementar}> + </button>

      <h2>{contador}</h2>

      <button onClick={decrementar}> - </button>
    </>
  );
};
export default Contador;
