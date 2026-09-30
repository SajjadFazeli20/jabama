import { createSlice } from "@reduxjs/toolkit";
import type { Property } from "../types";
import type { PayloadAction } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [] as Property[],
    reducers: {
        addToWishlist: (state, action: PayloadAction<Property>) => {
            state.push(action.payload);
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            return state.filter(p => p.id !== action.payload);
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;