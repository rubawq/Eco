import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
          <br />
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
