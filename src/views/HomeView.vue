<script setup>
import Hero from "@/views/components/Hero.vue";
import TopBar from "@/views/components/TopBar.vue";
import Menu from "@/views/components/Menu.vue";
import SecondMenu from "@/views/components/SecondMenu.vue";
import AppetizerMenu from "@/views/components/AppetizerMenu.vue";
import FeaturedDish from "@/views/components/FeaturedDish.vue";

import { onMounted } from "vue";

onMounted(() => {
  Webflow.require('ix2').init();
})
</script>

<template>
  <div>
    <TopBar />
    <Hero />
    <FeaturedDish />
    <Menu />
    <AppetizerMenu />
    <SecondMenu />
  </div>
</template>

<style scoped>

</style>
