import ItemCount from '../ItemCount/ItemCount'
// eslint-disable-next-line react/prop-types
const ItemDetail = ({ name, img, category, price, description, stock }) => {
  return (
    <article className="card my-2 mx-2">
      <h1>{name}</h1>
      <img src={img} alt="" style={{ width: 200 }} />
      <p>Categoria: {category}</p>
      <p>{description}</p>
      <h1>$ {price}</h1>
      <ItemCount stock={stock}/>
    </article>
  );
};

export default ItemDetail;
