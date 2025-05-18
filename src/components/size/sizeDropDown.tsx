/** @jsxImportSource @emotion/react */
import type { SizeDropProps } from "./sizeDropDownType";
import { DropDown } from "./sizeDropDownStyle";

const SizeDropDown = ({ sizes, selectedSize, onChange }: SizeDropProps) => {
  return (
    <div >
      <select value={selectedSize} onChange={(e) => onChange(e.target.value)} css={DropDown.Select}>
        <option value="" disabled>Select Size</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {" "}
            {size}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SizeDropDown;
