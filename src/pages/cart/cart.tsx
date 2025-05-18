/** @jsxImportSource @emotion/react */
import { useSelector } from "react-redux";
import type { Rootstate } from "../../state/store";
import CartList from "../../components/cartList/cartList";
import { CartListStyle } from "../../components/cartList/cartListStyle";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state: Rootstate) => state.cart.items);
  const navigate = useNavigate();
  return (
    <>
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontSize: "20px",
        }}
        onClick={() => navigate(-1)}
      >
        ←
      </button>

      <Navbar />
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
    </>
  );
};

export default CartPage;
