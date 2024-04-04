import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { useState } from "react";

function App() {
  const [carrito,setCarrito] = useState([]);
  const user = "Rodrigo";
  const edad = 29;
  

  return (
    
    <>
        <BrowserRouter>
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
        </BrowserRouter>
    </>
  );
}

export default App;
