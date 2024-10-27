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
    error.value = 'Erro ao carregar o versículo. Por favor, tente novamente mais tarde.';
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped></style>
