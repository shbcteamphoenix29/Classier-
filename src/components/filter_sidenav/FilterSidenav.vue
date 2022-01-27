<template>
  <div class="w-72">
    <FilterSidenavItem class="bg-gray-100 mb-5" itemName="filters" isParent />
    <div>
      <FilterSidenavItem
        class="border border-gray-400 border-opacity-20"
        :key="filterSidenavItemData.name"
        v-for="filterSidenavItemData in FilterSidenavData"
        :itemName="filterSidenavItemData.name"
      />
    </div>
  </div>
</template>
<script>
import FilterSidenavItem from './components/filter_sidenav_item/FilterSidenavItem.vue';
import FilterSidenavData from './filter-sidenav.data';

export default {
  name: 'FilterSidenav',
  components: {
    FilterSidenavItem,
  },
  data() {
    return {
      FilterSidenavData,
    };
  },
};
</script>
