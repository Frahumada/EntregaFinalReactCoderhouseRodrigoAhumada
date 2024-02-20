import CartWidget from "../CartWidget/CartWidget.jsx"
const NavBar = () => {
    return (
        <nav>
            <h3>Nina Clothing</h3>
            <div>
                <button>Remeras</button>
                <button>Pantalones</button>
                <button>Camperas</button>
            </div>
            <CartWidget/>
        </nav>
    )

}

export default NavBar