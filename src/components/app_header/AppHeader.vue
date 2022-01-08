<template>
  <nav class="flex items-center">
    <div class="header_left_section flex items-center">
      <div>
        <img src="../../assets/classier_logo.svg" alt="" />
      </div>
      <ul class="flex capitalize">
        <li>men</li>
        <li>kids</li>
        <li>women</li>
        <li>accessories</li>
      </ul>
    </div>
    <div class="header_right_section flex justify-end">
      <div class="header_search_container flex mr-12 space-x-1">
        <input type="text" class="w-full rounded-md bg border-0" placeholder="search item here" />
        <div class="header_search_icon_container flex items-center p-2">
          <SearchIcon className="header_search_icon" />
        </div>
      </div>
      <div class="flex items-center space-x-6">
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
.header_left_section,
.header_right_section {
  flex-basis: 50%;
}
.header_left_section > ul > li {
  padding-left: 2rem;
}
.header_search_container {
  flex-grow: 1;
  input {
    background-color: rgba(52, 183, 210, 0.34);
  }
  input::placeholder {
    color: #000;
    font-weight: 300;
    font-size: 0.875rem;
  }
  .header_search_icon_container {
    background-color: rgba(52, 183, 210, 0.58);
  }
}
</style>
