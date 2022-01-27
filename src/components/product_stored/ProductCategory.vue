<template>
  <div class="w-64 flex flex-col">
    <Skeleton height="250px" class="relative bg-secondary">
      <img
        class="w-64 h-64 rounded-3xl border-4"
        :src="productType.productImage"
        :alt="productType.productTitle"
        :title="productType.productTitle"
      />
    </Skeleton>
  </div>
</template>

<script>
import { Skeleton } from 'vue-loading-skeleton';

export default {
  props: {
    productType: {
      type: Object,
      required: true,
    },
    components: {
      Skeleton,
    },
  },
};
</script>

<style lang="scss" scoped></style>
