<template>
  <nav class="flex items-center px-12">
    <div>
      <img src="../../assets/classier_logo.svg" alt="app company logo" />
    </div>
    <ul class="flex-grow flex justify-center space-x-6 capitalize font-body">
      <li class="hover:underline hover:text-primary cursor-pointer">men</li>
      <li class="hover:underline hover:text-primary cursor-pointer">Women</li>
      <li class="hover:underline hover:text-primary cursor-pointer">Kids</li>
      <li class="hover:underline hover:text-primary cursor-pointer">accessories</li>
      <li class="hover:underline hover:text-primary cursor-pointer">Contact Us</li>
    </ul>
    <div class="flex items-center space-x-8">
      <AccountIcon title="user profile" fillColor="#34B7D2" class="cursor-pointer" />
      <HeartIcon title="add to wishlist" fillColor="#34B7D2" class="cursor-pointer" />
      <CartIcon title="view cart" fillColor="#34B7D2" class="cursor-pointer" />
    </div>
  </nav>
</template>
<script>
import AccountIcon from 'vue-material-design-icons/AccountCircleOutline.vue';
import HeartIcon from 'vue-material-design-icons/Heart.vue';
import CartIcon from 'vue-material-design-icons/CartOutline.vue';

export default {
  name: 'AppHeader',
  components: {
    AccountIcon,
    HeartIcon,
    CartIcon,
  },
};
</script>
