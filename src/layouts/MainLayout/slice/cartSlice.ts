import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
    cartLength: number;
}

const initialCartState: CartState = {
    cartLength: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        setLength: (state, action: PayloadAction<number>) => {
            state.cartLength = action.payload;
        },
        decreaseCartLength: (state) => {
            state.cartLength--;
        }
    }
});

export const { setLength, decreaseCartLength } = cartSlice.actions;

export default cartSlice.reducer;