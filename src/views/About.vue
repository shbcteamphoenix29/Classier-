<template>
  <div>
    <h1>Classier</h1>
    <!-- <input type="text" /> -->
    <div>
      <label>Name</label>
      <input type="text" v-model="name" class="h-100 w-50 rounded-md" />
      <span v-if="!$v.name.required && $v.name.$dirty" class="text-red-500">Name is required</span>
      <span v-if="!$v.name.alpha && $v.name.$dirty" class="text-red-500">Name is required</span>
    </div>
    <div>
      <input type="text" v-model="name" class="h-100 w-50 rounded-md" />
      <!-- <span v-if="!$v.name.required && $v.name.$dirty" class="text-red-500">Name is required</span>
      <span v-if="!$v.name.alpha && $v.name.$dirty" class="text-red-500">Name is required</span> -->
    </div>
  </div>
</template>

<script>
import { email, required, minLength, maxLength, alpha } from 'vuelidate/lib/validators';

export default {
  components: {},
  data() {
    return {
      name: '',
      email: '',
      password: '',
      gender: '',
      acceptTerms: '',
    };
  },
  validations: {
    name: {
      required,
      alpha,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      maxLength: maxLength(12),
      minLength: minLength(6),
    },
    gender: {
      required,
    },
    acceptTerms: {
      required,
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(
          `Name: ${this.name}, Email: ${this.email}, Gender: ${this.gender}, Accept Terms: ${this.acceptTerms}`
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
