<template>
  <div>
    <div class="border-t">
      <BannerSec />
      <div class="w-full mt-5">
        <img src="../assets/formal-outfit.svg" class="w-full object-cover" alt="" />
      </div>
    </div>
    <div class="mt-10">
      <h1 class="item_categories font-bold font-body">Hot Deals</h1>
    </div>
  </div>
</template>

<script>
import BannerSec from '@/components/app_header/BannerSec.vue';

export default {
  name: 'Home',
  components: {
    BannerSec,
  },
};

// @ is an alias to /src
</script>

<style scoped>
.item_categories {
  margin-left: -82rem;
}
</style>
