<script setup>

</script>

<template>
  <div class="mid-section">
    <slot />
  </div>
</template>

<style scoped>
.mid-section {
  background-color: var(--mid-section);
  flex-flow: column;
  align-items: center;
  padding: 80px 40px;
  display: flex;
  gap: 21px;
}
</style>
