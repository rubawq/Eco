/** @jsxImportSource @emotion/react */

import { FaSearch, FaUser, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { navbarStyles } from "./navbarStyle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { Rootstate } from "../../state/store"; 

const Navbar = () => {
  const cartItems = useSelector((state: Rootstate) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav css={navbarStyles.container}>
      <div css={navbarStyles.left}>
        <FaMapMarkerAlt />
        <a href="#">Jewelry</a>
        <a href="#">New Releases</a>
        <a href="#">Gifts</a>
      </div>

      <div css={navbarStyles.center}>
         <Link to="/products"css={{ textDecoration: "none", color: "inherit" }}>
        <h1 >Ruby Lane</h1>
        </Link>
      </div>

      <div css={navbarStyles.right} style={{ position: "relative" }}>
        <input type="text" placeholder="Search Here" css={navbarStyles.searchInput} />
        <FaSearch />
        
       <Link to="/cart" style={{ position: "relative", display: "inline-block" }}>
  <FaShoppingCart />

  {cartQuantity > 0 && (
    <span
      style={{
        position: "absolute",
        top: "-8px",
        right: "-10px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        padding: "2px 6px",
        fontSize: "12px",
        fontWeight: "bold",
        lineHeight: 1,
      }}
    >
      {cartQuantity}
    </span>
  )}
</Link>


        <FaUser />
      </div>
    </nav>
  );
};

export default Navbar;
