<template>
  <div>
    <div class="w-full pt-10 bg-white border-t h-96 relative">
      <div class="mt-10">
        <img
          src="../../assets/classier_logo.svg"
          class="absolute left-24 top-3 w-60 h-60"
          alt="app_company_logo"
        />
        <div>
          <h1 class="-ml-96 font-body font-bold">CATEGORIES</h1>
          <div
            class="footer_categories space-y-5 mt-5 hover:text-primary hover:font-bold cursor-pointer"
            v-for="category in categories"
            :key="category"
          >
            {{ category }}
          </div>
        </div>
        <div class="footer_service">
          <h1 class="font-bold">SERVICE</h1>
          <div
            class="space-y-5 mt-5 hover:text-primary hover:font-bold cursor-pointer"
            v-for="service in services"
            :key="service"
          >
            {{ service }}
          </div>
        </div>
        <div class="about_classier">
          <h1 class="font-bold">CLASSIER</h1>
          <div
            class="space-y-5 mt-0 cursor-pointer hover:text-primary hover:font-bold"
            v-for="about in aboutClassier"
            :key="about"
          >
            {{ about }}
          </div>
        </div>
        <div class="sm_handles">
          <h1 class="font-bold">FOLLOW US ON</h1>
          <!-- <div class="space-y-5 mt-0" v-for="socialMedia in socialMediaIcons" :key="socialMedia">
            {{ socialMedia }}
          </div> -->
        </div>
      </div>
      <!-- <div class="flex flex-col">
        <img src="../../assets/classier_logo.svg" class="absolute h-60 w-60 top-3 left-28" alt="" />
        <div v-for="category in categories" :key="category" class="-ml-96 mt-0 pt-2">
          {{ category }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['Tops', 'Bottoms', 'Shoes', 'Skirts', 'Dresses', 'Jumpsuits'],
      services: ['Order status', 'Contact', 'Shipping', 'Return policy & Exchanges', 'FAQs'],
      aboutClassier: ['About', 'Sell'],
      socialMediaIcons: [{ name: 'facebook' }],
    };
  },
};
</script>

<style scoped>
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
</style>
