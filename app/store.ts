import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemon";

import { createWrapper, Context } from "next-redux-wrapper";

const makeStore = (context: Context) =>
  configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
