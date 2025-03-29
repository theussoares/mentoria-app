<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-gray-800 p-4 text-xl font-bold text-center">
      Tv - Free - {{ channel?.name }}
    </header>

    <main class="container mx-auto mt-6 flex flex-col lg:flex-row gap-6 p-4">
      <div class="w-full">
        <div class="bg-black min-h-[400px] relative">
          <iframe
            id="livePlayer"
            :src="channel?.src"
            allow="encrypted-media"
            allowfullscreen="true"
            frameborder="0"
            width="100%"
            height="400"
            class="focus:outline-none"
          ></iframe>
        </div>
        <h1 class="text-2xl font-semibold mt-4">
            {{ channel?.name }} - {{ channel?.description }}
        </h1>
        <!-- <p class="text-gray-400 mt-2">

        </p> -->
      </div>

      <!-- <aside class="lg:w-1/4 w-full bg-gray-800 p-4 rounded-lg">
        <h2 class="text-xl text-yellow-400 font-semibold">Assista agora ao vivo</h2>
        <p class="text-white font-bold text-lg">Por apenas <span class="px-2 py-1 rounded-xl bg-orange-500 text-sm text-white font-semibold">R$ 5,00</span></p>
         <ul class="mt-4 space-y-2">
          <li class="p-2 bg-gray-700 rounded">Vídeo 1</li>
          <li class="p-2 bg-gray-700 rounded">Vídeo 2</li>
          <li class="p-2 bg-gray-700 rounded">Vídeo 3</li>
        </ul> 
      </aside> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { useStoreChannel } from "~/store/useStoreChannel";

interface Channel {
    id: number;
    src: string;
    name: string;
    description: string;
}

const storeChannel = useStoreChannel();
const channel = computed<Channel>(() => storeChannel.getSelectedChannel);

onMounted(() => {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
    } else {
    }
  });

  window.addEventListener("blur", () => {
  });

  window.addEventListener("focus", () => {
  });
enterFullscreen();
//   const element = document.querySelector('[aria-label="Tela Cheia"]');
//   console.log(element);
});

const enterFullscreen = () => {
  const iframe = document.getElementById('livePlayer') as any;
  if (iframe) {
    if (iframe?.requestFullscreen) {
      iframe?.requestFullscreen();
    } else if (iframe?.mozRequestFullScreen) { // Para Firefox
      iframe?.mozRequestFullScreen();
    } else if (iframe?.webkitRequestFullscreen) { // Para Chrome, Safari
      iframe?.webkitRequestFullscreen();
    } else if (iframe?.msRequestFullscreen) { // Para IE/Edge
      iframe?.msRequestFullscreen();
    }
  } else {
  }
};


onUnmounted(() => {
  document.removeEventListener("visibilitychange", () => {});
  window.removeEventListener("blur", () => {});
  window.removeEventListener("focus", () => {});
});

window.addEventListener("beforeunload", (event) => {
  event.preventDefault();
});
</script>

<style scoped></style>
