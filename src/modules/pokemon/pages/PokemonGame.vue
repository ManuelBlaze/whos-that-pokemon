<template>
  <section
    v-if="isLoading || !randomPokemon.id"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Please wait</h1>
    <h3 class="animate-pulse">Loading Pokémon...</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl m-5 animate-pulse">Who's that Pokémon?!</h1>

    <!-- Pokémon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- Pokémon Options -->
    <PokemonOptions
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
      :options="pokemonOptions"
      @selected-option="checkAnswer"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';

const { gameStatus, pokemonOptions, randomPokemon, isLoading, checkAnswer } = usePokemonGame();
</script>
