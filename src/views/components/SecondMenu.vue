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
      <DishImageWrapper
          source="/images/dished-02.webp"
      />

      <MenuList
          table-heading="let's start here"
          table-subheading=""
          :table-data="firstMenu"
      />

      <DishImageWrapper
          source="/images/dishes-01.webp"
          class="top-margin"
      />


      <MenuList
          table-heading="let's move on"
          table-subheading=""
          :table-data="firstMenu"
      />

      <MenuList
          table-heading="TOTALLY UNNECESSARY Ad DANGER"
          table-subheading=""
          :table-data="firstMenu"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
