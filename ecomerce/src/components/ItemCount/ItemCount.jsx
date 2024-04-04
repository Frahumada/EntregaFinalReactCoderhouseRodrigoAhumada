import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Contador = ({ initial = 1, stock, item}) => {
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

  const addToCart = () => {
    console.log("Adding", contador, item);
  };

  return (
    <>
    <div className="d-flex flex-wrap w-25 justify-content-between">
      <button className="btn btn-dark" onClick={incrementar}> + </button>

      <h2 className="px-5">{contador}</h2>

      <button className="btn btn-dark" onClick={decrementar}> - </button>
      <button className="btn btn-dark w-100 my-3" onClick={addToCart}>Añadir al carrito</button>
    </div>
    </>
  );
};
export default Contador;
