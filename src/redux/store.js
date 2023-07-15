import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import { usersApi } from "./UsersApi";
export const store = configureStore({
    reducer: {
      [usersApi.reducerPath]: usersApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(usersApi.middleware)
        .concat(userApi.middleware),
  });