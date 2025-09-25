import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  quantity?: number; // Added for cart functionality
}

type CartState = {
  items: CartItem[];
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch