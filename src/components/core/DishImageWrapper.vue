<script setup>
defineProps({
  source: String
})
</script>

<template>
  <div class="menu-dishes">
    <div class="dishes-image-wrapper">
      <img
          :src="source"
          loading="eager"
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 67vw, (max-width: 1439px) 77vw, 1024.006103515625px"
          alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
