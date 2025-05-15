/** @jsxImportSource @emotion/react */

import type { CartListProps } from "./cartListType";
import { CartListStyle } from "./cartListStyle";


const CartList =({title, description, price,image }:CartListProps)=>{
    return (
        
          <div css={CartListStyle.cardRow}  >
            <img src={image} alt={title} css={CartListStyle.image} />
            <div>
            <h3 css={CartListStyle.title}>{title}</h3>
            <p css={CartListStyle.description}>{description}</p>
            <strong css={CartListStyle.price}>${price}</strong>
            <p>QTY:</p>
            <p>SIZE:</p>
            <button css={CartListStyle.cancel}>×</button>
            <br/>
            </div>
          </div>
          
     
        );
      };



export default CartList;