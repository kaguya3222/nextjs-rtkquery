import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "../types";

import { HYDRATE } from "next-redux-wrapper";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
