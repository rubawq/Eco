import { useParams } from "react-router-dom";
import products from "../productsData.json";

const ProductPage = () => {

    const {id} = useParams();
     const product = products.find(p => p.id === (id));
     console.log(product)
    return(
       <div>
           <h1>{product?.title}</h1>
           <p>{product?.description}</p>
           <strong>${product?.price}</strong>
           <img src={product?.image} alt={product?.title} />

       </div>
    );
}
export default ProductPage;