/* eslint-disable react/prop-types */
import Item from "../Item/Item";

const ItemList = ({ products, titulo }) => {
  return (
    <div >
      <h2>Categoria a mostrar: {titulo}</h2>
      {products.map(prod => (
        <Item
          key={prod.id}
          id={prod.id}
          name={prod.name}
          img={prod.img}
          category={prod.category}
          price={prod.price}
        />
      ))}
    </div>
  );
};
export default ItemList;
