<template>
  <section class="mt-5 flex flex-col">
    <button
      v-for="{ name, id } in options"
      :class="[
        '',
        {
          correct: id === correctAnswer && blockSelection,
          incorrect: id !== correctAnswer && blockSelection,
        },
      ]"
      :disabled="blockSelection"
      :key="id"
      @click="$emit('selectedOption', id)"
    >
      {{ name }}
    </button>
  </section>
</template>

<script setup lang="ts">
import { type Pokemon } from '../interfaces';

interface Props {
  blockSelection: boolean;
  correctAnswer: number;
  options: Pokemon[];
}

defineProps<Props>();

defineEmits<{
  selectedOption: [id: number];
}>();
</script>

<style scoped>
button {
  @apply shadow-md rounded-lg p-3 m-2 cursor-pointer w-40 text-center transition-all capitalize;
  background-color: #19936e;
  color: white;
}
button:hover {
  background-color: #114b60;
}
button:disabled {
  @apply shadow-none;
  background-color: #0c3544;
}

.correct {
  @apply bg-blue-500;
}

.incorrect {
  @apply bg-red-100 opacity-70 text-black;
}
</style>
