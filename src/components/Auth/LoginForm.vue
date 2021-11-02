<template>
  <form class="form-horizontal" method="POST" @submit.prevent="loginHandler">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        type="text"
        class="form-control"
        id="email"
        placeholder="Enter Email Address"
        v-model.trim="formData.email"
      />
      <span v-if="v$.formData.email.$error" class="mt-2 d-block font-size-sm text-danger"
        ><i class="bx bxs-x-circle"></i>Your email is required and must be
        valid.</span
      >
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <div class="input-group auth-pass-inputgroup">
        <input
          type="password"
          class="form-control"
          placeholder="Enter password"
          v-model="formData.password"
        />
      </div>
      <span v-if="v$.formData.password.$error" class="mt-2 d-block font-size-sm text-danger"
        ><i class="bx bxs-x-circle"></i>Password is required.</span
      >
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="remember-check" />
      <label class="form-check-label" for="remember-check"> Remember me </label>
    </div>
    <div class="mt-3 d-grid">
      <button
        class="btn btn-primary waves-effect waves-light"
        type="submit"
        :disabled="isFormSubmitted"
        ref="login"
      >
        Log In
      </button>
    </div>

    <div class="mt-4 text-center">
      <router-link :to="passwordRecovery" class="text-muted"
        ><i class="mdi mdi-lock me-1"></i> Forgot your password?</router-link
      >
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      isFormSubmitted: false,
    };
  },
  computed: {
    passwordRecovery() {
      return {
        name: "passwordRecovery",
      };
    },
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations() {
    return {
      formData: {
        email: { required, email },
        password: { required, min: minLength(8) },
        hasError: false
      },
    };
  },
  methods: {
    async loginHandler() {
      this.v$.$touch()
      if(this.v$.$error) {
        return 
      }
      this.isFormSubmitted = true
      this.$refs.login.innerHTML = '<i class="bx bx-loader bx-spin"></i>Please wait'
      const formData = JSON.stringify(this.formData)
      const loginRequest = await this.$store.dispatch('loginRequest', formData)
      if(loginRequest.status === 200) {
        const { email, emailVerified, id, lastLogin, name, token, userType } = loginRequest.data
        localStorage.setItem("email", email)
        localStorage.setItem("isEmailVerified", emailVerified)
        localStorage.setItem("id", id)
        localStorage.setItem("lastLogin", lastLogin)
        localStorage.setItem("name", name)
        localStorage.setItem("token", token)
        localStorage.setItem('userType', userType)
        document.cookie = token
        this.$router.push('/dashboard')
      }
      else if(loginRequest.status === 422) {
        this.hasError = true
        
      }
    },
  },
};
</script>