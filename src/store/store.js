import { configureStore } from "@reduxjs/toolkit";
import { almacenamientoSlice } from "./indicadorActivoSlice";

export const store = configureStore({
  reducer: {
    almacenamiento: almacenamientoSlice.reducer,
  },
});
