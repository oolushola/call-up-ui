<template>
  <auth-wrapper title="Register for Free" titleSlug="Create your free call up account.">
    <template #authForm>
      <sign-up-form></sign-up-form>
    </template>
    <template #authFooter>
      <div>
        <p>Already have an account ? <router-link :to="login" class="fw-medium text-primary"> Login </router-link> </p>
      </div>
    </template>
  </auth-wrapper>
</template>

<script>
import SignUpForm from '../../components/Auth/SignUpForm.vue'
export default {
  components: {
    signUpForm: SignUpForm
  },
  computed: {
    login() {
      return {
        name: 'login'
      }
    }
  }
}
</script>

<style scoped>

</style>