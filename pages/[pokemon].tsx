import { useRouter } from "next/router";
import { pokemonApi, useGetPokemonByNameQuery } from "../app/services/pokemon";
import { wrapper } from "../app/store";

export default function Home() {
  const { query } = useRouter();
  const { data } = useGetPokemonByNameQuery(query.pokemon as string);

  if (!data)
    throw new Error("Data is undefined when page is opened by client routing");

  return <div>Name: {data?.name}</div>;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const pokemon = context.params?.pokemon;
    if (typeof pokemon === "string") {
      store.dispatch(pokemonApi.endpoints.getPokemonByName.initiate(pokemon));
    }

    await Promise.all(pokemonApi.util.getRunningOperationPromises());

    return {
      props: {},
    };
  }
);
