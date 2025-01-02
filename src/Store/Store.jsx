import { configureStore } from "@reduxjs/toolkit";
import Ecoreducer from "../Feature/EcoSlice";

export const Store = configureStore({
  reducer: {
    app: Ecoreducer,
  },
});
