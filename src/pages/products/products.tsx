/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import BannerText from "../../components/bannerText/bannerText";
import CardCom from "../../components/card/card";
import Navbar from "../../components/navbar/navbar";
import ProductImage from "../../components/prodImage/productImage";
import { ProductsStyle } from "./productsStyle";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => console.error("Failed to load products"));
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <ProductImage src="/pic/banner3.png" alt="banner" variant="banner" />
        <BannerText />
      </div>

      <div css={ProductsStyle.PageContainer}>
        <h1 css={ProductsStyle.title}>E-commerce</h1>

        <div css={ProductsStyle.cardgrid}>
          {products.map((i) => (
            <CardCom
              key={i.id}
              id={i.id}
              title={i.title}
              description={i.description}
              price={i.price}
              image={i.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
