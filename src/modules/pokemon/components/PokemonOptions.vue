<template>
  <section class="mt-5">
    <ul>
      <li v-for="pokemon in options" :key="pokemon.id">{{ pokemon.name.toUpperCase() }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { type Pokemon } from '../interfaces';

interface Props {
  options: Pokemon[];
}

defineProps<Props>();
</script>

<style scoped>
li {
  @apply shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all;
  background-color: #19936e;
  color: white;
}
li:hover {
  background-color: #114b60;
}
</style>
