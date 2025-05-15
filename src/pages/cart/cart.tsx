/** @jsxImportSource @emotion/react */

import CartList from "../../components/cartList/cartList";
import { CartListStyle } from "../../components/cartList/cartListStyle";
import products from "../../productsData.json";

const CartPage = () => {
    return(
        <div>
        <h1>this is cart page</h1>
        {products.map((i, index) => (
          <CartList css={CartListStyle.cardRow}
            key={index}
            id={i.id}
            title={i.title}
            description={i.description}
            image={i.image}
            price={i.price}
          />
        ))}
        </div>
    );   
};
export default CartPage;