<script setup>
import MenuList from "@/components/core/MenuList.vue";
import DishImageWrapper from "@/components/core/DishImageWrapper.vue";

const firstMenu = [
  {
    name: 'Pumpkin soup',
    type: 'Included',
    extras: 'Sage butter, pumpkin seeds'
  },
  {
    name: 'Graf salmon',
    type: 'Included',
    extras: 'Fresh pasta, langoustine, nduja'
  },
  {
    name: 'Homemade macaroni',
    type: 'Included',
    extras: 'Pasta, langoustine'
  },
  {
    name: 'Biryani',
    type: 'Included',
    extras: 'Chicken, Aloo, Payaz'
  },
  {
    name: 'Qorma',
    type: 'Included',
    extras: 'Chicken, Aloo, Payaz'
  },
  {
    name: 'Peanut Butter',
    type: 'Included',
    extras: 'Macroni'
  }
]
</script>

<template>
  <div class="menu">
    <div class="menu-content">

      <MenuList
          table-heading="seven correct CHRISTMAS COLLECTION"
          table-subheading="13990 ISK"
          :table-data="firstMenu"
      />

      <DishImageWrapper
        source="/images/dished-03.webp"
      />

      <MenuList
          table-heading="five correct CHRISTMAS COLLECTION"
          table-subheading="9990 ISK"
          :table-data="firstMenu"
      />

    </div>
  </div>
</template>

<style scoped>

</style>
