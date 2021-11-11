<template>
  <design-layout>
    <div class="page-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div
                class="
                  page-title-box
                  d-sm-flex
                  align-items-center
                  justify-content-between
                "
              >
              <h4 class="mb-sm-0 font-size-18">Trans No: {{ transactionRef }}</h4>
              <input v-model="transactionRef" @keyup="updateRouteQuery"  />
              <!-- <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"></li>
                  <li class="breadcrumb-item active">Form Layouts</li>
                </ol>
              </div> -->
            </div>
          </div>
        </div>
        <!-- end page title -->
      </div>
		</div>
  </design-layout>
</template>

<script>
export default {
  data() {
    return {
      paymentStatus: this.$route.query.status,
      transactionRef: this.$route.query.tx_ref
    }
  },
  mounted() {
    const amount = localStorage.getItem("truckCharges")
    const paymentProcesor = localStorage.getItem("paymentProcessor")
    const request = this.$store.dispatch('updateTransactionHistory', {
      amount: amount,
      modeOfPayment: paymentProcesor
    })
    console.log(request)
  }
}
</script>

<style scoped>

</style>