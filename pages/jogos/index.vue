<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-gray-800 p-4 text-xl font-bold text-center">
      SeuJogo - Ao Vivo
    </header>

    <main class="container mx-auto mt-6 flex flex-col lg:flex-row gap-6 p-4">
      <div class="lg:w-3/4 w-full">
        <div class="bg-black min-h-[400px] relative">
          <iframe
            id="livePlayer"
            src="https://reidoscanais.cc/embed/?id=globosp-globosaopaulo"
            allow="encrypted-media"
            allowfullscreen="true"
            frameborder="0"
            width="100%"
            height="400"
            class="focus:outline-none"
          ></iframe>
        </div>
        <h1 class="text-2xl font-semibold mt-4">
          BRASIL X COLÔMBIA | TRANSMISSÃO AO VIVO ELIMINATÓRIAS DA COPA 2026 - DIRETO DO MANÉ GARRINCHA
        </h1>
        <p class="text-gray-400 mt-2">
          O jogo entre Brasil e Colômbia acontece nesta quinta-feira (20), às 21h45 (de Brasília), no Estádio Mané Garrincha, pelas Eliminatórias Sul-Americanas da Copa do Mundo de 2026.
        </p>
      </div>

      <aside class="lg:w-1/4 w-full bg-gray-800 p-4 rounded-lg">
        <h2 class="text-xl text-yellow-400 font-semibold">Assista agora ao vivo</h2>
        <p class="text-white font-bold text-lg">Por apenas <span class="px-2 py-1 rounded-xl bg-orange-500 text-sm text-white font-semibold">R$ 5,00</span></p>
        <!-- <ul class="mt-4 space-y-2">
          <li class="p-2 bg-gray-700 rounded">Vídeo 1</li>
          <li class="p-2 bg-gray-700 rounded">Vídeo 2</li>
          <li class="p-2 bg-gray-700 rounded">Vídeo 3</li>
        </ul> -->
      </aside>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

const blockPopups = () => {
  window.open = function () {
    console.log("Tentativa de abrir uma nova aba bloqueada.");
    return null;
  };
};

const keepFocusOnIframe = () => {
  const iframe = document.getElementById("livePlayer") as HTMLIFrameElement;

  if (iframe) {
    setInterval(() => {
      if (document.activeElement !== iframe) {
        iframe.focus();
        console.log("Foco restaurado para o player.");
      }
    }, 3000);
  }
};

const preventTabChanges = (event: Event) => {
  event.preventDefault();
  console.log("Tentativa de sair da aba bloqueada.");
};

onMounted(() => {
  blockPopups();
  keepFocusOnIframe();

  // Bloqueia atalhos comuns usados para trocar de aba
  document.addEventListener("keydown", (event) => {
    if (["Tab", "Alt", "Control", "Meta"].includes(event.key)) {
      event.preventDefault();
    }
  });

  // Bloqueia tentativas de sair da aba
  document.addEventListener("visibilitychange", preventTabChanges);
});

onUnmounted(() => {
  document.removeEventListener("visibilitychange", preventTabChanges);
});
</script>

<style scoped></style>
