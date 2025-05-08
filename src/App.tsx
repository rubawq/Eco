/** @jsxImportSource @emotion/react */
import ProductsPage from "./pages/products";
import ProductPage from "./pages/productPage";  
import { Route, Routes } from "react-router-dom";


function App() {
  return(
    <Routes>
     <Route path="/" element={<ProductsPage/>}/>
      <Route path="/product/:id" element={<ProductPage/>}/>
    </Routes>
  );

}
export default App;
