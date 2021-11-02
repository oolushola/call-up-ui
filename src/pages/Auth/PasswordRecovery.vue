<template>
  <auth-wrapper title="Register for Free" titleSlug="Create your free call up account.">
    <template #authForm>
      <div class="p-2">
        <div class="alert alert-success text-center mb-4" role="alert">
            Enter your Email and instructions will be sent to you!
        </div>
        <form class="form-horizontal" action="index.html">
          <div class="mb-3">
              <label for="useremail" class="form-label">Email</label>
              <input type="email" class="form-control" id="useremail" placeholder="Enter email">
          </div>
          <div class="text-end">
              <button class="btn btn-primary w-md waves-effect waves-light" type="submit">Reset</button>
          </div>
        </form>
    </div>
    </template>
    <template #authFooter>
      <div>
        <p>Remember it ? <router-link :to="login" class="fw-medium text-primary"> Sign in here </router-link> </p>
      </div>
    </template>
  </auth-wrapper>
</template>

<script>
export default {
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