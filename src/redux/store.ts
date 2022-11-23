import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cart/slice";

import { useDispatch } from "react-redux";
import filter from "./slices/filter/slice";
import pizza from "./slices/pizza/slice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
