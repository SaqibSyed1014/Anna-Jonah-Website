<script setup>
defineEmits(['hideMenuOverlay'])
</script>

<template>
  <div class="menu-drawer">
    <div class="close-btn">
      <div data-w-id="0914403e-cd06-04b8-c2d8-d54e732cde41" @click="$emit('hideMenuOverlay')" class="toggle-close">
        <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.35, 1.35, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.35, 1.35, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.35, 1.35, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.35, 1.35, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)" class="cross-icon">
          <div class="cross-bar left"></div>
          <div class="cross-bar right"></div>
        </div>
        <div style="color:rgb(236,196,198)" class="close-label">
          <p class="close-btn-label">close</p>
        </div>
      </div>
    </div>
    <div class="drawer-body">
      <div class="menu-list">
        <ul role="list" class="list">
          <li class="drawer-item">Christmas</li>
          <li class="drawer-item">Brans</li>
          <li class="drawer-item">Evening</li>
          <li class="drawer-item">Noon</li>
          <li class="drawer-item">happy hour</li>
          <li class="drawer-item">BLUE ROOM GUIDE</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
