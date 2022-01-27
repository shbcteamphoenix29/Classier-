<template>
  <div class="flex justify-between h-16 px-6 items-center">
    <div class="flex gap-4">
      <span class="block w-6 h-6 bg-gray-300"></span>
      <span class="capitalize" :class="{ 'font-semibold': isParent }">{{ itemName }}</span>
    </div>
    <ChevronDown :size="isParent ? 40 : 32" />
  </div>
</template>
<script>
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';

export default {
  name: 'FilterSidenavItem',
  props: {
    isParent: {
      type: Boolean,
      default: false,
    },
    itemName: {
      type: String,
      default: 'down',
    },
  },
  components: {
    ChevronDown,
  },
};
</script>
