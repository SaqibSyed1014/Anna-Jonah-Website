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
          <div style="width:100%" class="hamburger-bar"></div>
          <div data-w-id="e3dcd376-b009-6fd2-7146-503bc15f8ec2" style="width:50%" class="hamburger-bar middle"></div>
          <div style="width:100%" class="hamburger-bar"></div>
        </div>
        <div style="color:rgb(238,43,74)" class="hamburger-label">
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
.top-bar-section {
  height: 88px;
  position: relative;
}

.hamburger-pc {
  z-index: 5;
  grid-column-gap: 18px;
  grid-row-gap: 18px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 30px;
  bottom: auto;
  left: 30px;
  right: auto;
}

.hamburger-btn {
  flex-flow: column;
  justify-content: space-between;
  width: 42px;
  height: 26px;
  display: flex;
  position: static;
  top: 30px;
  bottom: auto;
  left: 30px;
  right: auto;
}

.hamburger-bar {
  background-color: var(--primary);
  flex: none;
  height: 2px;
}

.hamburger-bar.middle {
  cursor: auto;
  width: 50%;
}

.hamburger-label {
  flex: none;
}

.hamburger-label-text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 700;
}

.logo {
  justify-content: center;
  width: 100%;
  display: flex;
  position: absolute;
  top: 10px;
}

.logo-wrapper {
  flex: none;
  width: 129px;
  height: 68px;
}


.cta {
  display: none;
}
</style>
