<template>
  <wallet>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="float-end">
                <div class="dropdown">
                    <button type="button" class="btn btn-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="bx bx-wallet me-1"></i> <span class="d-none d-sm-inline-block">Wallet Brief <i class="mdi mdi-chevron-down"></i></span></button>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-md">
                        <div class="dropdown-item-text">
                            <div>
                                <p class="text-muted mb-2">Available Balance</p>
                                <h5 class="mb-0">&#x20A6;{{ currencyFormatter(walletDetails.availableBalance)}}</h5>
                            </div>
                        </div>

                        <div class="dropdown-divider"></div>

                        <p class="dropdown-item">
                            Total Amount Spent : <span class="float-end">&#x20A6;{{ currencyFormatter(0) }}</span>
                        </p>
                        <div class="dropdown-divider"></div>

                        <router-link :to="{name: 'TransactionHistory'}" class="dropdown-item text-primary text-center">
                          Transaction Log
                        </router-link>
                    </div>
                </div>
            </div>
            <h4 class="card-title mb-4">Fund Wallet</h4>
            <div class="crypto-buy-sell-nav">
                <ul class="nav nav-tabs nav-tabs-custom" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#buy" role="tab" aria-selected="true">
                      Credit your wallet
                    </a>
                  </li>
                </ul>

                <div class="tab-content crypto-buy-sell-nav-content p-4">
                  <div class="tab-pane active" id="buy" role="tabpanel">
                    <form @submit.prevent="fundWalletHandler">
                      <div class="row">
                        <div class="mb-4">
                            <p class="text-muted mb-1">Charges :</p>
                            <h5 class="font-size-16">&#x20A6;{{ currencyFormatter(getCharges) }}</h5>
                        </div>
                        <div class="m-0">
                          <p class="text-danger" v-if="v$.amount.$error"><i class="bx bx-x-circle"></i> Minimum of &#x20A6;{{ currencyFormatter(10000)}}</p>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label for="formrow-email-input" class="form-label">Amount (&#x20A6;)</label>
                            <input type="number" v-model="amount" class="form-control form-control-sm" id="formrow-email-input">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label for="formrow-password-input" class="form-label">Transaction Ref</label>
                            <input type="text" disabled :value="transactionRef" class="form-control form-control-sm" id="formrow-password-input">
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="mb-3">
                            <label for="formrow-password-input" class="form-label">Email</label>
                            <input type="email" value="odejobi.olushola@kayaafrica.co" class="form-control form-control-sm" id="formrow-password-input" disabled>
                          </div>
                        </div>
                      </div>
                      
                      <div class="mb-2">
                        <label>Payment Processor :</label>
                        <div class="row">
                            <div class="col-xl-2 col-sm-4">
                                <div class="mb-3">
                                  <label class="card-radio-label mb-2">
                                    <input type="radio" value="flutterwave" v-model="paymentMethod" name="paymentMethod" class="card-radio-input">
                                    <div class="card-radio">
                                      <div>
                                        <i class="font-size-24 text-warning align-middle me-2"></i>
                                        <span>Flutterwave</span>
                                      </div>
                                    </div>
                                  </label>
                                </div>
                            </div>

                            <div class="col-xl-2 col-sm-4">
                              <div class="mb-3">
                                <label class="card-radio-label mb-2">
                                  <input type="radio" value="paystack" v-model="paymentMethod" name="paymentMethod" class="card-radio-input">
                                  <div class="card-radio">
                                    <div>
                                      <i class="font-size-24 text-primary align-middle me-2"></i>
                                      <span>Paystack</span>
                                    </div>
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div class="col-xl-2 col-sm-4">
                                <div class="mb-3">
                                    <label class="card-radio-label mb-2">
                                        <input type="radio" value="interswitch" v-model="paymentMethod" name="paymentMethod" class="card-radio-input">
                                        <div class="card-radio">
                                            <div>
                                              <i class="font-size-24 text-info align-middle me-2"></i>
                                              <span>Interswitch</span>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <span class="text-danger" v-if="v$.paymentMethod.$error"><i class="bx bx-x-circle"></i> You need to select a payment processor</span>
                        </div>
                      </div>
                      <div class="mt-3">
                          <button type="submit" ref="fundWallet"  class="btn btn-success">Fund Wallet</button>
                          
                      </div>
                      
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </wallet>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minValue  } from '@vuelidate/validators'
import Wallet from '../../components/Wallet/Wallet.vue'

export default {
  components: {
    wallet: Wallet,
  },
  setup() {
    return { v$: useVuelidate() }
  },
  validations() {
    return {
      amount: { required , min: minValue(10000) },
      paymentMethod: { required }
    }
  },
  data() {
    return {
      charges: 0,
      amount: 0,
      chargeOnWallet: 0.0013,
      transactionRef: `CLU-${this.generateTransactionRef().toUpperCase()}`,
      paymentMethod: '',
      isFormSubmitted: false,
      isProduction: process.env.environment
    }
  },
  computed: {
    getCharges() {
      return this.chargeOnWallet * this.amount; 
    },
    walletDetails() {
      return this.$store.getters.userWallet
    }
  },
  methods: {
    async fundWalletHandler() {
      this.v$.$touch()
      if(this.v$.$error) {
        this.isFormSubmitted = false
        return 
      }
      this.isFormSubmitted = true
      this.$refs.fundWallet.innerHTML = '<i class="bx bx-loader bx-spin"></i>Please wait...'
      const formData = {
        amount: this.amount,
        transactionRef: this.transactionRef,
        paymentMethod: this.paymentMethod,
      }
      console.log(formData)
      window.FlutterwaveCheckout({
        public_key: process.env.VUE_APP_FLW_PUBLIC_KEY,
        tx_ref: this.transactionRef,
        amount: this.amount,
        currency: 'NGN',
        payment_options: 'card',
        redirect_url: `${process.env.VUE_APP_BASE_URL}/payment-verification`,
        customer: {
          name: this.$store.state.user.name,
          email: this.$store.state.user.email,
        },
        callback : (resp) => {
          console.log('successful' + resp)
        },
        onclose: () => {
          this.$router.push({
            name: 'PaymentVerification',
            query: {
              status: 'failed',
              tx_ref: this.transactionRef
            }
          })
        },
        customizations: {
          title: this.custom_title,
          description: 'wallet funding',
          logo: 'https://kaya-world.com/assets/img/kaya/kaya-africa-techonology-nig-ltd.png'
        }
      })
    },
  },
  created() {
    const script = document.createElement('script')
    script.src = !this.isProduction 
    ? "https://ravemodal-dev.herokuapp.com/v3.js" 
    : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script)
  }

}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
</style>