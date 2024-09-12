import { GameStatus, type PokemonListResponse } from '../interfaces';
import { pokemonApi } from '../api/pokemonApi';
import { ref } from 'vue';

export const usePokemonGame = () => {
  const gameStatus = ref<GameStatus>(GameStatus.Playing);

  const getPokemon = async () => {
    const response = await pokemonApi.get<PokemonListResponse>('/?limit=493');
  };

  return {
    gameStatus,
  };
};
