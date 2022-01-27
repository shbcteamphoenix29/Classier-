<template>
  <div>
    <div class="border-t">
      <BannerSec />
      <div class="w-full mt-5">
        <img src="../assets/formal-outfit.svg" class="w-full object-cover" alt="" />
      </div>
    </div>
    <div class="mt-10 px-12">
      <div class="flex justify-between">
        <h1 class="item_categories font-bold font-body text-3xl mb-5 ml-15">Hot Deals</h1>
        <div class="flex cursor-pointer hover:text-red-500">
          See all
          <ArrowRight />
        </div>
      </div>

      <div>
        <SkeletonTheme
          :loading="!hotDealsProducts"
          class="hot_deals_section_scrolling_wrapper space-x-6"
        >
          <StoreProduct v-for="product in hotDealsProducts" :key="product.id" :product="product" />
        </SkeletonTheme>
        <div class="flex justify-start mt-10 ml-3 mb-0 font-body text-2xl font-bold">
          Categories
        </div>
        <SkeletonTheme class="categories_section_scrolling_wrapper space-x-6">
          <ProductCategory
            v-for="product in getProductCategories"
            :key="product.id"
            :productType="product"
            :isLoading="isLoadingProduct"
          />
        </SkeletonTheme>
      </div>
    </div>
    <div class="three_steps h-96 object-cover bg-primary relative">
      <h1 class="font-body text-6xl text-white absolute ml-52 mt-40 align-baseline font-bold">
        Shop in 3 <br />
      </h1>
      <span
        class="pl-2 font-body text-white absolute text-6xl mt-56 flex justify-start ml-52 font-bold"
        >Easy Steps
      </span>
    </div>
    <div class="h-124 w-full flex space-x-16 space-y-24">
      <img src="../assets/about_us_photo.svg" class="h-120 w-120 mt-10 ml-36" alt="" />
      <div class="flex flex-col" align="center">
        <h1 class="font-body text-4xl font-bold -ml-96">About Us</h1>

        <p class="font-new font-bold mt-10" align="justify">
          CLASSIER is a Market Place for men and women of all age bracket.<br /><br />
          We essentially provide a platform for producers and marketers of Fashion wears,<br /><br />
          accessories and services to engage with both prospective buyers of their wares<br /><br />
          and individuals interested in the services that they offer. Classier also ensures<br /><br />
          and assures top-notch delivery of services and seamless transactions with<br /><br />
          respect to payments as well as swift customer service response. Our topmost<br /><br />
          priority is the uttermost satisfaction of our end-users and everyone else who<br />
          <br />engages with the platform.
        </p>
      </div>
    </div>
    <div class="bg-primary w-full h-96 mt-24 flex">
      <div class="flex justify-start">
        <span class="ml-28 mt-20 mb-0 font-new text-white text-sm">SUBSCRIBE</span>
        <span class="mr-20 -ml-20 mt-28 mb-15 space-x-1 font-body text-white font-bold text-5xl"
          >Receive exclusive</span
        >
        <span class="text_align font-body text-white font-bold mt-40 -ml-80 mr-56 text-5xl"
          >Offers & Updates</span
        >
      </div>
      <input
        type="text"
        class="w-1/3 p-2 h-16 bg-primary px-5 font-new border-white border-2 rounded-lg mt-36 -ml-10 text-white placeholder-white focus:placeholder-border-white"
        placeholder="Email Address"
      />

      <div
        class="h-16 w-40 bg-white ml-7 mt-36 rounded-lg text-primary font-body font-bold space-x-5 pt-5 cursor-pointer hover:text-white hover:bg-blue-600 transition ease-out duration-1000 border-1 hover:border-grey-500"
      >
        Subscribe
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { SkeletonTheme } from 'vue-loading-skeleton';
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue';
import BannerSec from '@/components/BannerSec.vue';
import StoreProduct from '@/components/store_product/StoreProduct.vue';
import ProductCategory from '@/components/product_stored/ProductCategory.vue';
import AppFooter from '@/components/app_footer/AppFooter.vue';

export default {
  name: 'Home',
  data() {
    return {
      categories: ['Tops', 'Bottoms', 'Shoes', 'Skirts', 'Dresses', 'Jumpsuits'],
      services: ['Order status', 'Contact', 'Shipping', 'Return policy & Exchanges', 'FAQs'],
      aboutClassier: ['About', 'Sell'],
      socialMediaIcons: [{ name: 'facebook' }],
    };
  },
  computed: mapState({
    hotDealsProducts: (state) => state.products.storeHotDealsProducts,

    getProductCategories: (state) => state.products.storeProductCategories,
  }),
  components: {
    BannerSec,
    StoreProduct,
    ProductCategory,
    ArrowRight,
    AppFooter,
    SkeletonTheme,
  },
  created() {
    this.$store.dispatch('products/getHotDealsProducts');

    this.$store.dispatch('products/getProductCategories');
  },
};

// @ is an alias to /src
</script>

<style scoped>
.item_categories {
  margin-left: 14px;
  margin-bottom: 15px;
}

.footer_categories {
  margin-left: -380px;
  margin-top: 5px;
}

.footer_service {
  margin-left: 50px;
  margin-top: -198px;
}

.sm_handles {
  margin-left: 850px;
  margin-top: -70px;
}

.about_classier {
  margin-left: 450px;
  margin-top: -243px;
}

.three_steps {
  height: 550px;
}

input::placeholder {
}

.text_align {
  margin-left: -490px;
  /* margin-top: 10px; */
}
.categories_section_scrolling_wrapper {
  overflow-x: auto;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 15px;
  margin-top: 20px;
  margin-bottom: 1rem;
  height: 300px;
  width: 2000px;
  /* border: solid 2px #eee; */
  box-shadow: black;
  /* border-radius: 5px; */
  /* background-color: #e5e5e5; */
  -webkit-overflow-scrolling: touch;
}

.hot_deals_section_scrolling_wrapper {
  overflow-x: auto;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 15px;
  margin-bottom: 1rem;
  height: 300px;
  width: 2000px;
  border: solid 2px #eee;
  box-shadow: black;
  border-radius: 5px;
  background-color: #e5e5e5;
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
