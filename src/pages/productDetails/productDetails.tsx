/** @jsxImportSource @emotion/react */
import { Link, useParams } from "react-router-dom";
import products from "../../productsData.json";
import ProductImage from "../../components/prodImage/productImage";
import SizeDropDown from "../../components/size/sizeDropDown";
import { useState } from "react";
import { ProductDetailsStyle } from "./productDetailsStyle";
import Quantity from "../../components/quantity/quantity.tsx";
import Navbar from "../../components/navbar/navbar.tsx";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <>
    <Navbar/>
    <div css={{ display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%"}}>
    <div css={ProductDetailsStyle.container}>
      <ProductImage src={product?.image} alt={product?.title} />

      <div>
        <h1 css={ProductDetailsStyle.title}>{product?.title}</h1>
        <p>{product?.description}</p>
        <strong css={ProductDetailsStyle.price}>${product?.price}</strong>
        <label css={ProductDetailsStyle.label}>Select Size:</label>
        <SizeDropDown 
          selectedSize={selectedSize}
          sizes={["S","M","L"]}
          onChange={(size) => setSelectedSize(size)}
        />
        <Quantity />
        <Link to="/cart">
        <button css={ProductDetailsStyle.button}>Add to Cart</button>
        </Link>
        <p css={ProductDetailsStyle.extraInfo}>🚚 Free delivery</p>
        <p css={ProductDetailsStyle.extraInfo}>➕ Free returns</p><div>
        </div>
      </div>
    </div>  
    <div> <h1 css={ProductDetailsStyle.hhh}>extra content</h1></div>
    </div>
    </>
  );
};
export default ProductPage;
