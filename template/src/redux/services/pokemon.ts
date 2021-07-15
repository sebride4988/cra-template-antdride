import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { FindAll, Pokemon } from './types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    findOnePokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    findAllPokemon: builder.query<FindAll, { page: number; size: number }>({
      query: ({ page, size }) =>
        `pokemon?limit=${size}&offset=${size * (Number(page) - 1)}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useFindOnePokemonByNameQuery, useFindAllPokemonQuery } =
  pokemonApi;
