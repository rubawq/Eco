/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import type { Rootstate } from "../../state/store";
import CartList from "../../components/cartList/cartList";
import { CartListStyle } from "../../components/cartList/cartListStyle";

const CartPage = () => {
  const cartItems = useSelector((state: Rootstate) => state.cart.items);

  return (
    <div>
      <h1>this is cart page</h1>
      {cartItems.map((i, index) => (
        <CartList
          css={CartListStyle.cardRow}
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
