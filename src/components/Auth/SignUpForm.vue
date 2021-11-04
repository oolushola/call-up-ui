<template>
  <form @submit.prevent="createUserAccount">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasValidationError"  @click="hasValidationError = false">
      <i class="bx bx-error-circle mt-2"></i>
      Validation failed.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="hasError"  @click="hasError = false"> 
      <i class="bx bx-error-circle mt-2"></i>
      The email {{ email }} is already in use.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="completed">
      <i class="bx bx-check-double mt-2"></i>
      Sign up completed.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="mb-3">
      <label for="useremail" class="form-label"
        >Name (we accept either company or individual names)</label
      >
      <input
        type="text"
        class="form-control"
        id="name"
        v-model.trim="name"
        placeholder="John Doe"
      />
      <small v-if="v$.name.$error" class="mt-2 d-block text-danger text-muted">
        <i class="bx bxs-x-circle"></i>We need to know your name.
      </small>
    </div>
    <div class="mb-3">
      <label for="useremail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        v-model.trim="email"
        placeholder="Enter email"
      />
      <small v-if="v$.email.$error" class="mt-2 d-block text-danger text-muted"
        ><i class="bx bxs-x-circle"></i>Your email is required</small
      >
    </div>
    <div class="mb-3">
      <label for="userpassword" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Enter password"
      />
      <small
        v-if="v$.password.$error"
        class="mt-2 d-block text-danger text-muted"
        ><i class="bx bxs-x-circle"></i>Password is required [Must include a
        capital letter, number and a special character]</small
      >
    </div>
    <div class="mb-3">
      <label for="userpassword" class="form-label">Confirm Password</label>
      <input
        type="password"
        class="form-control"
        v-model="confirmPassword"
        placeholder="Confirm Password"
      />
      <small
        v-if="v$.confirmPassword.$error"
        class="mt-2 d-block text-danger text-muted"
        ><i class="bx bxs-x-circle"></i>Your password does not match</small
      >
    </div>
    <div class="mb-3">
      <label for="userpassword" class="form-label">Profile Type</label>
      <select
        class="form-control form-select"
        id="userpassword"
        v-model.trim="userType"
      >
        <option value="0">Choose Profile Type</option>
        <option v-for="(profile) in getProfileTypes" :key="profile.userType">{{ profile.userType }}</option>
      </select>
      <small
        v-if="v$.userType.$error"
        class="mt-2 d-block text-danger text-muted"
        ><i class="bx bxs-x-circle"></i>We need your profile type.</small
      >
    </div>
    <div class="mb-3">
      <label for="userpassword" class="form-label">Phone Number</label>
      <input
        type="text"
        class="form-control"
        v-model="phoneNo"
        placeholder="08022440810"
      />
      <small
        v-if="v$.confirmPassword.$error"
        class="mt-2 d-block text-danger text-muted"
        ><i class="bx bxs-x-circle"></i>We need your phone number</small
      >
    </div>
    <div class="mt-4 d-grid">
      <button class="btn btn-primary waves-effect waves-light submit" ref="signUp" type="submit" :disabled="isFormSubmitted">
        Register
      </button>
    </div>
    <div class="mt-4 text-center">
      <p class="mb-0">
        By registering you agree to the call up
        <router-link to="#" class="text-primary">Terms of Use</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
  data() {
    return {
      isFormSubmitted: false,
      hasError: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "0",
      phoneNo: '',
      hasValidationError: false,
      completed: false
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      password: {
        required,
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        sameAs: sameAs(this.password),
      },
      userType: {
        required
      },
      phoneNo: { required, Array: minLength(1) },
    };
  },
  computed: {
    getProfileTypes() {
      return this.$store.getters.getProfileTypes
    },
  },
  methods: {
    async createUserAccount() {
      this.v$.$touch();
      if(this.v$.$error) {
        this.hasValidationError = true
        return;
      }
      this.isFormSubmitted = true
      this.$refs.signUp.innerHTML = '<i class="bx bx-loader bx-spin"></i> Please wait...'
      let pns = []
      pns.push(this.phoneNo)
      try { 
        const formData = {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          phoneNo: pns,
          userType: this.userType
        }
        const signUpRequest = await this.$store.dispatch('createUserAccount', formData);
        if(signUpRequest.status === 201) {
          this.$router.push('/email-confirmation')
        }
        
        if(signUpRequest.status === 422 ) {
          this.hasValidationError = true
          this.isFormSubmitted = false
          this.$refs.signUp.innerHTML = 'Register'
        }
        if(signUpRequest.data.email.msg.statusCode === 409) {
          this.hasError = true
          this.isFormSubmitted = false
          this.$refs.signUp.innerHTML = 'Register'
          return false
        }
      }
      catch(err) {
        return err.message
      }
    },
  },
  
  created() {
    this.$store.dispatch('fetchProfileTypes')
  },
};
</script>
