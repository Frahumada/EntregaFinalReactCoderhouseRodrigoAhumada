import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget.jsx"
const NavBar = () => {
    return (
        <nav>
            <h3>Impresiones</h3>
            <div>
                <Link to={"/category/libro"} type="button" class="btn btn-dark">Libros</Link>
                <Link to={"/category/pelicula"} type="button" class="btn btn-dark">Peliculas</Link>
                <Link to={"/category/musica"} type="button" class="btn btn-dark">Musica</Link>
            </div>
            <CartWidget/>
        </nav>
    )

}

export default NavBar