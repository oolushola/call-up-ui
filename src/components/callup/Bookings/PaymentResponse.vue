<template>
  <teleport to="body">
    <section>
      <modal>
        <template v-slot:modalheader>
          <span v-if="isLoading" class="bx bx-loader bx-spin bx-sm"></span>
        </template>
        <h3 class="text-center" v-if="paymentResponse.status === 'success' && status === 201">Payment Successful</h3>
        <success-check  v-if="paymentResponse.status === 'success' && status === 201 " />
        <div class="text-center">
          <span class="bx bx-error-alt bx-tada bx-md text-center text-danger"  v-if="paymentResponse.status === 'failed' && status === 201"></span>        
          <h3 class="text-center text-info" v-if="paymentResponse.status === 'failed' && status === 201">Oops! Payment Unsuccessful</h3>
        </div>
      </modal>
    </section>
  </teleport>
</template>

<script>
export default {
  props: {
    paymentResponse: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      status: null,
      isLoading: false
    }
  },
  methods: {
    async updateTransactionLog() {
      this.isLoading = true
      console.log(this.paymentResponse)
      const walletLog = await this.$store.dispatch('updateWalletLog', this.paymentResponse)
      if(walletLog.status === 201) {
        this.isLoading = false
        this.status = walletLog.status
      }
    },
  },
  mounted() {
    this.updateTransactionLog()
  }
}
</script>