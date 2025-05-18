/** @jsxImportSource @emotion/react */
import CartPage from "./pages/cart/cart";
import ProductsPage from "./pages/products/products";
import ProductPage from "./pages/productDetails/productDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}
export default App;
