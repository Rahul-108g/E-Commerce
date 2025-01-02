import { createSlice } from "@reduxjs/toolkit";
import data from "../Data/Data1.json";

export const EcoSlice = createSlice({
  name: "E-com",
  initialState: {
    user: data,
    error: false,
    message: false,
    search: [],
    navdata: "",
    cart: [],
  },
  reducers: {
    searchm: (state, action) => {
      state.search = action.payload;
    },

    navdatam: (state, action) => {
      state.navdata = action.payload;
    },
    cartm: (state, action) => {
      const id = action.payload;

      if (id) {
        const item = state.user.filter((val) => {
          return val.id === action.payload;
        });

        state.cart.push(item[0]);
      }
    },
    deleteitm: (state, action) => {
      state.cart = state.cart.filter((val) => val.id !== action.payload);
    },
  },
});

export const { searchm, navdatam, cartm, deleteitm } = EcoSlice.actions;
export default EcoSlice.reducer;
