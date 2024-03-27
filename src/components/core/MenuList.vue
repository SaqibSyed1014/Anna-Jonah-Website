<script setup>
defineProps({
  tableHeading: String,
  tableSubheading: String,
  tableData: Array
})
</script>

<template>
  <div>
    <div class="headings">
      <h2 class="section-heading left">
        {{ tableHeading }}
      </h2>
      <h3 class="section-subheading">
        {{ tableSubheading }}
      </h3>
    </div>
    <div class="menu-table">
        <div class="menu-table-row" v-for="row in tableData.length / 2" :key="row">
          <div class="menu-table-cell" v-for="(data, index) in tableData.slice(row * 2 - 2, row * 2)" :key="index">
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
.section-subheading {
  margin-top: 10px;
  margin-bottom: 0;
  font-family: Canopee, sans-serif;
  font-size: 31px;
  font-weight: 400;
}

.menu-table {
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 30px;
  padding-bottom: 10px;
  display: flex;
}

.menu-table-row {
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 13px;
  display: flex;
}

.menu-table-cell {
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  flex-flow: column;
  flex: none;
  justify-content: flex-start;
  align-items: flex-start;
  width: 46%;
  display: flex;
}

.menu-table-item {
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  font-size: var(--section-text-lg);
  flex: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
}

.item-line {
  background-color: rgba(0, 0, 0, .1);
  width: 100%;
  height: 1px;
}

.cell-info {
  font-size: var(--section-subtext-lg);
}
</style>
