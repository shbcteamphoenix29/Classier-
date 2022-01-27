<template>
  <div>
    <div class="flex bg-gray-50">
      <div class="text_field border_line rounded-lg mt-16 border-black-600">
        <h1 class="mb-5 text-5xl font-body text-primary font-bold mr-5">Account Login</h1>
        <h1 class="font-new font-extrabold pb-5">
          Login into your Classier Account for Faster Checkout!
        </h1>
        <div class="flex mt-10 mb-10">
          <label class="email_align mt-5 pt-0 default_style">Email address</label>
          <input
            type="text"
            v-model="email"
            placeholder="example@gmail.com"
            class="box_align_1 h-16 w-2/3 mt-0 mb-0 rounded-md border-2 placeholder:italic placeholder:font-new"
          />
          <span
            v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
            class="error_text_1 text-red-500 font-bold mt-14 text-xs"
            >Valid Email is required.</span
          >
        </div>
        <div class="flex my-10 -ml-1">
          <label class="password_align mt-10 pt-2 default_style">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="iLoveClassier"
            class="box_align_2 h-16 w-2/3 mt-0 mb-0 -ml-16 rounded-md border-2"
          />
          <p
            class="forgot_password mt-14 default_style hover:text-primary cursor-pointer hover:underline text-md"
          >
            Forgot Password?
          </p>
          <span
            v-if="!$v.password.required && $v.password.$dirty"
            class="error_text_4 text-red-500 text-xs font-bold"
            >Password is required.</span
          >
          <span
            v-if="(!$v.password.minLength || !$v.password.maxLength) && $v.password.$dirty"
            class="error_text_4 text-red-500 font-bold text-xs"
            >Oops! Password must be between {{ $v.password.$params.minLength.min }} and
            {{ $v.password.$params.maxLength.max }} characters!</span
          >
        </div>
        <button
          @click="submitForm"
          class="button_align p-5 ml-14 w-2/3 mt-5 mb-14 bg-primary font-body font-bold text-white rounded-lg"
        >
          Login
        </button>
      </div>
      <div class="h-28 w-52 mt-14 bg-gray-200 pt-5">
        <span class="font-body font-bold">Don't have an Account?</span>
        <span class="default_style text-primary cursor-pointer">Create Account</span>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators';
import AppFooter from '@/components/app_footer/AppFooter.vue';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    AppFooter,
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6),
    },
  },

  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(`Email: ${this.email}, Password: ${this.password} `);
      }
    },
  },
};
</script>

<style scoped>
.border_line {
  border-width: 2px;
  padding-top: 85px;
  padding-left: 10px;
  margin-left: 400px;
  margin-right: 400px;
}

.error_text_1 {
  margin-top: 120px;
  margin-left: -460px;
}

input::placeholder {
  /* color: #1c87c9; */
  opacity: 0.7;
}

.email_align {
  margin-left: 80px;

  padding-left: -30px;
  padding-bottom: 0px;
}

.box_align_1 {
  margin-left: -110px;
  margin-top: 50px;
  padding-top: 10px;
}

.error_text_4 {
  margin-top: 82px;
  margin-left: -460px;
}

.password_align {
  margin-left: 85px;
  margin-top: -20px;
}

.box_align_2 {
  margin-left: -77px;
  margin-top: 15px;
}

.button_align {
  margin-left: -80px;
}

.forgot_password {
  margin-top: 90px;
  margin-left: -137px;
}
.text_field {
  margin-bottom: 50px;
  width: 700px;
  margin-right: 60px;
}
</style>
