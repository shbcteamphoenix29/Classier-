<template>
  <div>
    <div class="border-t">
      <BannerSec />
      <div class="w-full mt-5">
        <img src="../assets/formal-outfit.svg" class="w-full object-cover" alt="" />
      </div>
    </div>
    <div class="mt-10 px-12">
      <h1 class="item_categories font-bold font-body">Hot Deals</h1>
      <div>
        <SkeletonTheme
          :loading="!hotDealsProducts"
          class="hot_deals_section_scrolling_wrapper space-x-6"
        >
          <StoreProduct
            v-for="product in hotDealsProducts"
            :key="product.id"
            :product="product"
            :isLoading="isLoadingHotDeals"
          />
        </SkeletonTheme>
      </div>
    </div>
    <div class="h-32"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SkeletonTheme } from 'vue-loading-skeleton';
import BannerSec from '@/components/BannerSec.vue';
import StoreProduct from '@/components/store_product/StoreProduct.vue';

export default {
  name: 'Home',
  computed: mapState({
    hotDealsProducts: (state) => state.products.storeHotDealsProducts,
  }),
  components: {
    BannerSec,
    StoreProduct,
    SkeletonTheme,
  },
  created() {
    this.$store.dispatch('products/getHotDealsProducts');
  },
};

// @ is an alias to /src
</script>

<style scoped>
.item_categories {
  margin-left: -82rem;
}
.hot_deals_section_scrolling_wrapper {
  overflow-x: auto;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
}

.hot_deals_section_scrolling_wrapper::-webkit-scrollbar {
  display: none;
}
.hot_deals_section_scrolling_wrapper > div {
  flex: 0 0 auto;
  /* padding-left: 1.56rem; */
}
</style>
