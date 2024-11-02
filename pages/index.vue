<template>
    <div class="bg-[#200b34] min-h-screen mt-12 relative">
        <Header />
        <main>
            <Banner />
            <Versiculos />
            <Sessoes id="html" title="HTML" :data="dataJson.html" aria-describedby="html-section-description"/>
            <div id="html-section-description" class="sr-only">
                Seção de HTML, contendo conteúdos detalhados sobre a estrutura da web.
            </div>
            <Sessoes id="css" title="CSS" :data="dataJson.css" aria-describedby="css-section-description"/>
            <div id="css-section-description" class="sr-only">
                Seção de CSS, contendo conteúdos detalhados sobre a estrutura da web.
            </div>
            <Sessoes id="js" title="JavaScript" :data="dataJson.js" aria-describedby="js-section-description"/>
            <div id="js-section-description" class="sr-only">
                Seção de JavaScript, contendo conteúdos detalhados sobre a estrutura da web.
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import dataJson from "../data.json";

</script>

<style scoped>

</style>