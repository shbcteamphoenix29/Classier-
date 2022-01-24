<template>
  <div class="w-64 flex flex-col">
    <Skeleton height="250px" class="relative">
      <img
        :src="product.productImage"
        :alt="product.productTitle"
        class="w-64 h-64 rounded-md"
        :title="product.productTitle"
      />
      <HeartIcon title="add to wishlist" class="cursor-pointer absolute top-3 right-3" />
    </Skeleton>
    <Skeleton>
      <div class="flex justify-between">
        <p class="w-1/2 truncate">{{ product.productTitle }}</p>
        <p>${{ product.productPrice }}</p>
      </div>
    </Skeleton>
  </div>
</template>
<script>
import { Skeleton } from 'vue-loading-skeleton';
import HeartIcon from 'vue-material-design-icons/Heart.vue';

export default {
  name: 'StoreProduct',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {
    Skeleton,
    HeartIcon,
  },
};
</script>
