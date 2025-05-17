import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


interface CartItems{
    description: string;
    id: string;
    title: string;
    price: number;
    image: string;
    quantity:number;
   
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
    addToCart: (state, action:PayloadAction <CartItems>)=>  {
      state.items.push(action.payload);
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
