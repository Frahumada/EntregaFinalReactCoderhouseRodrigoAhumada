import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(prod => (
        <Item
          key={prod.id}
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
