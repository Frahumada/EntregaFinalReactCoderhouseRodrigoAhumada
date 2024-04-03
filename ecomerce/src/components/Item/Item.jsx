import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Item = ({id, name, img, category, price}) => {
  return (
    <article className="">
      <div className="card my-2 mx-2 bg-danger d-flex flex-column">
        <h1 className="align-self-center pt-2 mb-0">{name}</h1>
        <img src={img} className="card-img-top align-self-center" alt="UNA IMAGEN" style={{ width: 150, margin:20 }} />
        <p className="px-5 align-self-center">Categoria: {category}</p>
        <h1 className="px-5 align-self-center">$ {price}</h1>
          <Link to={`/detail/${id}`} className="btn btn-secondary mx-5 mb-2">Ver Detalle</Link>
      </div>
    </article>
  );
};
export default Item;
