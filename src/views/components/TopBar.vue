<script setup>
import {ref, watch} from 'vue'
import MenuOverlay from "@/components/core/MenuOverlay.vue";

const showMenuOverlay = ref(false);

watch(() => showMenuOverlay.value, (val) => {
  if (val) document.body.classList.add('overflow-hidden');
  else document.body.classList.remove('overflow-hidden');
})
</script>

<template>
  <div class="top-bar-section">
    <div class="top-bar">
      <div
          data-w-id="924ceec3-22c8-4836-ef4b-9281ff504253"
          @click="showMenuOverlay = true"
          class="hamburger-pc"
      >
        <div class="hamburger-btn">
          <div class="hamburger-bar"></div>
          <div data-w-id="e3dcd376-b009-6fd2-7146-503bc15f8ec2" class="hamburger-bar middle"></div>
          <div class="hamburger-bar"></div>
        </div>
        <div class="hamburger-label">
          <p class="hamburger-label-text">More</p>
        </div>
      </div>
      <div class="logo">
        <div class="logo-wrapper"><img src="/images/logo-anna.svg" loading="lazy" alt="" class="image"></div>
      </div>
      <p class="cta">Order a table</p>
    </div>
  </div>

  <MenuOverlay
      v-if="showMenuOverlay"
      @hideMenuOverlay="showMenuOverlay = false"
  />
</template>

<style scoped>


</style>
