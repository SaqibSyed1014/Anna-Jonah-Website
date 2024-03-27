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
.menu-dishes {
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
}

.dishes-image-wrapper {
  text-align: center;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}


.menu-dishes.top-margin {
  margin-top: 65px;
}
</style>
