import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";
import { adminApi } from "./api/adminSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});
