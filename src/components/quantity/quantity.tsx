/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { QuantityStyle } from "./quantity";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);

const increment = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

const decrement =() =>{
   
    setQuantity(quantity - 1);

};

return(
    <>
    <br/>
        <label>Quantity </label>
        <div css={QuantityStyle.container}>
    <button onClick={decrement} css={QuantityStyle.button}>-</button>
    <div css={QuantityStyle.value}>{quantity}</div>
    <button onClick={increment} css={QuantityStyle.button}>+</button>
</div></>
    );

};

    

export default Quantity;
