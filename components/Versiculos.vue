<template>
  <div class="m-4 p-4 flex justify-center items-center bg-[#694065] text-white rounded">
    <div v-if="loading">Carregando versículo...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      {{ versiculo }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { $axios } = useNuxtApp();

const versiculo = ref<string | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await $axios.get('/verses/nvi/random');
    versiculo.value = response.data.verse;
  } catch (err) {
    error.value = `
    João 3:16-18 — Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.
    Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele. 
    Quem nele crê não é condenado; mas o que não crê já está condenado, porque não crê no nome do unigênito Filho de Deus. 
`
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
