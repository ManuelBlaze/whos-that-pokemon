import { GameStatus, type Pokemon, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import { computed, onMounted, ref } from 'vue';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);
  const pokemon = ref<Pokemon[]>([]);
  const pokemonOptions = ref<Pokemon[]>([]);

  const isLoading = computed(() => pokemon.value.length === 0);
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonOptions.value.length);
    return pokemonOptions.value[randomIndex];
  });

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=493');

    const pokemonArray: Pokemon[] = response.data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = Number(urlParts.at(-2)) ?? 0;
      return {
        id,
        name: pokemon.name,
      };
    });
    return pokemonArray.sort(() => Math.random() - 0.5);
  };

  const getOptions = (howMany: number = 4) => {
    gameStatus.value = GameStatus.Playing;
    pokemonOptions.value = pokemon.value.slice(0, howMany);
    pokemon.value = pokemon.value.slice(howMany);
  };

  onMounted(async () => {
    await new Promise((r) => setTimeout(r, 500));
    pokemon.value = await getPokemon();
    getOptions();
  });

  return {
    isLoading,
    gameStatus,
    pokemonOptions,
    randomPokemon,

    // methods
    getOptions,
  };
};
