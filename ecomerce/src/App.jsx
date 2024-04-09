import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import {CartContext } from "./Context/CartContext.jsx";



function App() {
  const [carrito,setCarrito] = useState([]);


  return (
    
    <>
        <BrowserRouter>
        <CartContext.Provider value={{carrito, setCarrito}}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos al ItemListConainer"} />
              }
            />
            <Route
              path="/productos"
              element={
                <ItemListContainer greeting={"Bienvenidos al ItemListConainer"} />
              }
            />
            <Route
              path="/productos/:category"
              element={
                <ItemListContainer greeting={"Listado de productos FILTRADOS"} />
              }
            />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          </Routes>

        </CartContext.Provider>
        </BrowserRouter>
    </>
  );
}

export default App;
