<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <header class="bg-gray-800 p-4 text-xl font-bold text-center">
      Tv - Free
    </header>

    <main class="container mx-auto mt-4 flex flex-col">
      <section aria-describedby="escolher-categoria">
        <ul
          aria-label="navegação-categoria"
          class="w-full flex gap-2 justify-center md:justify-start"
        >
          <li
            aria-label="categoria-filmes"
            class="bg-zinc-800 py-1 px-2 flex items-center rounded-lg text-xs md:text-xl"
          >
            Filmes
          </li>
          <li
            aria-label="categoria-canais-abertos"
            class="bg-zinc-800 py-1 px-2 flex items-center rounded-lg text-xs md:text-xl"
          >
            Canais abertos
          </li>
          <li
            aria-label="categoria-jogos-e-sports"
            class="bg-zinc-800 py-1 px-2 flex items-center rounded-lg text-xs md:text-xl"
          >
            Jogos e sports
          </li>
        </ul>
      </section>

      <section>
        <h1 class="text-2xl font-semibold mt-4 pl-3">Canais abertos</h1>
        <ul
          aria-label="canais-abertos"
          class="flex flex-col items-center md:items-start px-3 gap-4 mt-4"
        >
          <li
            v-for="canal in canais"
            aria-label="canal-globo-sp"
            class="cursor-pointer w-[280px] h-[280px] bg-black p-4 rounded-lg"
            @click="selectChannel(canal)"
          >
            <div class="w-[95%] mx-auto h-3/5 bg-zinc-800 rounded-lg"></div>
            <h2 class="text-xl font-semibold mt-4">{{ canal.name }}</h2>
            <p class="text-gray-400 mt-2">{{ canal.description }}</p>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useStoreChannel } from "~/store/useStoreChannel";

interface Canal {
  id: number;
  src: string;
  name: string;
  description: string;
}

const storeChannel = useStoreChannel();
const router = useRouter();

const canais: Canal[] = [
  {
    id: 1,
    src: "https://reidoscanais.cc/embed/?id=globosp-globosaopaulo",
    name: "Globo SP",
    description: "Assista ao vivo a programação da Globo São Paulo.",
  },
];

const selectChannel = (canal: Canal) => {
  storeChannel.setSelectedChannel(canal);  
  router.push(`/jogos/${canal.id}`);
};
</script>

<style scoped></style>
