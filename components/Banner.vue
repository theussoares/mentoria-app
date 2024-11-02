<template>
  <div>
    <img :src="banner" alt="Banner da mentoria mostrando o tema do curso de Frontend">
    <div class="sr-only">
      Este banner destaca o curso de mentoria para desenvolvedores Frontend, oferecendo orientação personalizada e conteúdo exclusivo.
    </div>
  </div>
</template>

<script setup lang="ts">
import banner from "../public/banner.jpeg";
</script>

<style scoped>

</style>