<script setup>
defineEmits(['hideMenuOverlay'])
</script>

<template>
  <div class="menu-drawer">
    <div class="close-btn">
      <div @click="$emit('hideMenuOverlay')" class="toggle-close">
        <div class="cross-icon">
          <div class="cross-bar left"></div>
          <div class="cross-bar right"></div>
        </div>
        <div class="close-label">
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
.cross-icon{
  transition: .3s ease-in-out all;
}
.close-label{
  color: var(--secondary);
  transition: .3s ease-in-out all;
}
.toggle-close:hover .cross-icon{
  transform: rotate(90deg);
}
.toggle-close:hover .close-label{
  color: var(--white);
}
</style>
