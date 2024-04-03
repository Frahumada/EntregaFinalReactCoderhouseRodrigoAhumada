import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
