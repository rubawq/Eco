/** @jsxImportSource @emotion/react */
import { QuantityStyle } from "./quantity";

type QuantityProps = {
  value: number;
  onChange: (newQuantity: number) => void;
};

const Quantity = ({ value, onChange }: QuantityProps) => {
  const increment = () => {
    if (value < 10) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <>
      <br />
      <label>Quantity </label>
      <div css={QuantityStyle.container}>
        <button onClick={decrement} css={QuantityStyle.button}>
          –
        </button>
        <div css={QuantityStyle.value}>{value}</div>
        <button onClick={increment} css={QuantityStyle.button}>
          +
        </button>
      </div>
    </>
  );
};

export default Quantity;
