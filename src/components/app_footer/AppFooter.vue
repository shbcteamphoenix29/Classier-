<template>
  <div>
    <div class="w-full pt-10 h-96 white relative font-body">
      <div class="mt-10">
        <img
          src="../../assets/classier_logo.svg"
          class="absolute left-24 top- w-60 h-60"
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
