<template>
  <section
    v-if="isLoading || !randomPokemon.id"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Please wait</h1>
    <h3 class="animate-pulse">Loading Pokémon...</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-5xl m-10 animate-pulse">Who's that Pokémon?!</h1>
    <div class="h-20">
      <button
        v-if="gameStatus !== GameStatus.Playing"
        class="shadow-md rounded-md p-3 cursor-pointer w-35 text-center transition-all capitalize bg-red-500 text-white hover:bg-red-600"
        @click="getRound(4)"
      >
        Play Again!
      </button>
    </div>

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

const { checkAnswer, gameStatus, getRound, isLoading, pokemonOptions, randomPokemon } =
  usePokemonGame();
</script>
