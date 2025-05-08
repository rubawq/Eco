/** @jsxImportSource @emotion/react */
import CardCom from "../components/cardComponent/card";
import products from "../productsData.json";


const ProductsPage = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1 css={{ textAlign: "center" }}>E-commerce</h1>
      <div
        css={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((i, index) => (
          <CardCom
            key={index}
            title={i.title}
            description={i.description}
            price={i.price}
            image={i.image}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductsPage;
