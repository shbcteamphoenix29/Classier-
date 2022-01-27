<template>
  <Fragment>
    <BannerSec />
    <div class="px-12 pt-5 flex space-x-8">
      <div class="category_filter_sidenav_container">
        <div class="h-12 text-left capitalize">category > {{ $route.name }}</div>
        <FilterSidenav class="w-full" />
      </div>
      <div class="category_main_content_container w-screen">
        <div class="h-12 flex items-center mb-4">
          <p class="font-bold text-4xl capitalize mr-9">{{ $route.name }}</p>
          <p>{{ productsByCategory ? productsByCategory.length : 0 }} Items</p>
          <div class="flex items-center ml-auto">
            <p class="text-[#1591AA]">Most recent</p>
            <ChevronDown :size="32" fillColor="#1591AA" />
          </div>
        </div>
        <div class="w-full">
          <SkeletonTheme :loading="!productsByCategory" class="grid grid-cols-3 gap-4">
            <StoreProduct
              v-for="product in productsByCategory"
              :key="product.id"
              :product="product"
              class="category_store_product w-full"
            />
          </SkeletonTheme>
        </div>
      </div>
    </div>
  </Fragment>
</template>
<script>
import { mapState } from 'vuex';
import { Fragment } from 'vue-fragment';
import { SkeletonTheme } from 'vue-loading-skeleton';
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
import BannerSec from '@/components/BannerSec.vue';
import StoreProduct from '@/components/store_product/StoreProduct.vue';
import FilterSidenav from '@/components/filter_sidenav/FilterSidenav.vue';

export default {
  name: 'Category',
  computed: mapState({
    productsByCategory: (state) => state.products.storeCategoryProducts,
  }),
  components: {
    Fragment,
    SkeletonTheme,
    ChevronDown,
    BannerSec,
    StoreProduct,
    FilterSidenav,
  },
  watch: {
    $route(to) {
      const categoryName = to.name || '';
      this.$store.dispatch('products/getProductsByCategory', { categoryName });
    },
  },
  created() {
    const categoryName = this.$route.name || '';
    this.$store.dispatch('products/getProductsByCategory', { categoryName });
  },
};
</script>
<style scoped>
.category_filter_sidenav_container {
  flex-basis: 35%;
}
.category_main_content_container {
  flex-basis: 95%;
}
.category_store_product img {
  height: 20%;
}
</style>
