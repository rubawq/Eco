/** @jsxImportSource @emotion/react */
import BannerText from "../../components/bannerText/bannerText";
import CardCom from "../../components/card/card";
import Navbar from "../../components/navbar/navbar";
 import ProductImage from "../../components/prodImage/productImage";
import products from "../../productsData.json";

import  { ProductsStyle } from "./productsStyle";


const ProductsPage = () => {
  return (
    <>
    <Navbar/>
    <div>
      
      <ProductImage src="/pic/banner3.png" alt="banner" variant="banner"/>
      <BannerText/>
      </div>
    <div css={ProductsStyle.PageContainer}>
      
      <h1 css={ProductsStyle.title}>E-commerce</h1>
      <div css={ProductsStyle.cardgrid}>
        {products.map((i, index) => (
          <CardCom
            key={index}
            id={i.id}
            title={i.title}
            description={i.description}
            price={i.price}
            image={i.image}
            
          />
        ))}
      </div>
    </div></>
  );
};

export default ProductsPage;
