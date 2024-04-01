<script setup>
defineProps({
  tableHeading: String,
  tableSubheading: String,
  tableData: Array
})
</script>

<template>
  <div>
    <div data-aos="fade-up-right" class="headings">
      <h2 class="section-heading left">
        {{ tableHeading }}
      </h2>
      <h3 class="section-subheading">
        {{ tableSubheading }}
      </h3>
    </div>
    <div class="menu-table">
        <div class="menu-table-row" v-for="row in tableData.length / 2" :key="row">
          <div class="menu-table-cell" data-aos="fade-up" v-for="(data, index) in tableData.slice(row * 2 - 2, row * 2)" :key="index">
            <div class="menu-table-item">
              <div class="text-block">{{ data.name }}</div>
              <div class="item-line"></div>
              <div class="text-block-2">{{ data.type }}</div>
            </div>
            <div class="cell-info">{{ data.extras }}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
