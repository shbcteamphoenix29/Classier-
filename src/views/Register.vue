<template>
  <div>
    <div class="flex bg-gray-50">
      <div class="text_field border_line rounded-lg mt-16 border-black-600">
        <!-- <input type="text" /> -->
        <h1 class="mb-5 text-5xl font-body text-primary font-bold mr-5">
          Create a Classier Account
        </h1>
        <h1 class="font-new font-extrabold pb-5">
          Shopping just got a whole fun! Sign Up and Enjoy the Ride!
        </h1>
        <div class="flex mt-10 mb-10">
          <label class="email_align mt-5 pt-0 default_style">Email address</label>
          <input
            type="text"
            v-model="email"
            class="box_align_1 h-16 w-2/3 mt-0 mb-0 rounded-md border-2"
          />
          <span
            v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty"
            class="error_text_1 text-red-500 font-bold mt-14 text-xs"
            >Valid Email is required</span
          >
        </div>
        <div class="flex my-10 mt-10">
          <label class="f_name_align mt-10 pt-2 default_style">Full Name</label>
          <input
            type="text"
            v-model="full_name"
            class="h-16 w-2/3 mt-4 mb-2 -ml-20 rounded-md border-2"
          />
          <span
            v-if="!$v.f_name.required && $v.f_name.$dirty"
            class="error_text_2 text-red-500 text-xs font-bold"
            >Full Name is required.</span
          >
          <span
            v-if="!$v.f_name.alpha && $v.f_name.$dirty"
            class="error_text_2 text-red-500 text-xs font-bold"
            >Kindly input the correct Full Name.</span
          >
        </div>

        <div class="flex my-10 -ml-1">
          <label class="password_align mt-10 pt-2 default_style">Password</label>
          <input
            type="password"
            v-model="password"
            class="box_align_2 h-16 w-2/3 mt-0 mb-0 -ml-16 rounded-md border-2"
          />
          <span
            v-if="!$v.password.required && $v.password.$dirty"
            class="error_text_4 text-red-500 text-xs font-bold"
            >Password is required</span
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
          class="button_align p-5 ml-14 w-2/3 mb-10 bg-primary font-body font-bold text-white rounded-lg"
        >
          Join Classier
        </button>
      </div>
      <div class="h-28 w-52 mt-14 bg-gray-200 pt-5 px-2">
        <span class="font-body font-bold">Already Have an Account?<br /></span>
        <span class="default_style text-primary cursor-pointer hover:underline">Login</span>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { email, required, minLength, maxLength, alpha } from 'vuelidate/lib/validators';
import AppFooter from '@/components/app_footer/AppFooter.vue';
export default {
  components: {
    AppFooter,
  },
  data() {
    return {
      full_name: '',
      email: '',
      password: '',
      // gender: '',
      // acceptTerms: '',
    };
  },
  validations: {
    f_name: {
      required,
      alpha,
    },
    // l_name: {
    //   required,
    //   alpha,
    // },
    email: {
      required,
      email,
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6),
    },
    // gender: {
    //   required,
    // },
    // acceptTerms: {
    //   required,
    // },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(`Name: ${this.name}, Email: ${this.email},  Password: ${this.password} `);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.email_align {
  margin-left: 80px;
  // margin-top: -30px;
  // padding-top: -0px;
  padding-left: -30px;
  padding-bottom: 0px;
  // margin-bottom: 5px;
}

.error_text_1 {
  margin-top: 120px;
  margin-left: -470px;
}

.error_text_2 {
  margin-top: 80px;
  margin-left: -470px;
}
.error_text_3 {
  margin-top: 65px;
  margin-left: -470px;
}

.box_align_1 {
  margin-left: -110px;
  margin-top: 50px;
  padding-top: 10px;
}

.error_text_4 {
  margin-top: 65px;
  margin-left: -470px;
}
.f_name_align {
  margin-left: 80px;
  margin-top: -20px;
}

.l_name_align {
  margin-left: 80px;
  margin-top: -35px;
  padding-top: 10px;
}
.box_align_2 {
  margin-left: -75px;
  margin-top: 2px;
}
.password_align {
  margin-left: 85px;
  margin-top: -30px;
}

.border_line {
  border-width: 2px;
  padding-top: 85px;
  padding-left: 10px;
  margin-left: 400px;
  margin-right: 400px;
}

.text_field {
  margin-bottom: 50px;
  width: 700px;
  margin-right: 60px;
}

.button_align {
  margin-left: -80px;
}
</style>
