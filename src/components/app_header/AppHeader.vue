<template>
  <nav class="flex items-center">
    <div class="header_left_section flex items-center">
      <div>
        <img src="../../assets/classier_logo.svg" class="ml-24 mr-5" alt="" />
      </div>
      <div class=""></div>
      <ul class="header_items flex capitalize ml-15">
        <li class="ml-10">men</li>
        <li>kids</li>
        <li>women</li>
        <li>accessories</li>
        <li>Category</li>
        <li class="-mr-36">Category</li>
      </ul>
    </div>
    <div class="header_right_section flex">
      <div class="header_icons flex items-center space-x-6 -ml-5">
        <AccountIcon title="user profile" fillColor="#34B7D2" class="cursor-pointer" />
        <HeartIcon title="add to wishlist" fillColor="#34B7D2" class="cursor-pointer" />
        <CartIcon title="view cart" fillColor="#34B7D2" class="cursor-pointer" />
      </div>
    </div>
  </nav>
</template>
<script>
import SearchIcon from 'vue-material-design-icons/Magnify.vue';
import AccountIcon from 'vue-material-design-icons/AccountCircleOutline.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';
import CartIcon from 'vue-material-design-icons/CartOutline.vue';

export default {
  name: 'AppHeader',
  components: {
    SearchIcon,
    AccountIcon,
    HeartIcon,
    CartIcon,
  },
};
</script>
<style lang="scss" scoped>
.header_items {
  margin-left: 0px;
}
.header_icons {
  margin-left: 500px;
}
.header_left_section,
.header_right_section {
  flex-basis: 50%;
}
.header_left_section > ul > li {
  padding-left: 2rem;
}
</style>
