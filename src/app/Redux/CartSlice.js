import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,       
    items: [],     
  },

  reducers: {
   
    cart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);

      if (exists) {
        exists.quantity += 1;  
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

     
      state.value = state.items.reduce((acc, i) => acc + i.quantity, 0);
    },

   
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.value = state.items.reduce((acc, i) => acc + i.quantity, 0);
    },


    clearCart: (state) => {
      state.items = [];
      state.value = 0;
    },


    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
      state.value = state.items.reduce((acc, i) => acc + i.quantity, 0);
    },

  
    decrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item && item.quantity === 1) {
        
        state.items = state.items.filter((i) => i.id !== item.id);
      }
      state.value = state.items.reduce((acc, i) => acc + i.quantity, 0);
    },
  },
});

export const { cart, remove, clearCart, incrementQuantity, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;
