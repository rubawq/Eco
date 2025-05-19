import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CartItems {
  description: string;
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
interface CartState {
  items: CartItems[];
}
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItems>) => {
      const existingItem = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
