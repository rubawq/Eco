/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import BannerText from "../../components/bannerText/bannerText";
import CardCom from "../../components/card/card";
import Navbar from "../../components/navbar/navbar";
import ProductImage from "../../components/prodImage/productImage";
import { ProductsStyle } from "./productsStyle";
import axios from "axios";
import { FaExclamationCircle, FaSearch } from "react-icons/fa";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const searchFilter = products
    .filter((p) => (category === "all" ? true : p.category === category))
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch(() => console.error("Failed to load products"));
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <ProductImage src="/pic/banner3.png" alt="banner" variant="banner" />
        <BannerText />
      </div>

      {/* 🔍 Search + Filter side by side */}
      <div css={ProductsStyle.filter}>
        <input
          type="text"
          placeholder="Search Here"
          css={ProductsStyle.searchBar}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch />

        <select
          css={ProductsStyle.selectDropdown}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option disabled value="all">Filter by Category</option>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="men's clothing">Men's Clothing</option>
        </select>
      </div>

      <div css={ProductsStyle.PageContainer}>
        <h1 css={ProductsStyle.title}>E-commerce</h1>

        {/* Loading and Not Found States */}
        {products.length === 0 && <p>Loading...</p>}
        {products.length > 0 && searchFilter.length === 0 && (
          <>  
          <p css={{fontSize:'20px'}}>No products found.</p>
          <FaExclamationCircle />
          </>
        )}

        {/* Products Grid */}
        <div css={ProductsStyle.cardgrid}>
          {searchFilter.map((i) => (
            <CardCom
              key={i.id}
              id={i.id}
              title={i.title}
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
