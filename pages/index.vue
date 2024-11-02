<template>
    <div class="bg-[#200b34] min-h-screen mt-12 relative">
        <Header />
        <Banner />
        <Versiculos />
        <Sessoes id="html" title="HTML" :data="dataJson.html"/>
        <Sessoes id="css" title="CSS" :data="dataJson.css"/>
        <Sessoes id="js" title="JavaScript" :data="dataJson.js"/>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import dataJson from "../data.json";

</script>

<style scoped>

</style>