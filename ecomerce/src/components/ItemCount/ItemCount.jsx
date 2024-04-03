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
    <div className="d-flex">
      <button className="btn btn-dark" onClick={incrementar}> + </button>

      <h2 className="px-5">{contador}</h2>

      <button className="btn btn-dark" onClick={decrementar}> - </button>
    </div>
    </>
  );
};
export default Contador;
