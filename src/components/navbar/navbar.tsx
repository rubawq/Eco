/** @jsxImportSource @emotion/react */

import { FaSearch, FaHeart, FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { navbarStyles } from "./navbarStyle";



const Navbar = () => {
  return (
    <nav css={navbarStyles.container}>
     <div css={navbarStyles.left}>
        <FaMapMarkerAlt/>
         <a href="#">Jewelry</a>
        <a href="#">New Releases</a>
        <a href="#">Gifts</a>

     </div>
     <div css={navbarStyles.center}>
        <h1>Ruby Lane</h1>
     </div>
     <div css={navbarStyles.right}>
        <input type="text" placeholder="Search Here" css={navbarStyles.searchInput}/>
        <FaSearch/>
        <FaHeart/>
        <FaUser/>

     </div>

    </nav>
  );
};

export default Navbar;
