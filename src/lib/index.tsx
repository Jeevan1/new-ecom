import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/ProductSlice";

export const store = () => {
  return configureStore({
    reducer: {
      products: ProductSlice,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
