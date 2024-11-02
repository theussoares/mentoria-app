<template>
  <div class="px-4 flex flex-col gap-10 pb-10">
    <header>
      <h1 class="text-white font-semibold text-[24px]">{{ props.title }}</h1>
    </header>

    <section aria-labelledby="conteudos">
      <h2 id="conteudos" class="text-white font-semibold text-[20px]">
        Conteúdos:
      </h2>
      <nav aria-label="Lista de conteúdos">
        <ul class="flex gap-[10px] overflow-x-auto">
          <li
            v-for="conteudo in data.conteudos"
            :key="conteudo.id"
            class="bg-white flex flex-col items-center justify-between min-w-[140px] max-w-[140px] h-[150px] rounded p-2 gap-2"
          >
            <a :href="conteudo.href" class="cursor-pointer" aria-label="Ir para {{ conteudo.nome }}">
              <svg
                width="60"
                height="60"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0.5 1L0.5 12" stroke="black" stroke-linecap="round" />
                <path d="M0.5 1L13.1923 6.53846" stroke="black" />
                <path
                  d="M0.848096 11.2917L0.388251 11.488L0.780895 12.4077L1.24074 12.2114L0.848096 11.2917ZM13.4226 7.01057C13.6766 6.90215 13.7946 6.60837 13.6861 6.35441C13.5777 6.10044 13.2839 5.98246 13.03 6.09088L13.4226 7.01057ZM1.24074 12.2114L13.4226 7.01057L13.03 6.09088L0.848096 11.2917L1.24074 12.2114Z"
                  fill="black"
                />
              </svg>
            </a>
            <h3 class="text-black font-semibold text-[12px]">
              {{ conteudo.nome }}
            </h3>
          </li>
        </ul>
      </nav>
    </section>

    <section aria-labelledby="videos">
      <h2 id="videos" class="text-white font-semibold text-[20px]">
        Vídeos:
      </h2>
      <nav aria-label="Lista de vídeos">
        <ul class="flex gap-[10px] overflow-x-auto">
          <li v-for="video in data.videos" :key="video.id" class="bg-white flex flex-col w-[140px] h-[200px] rounded gap-2">
            <iframe
              width="140"
              height="160"
              style="border-top-right-radius: 4px;border-top-left-radius: 4px;"
              :src="video.href"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div class="flex gap-1 px-2 justify-between items-center">
              <h3 class="text-black font-semibold text-[10px]">
                {{ video.nome }}
              </h3>
              <a :href="video.href" class="cursor-pointer" aria-label="Ir para vídeo {{ video.nome }}">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M0.5 1L0.5 12" stroke="black" stroke-linecap="round" />
                  <path d="M0.5 1L13.1923 6.53846" stroke="black" />
                  <path
                    d="M0.848096 11.2917L0.388251 11.488L0.780895 12.4077L1.24074 12.2114L0.848096 11.2917ZM13.4226 7.01057C13.6766 6.90215 13.7946 6.60837 13.6861 6.35441C13.5777 6.10044 13.2839 5.98246 13.03 6.09088L13.4226 7.01057ZM1.24074 12.2114L13.4226 7.01057L13.03 6.09088L0.848096 11.2917L1.24074 12.2114Z"
                    fill="black"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </section>

    <section aria-labelledby="desafios">
      <h2 id="desafios" class="text-white font-semibold text-[20px]">
        Desafios:
      </h2>
      <nav aria-label="Lista de desafios">
        <ul class="flex w-full gap-[10px] overflow-x-auto">
          <li
            v-for="desafio in data.desafios"
            :key="desafio.id"
            class="bg-white flex flex-col items-center justify-between min-w-[140px] max-w-[140px] h-[150px] rounded p-2 gap-2"
          >
            <a :href="desafio.href" class="cursor-pointer" aria-label="Ir para desafio {{ desafio.nome }}">
              <svg
                width="60"
                height="60"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0.5 1L0.5 12" stroke="black" stroke-linecap="round" />
                <path d="M0.5 1L13.1923 6.53846" stroke="black" />
                <path
                  d="M0.848096 11.2917L0.388251 11.488L0.780895 12.4077L1.24074 12.2114L0.848096 11.2917ZM13.4226 7.01057C13.6766 6.90215 13.7946 6.60837 13.6861 6.35441C13.5777 6.10044 13.2839 5.98246 13.03 6.09088L13.4226 7.01057ZM1.24074 12.2114L13.4226 7.01057L13.03 6.09088L0.848096 11.2917L1.24074 12.2114Z"
                  fill="black"
                />
              </svg>
            </a>
            <h3 class="text-black font-semibold text-[12px]">
              {{ desafio.nome }}
            </h3>
          </li>
        </ul>
      </nav>
    </section>

    <hr />
  </div>
</template>

<script setup lang="ts">
// Definindo a interface para cada item das seções
interface Sessao {
  id: number; // Supondo que o ID seja um número
  nome: string; // Nome do conteúdo
  href: string; // Link do conteúdo
}

// Definindo a interface para os dados gerais
interface Data {
  conteudos: Sessao[];
  videos: Sessao[];
  desafios: Sessao[];
}

interface Props {
  data: Data;
  title: string;
}

const props = defineProps<Props>()

// Tipando o dado importado como um objeto do tipo 'Data'
const data: Data = props.data as Data;
</script>

<style scoped></style>
