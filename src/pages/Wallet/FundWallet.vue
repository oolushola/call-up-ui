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
                                      <h5 class="mb-0">&#x20A6;9148.23</h5>
                                  </div>
                              </div>

                              <div class="dropdown-divider"></div>

                              <p class="dropdown-item">
                                  Total Amount Spent : <span class="float-end">&#x20A6;1.02356</span>
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
                              <form>
                                <div class="row">
                                  <div class="mb-4">
                                      <p class="text-muted mb-1">Charges :</p>
                                      <h5 class="font-size-16">&#x20A6;{{ getCharges }}</h5>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">Amount (&#x20A6;)</label>
                                      <input type="number" v-model="amount" class="form-control form-control-sm" id="formrow-email-input">
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="mb-3">
                                      <label for="formrow-password-input" class="form-label">Wallet ID</label>
                                      <input type="text" disabled value="128399819AS9VN" class="form-control form-control-sm" id="formrow-password-input">
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
                                                  <input type="radio" name="currency" id="buycurrencyoption1" class="card-radio-input" checked="">
                                                  <div class="card-radio">
                                                      <div>
                                                          <i class="bx bxs-bitcoin font-size-24 text-warning align-middle me-2"></i>
                                                          <span>Flutterwave</span>
                                                      </div>
                                                  </div>
                                              </label>
                                          </div>
                                      </div>

                                      <div class="col-xl-2 col-sm-4">
                                          <div class="mb-3">
                                              <label class="card-radio-label mb-2">
                                                  <input type="radio" name="currency" id="buycurrencyoption2" class="card-radio-input">
                                                  <div class="card-radio">
                                                      <div>
                                                          <i class="bx bx-ethereum font-size-24 text-primary align-middle me-2"></i>
                                                          <span>Paystack</span>
                                                      </div>
                                                  </div>
                                              </label>
                                          </div>
                                      </div>

                                      <div class="col-xl-2 col-sm-4">
                                          <div class="mb-3">
                                              <label class="card-radio-label mb-2">
                                                  <input type="radio" name="currency" id="buycurrencyoption3" class="card-radio-input">

                                                  <div class="card-radio">
                                                      <div>
                                                        <i class="bx bx-litecoin font-size-24 text-info align-middle me-2"></i>
                                                        <span>Interswitch</span>
                                                      </div>
                                                  </div>
                                              </label>
                                          </div>
                                      </div>
                                      
                                  </div>
                                </div>

                                <div class="mt-3">
                                    <button type="button" class="btn btn-success">Fund Wallet</button>
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
import Wallet from '../../components/Wallet/Wallet.vue'
export default {
    components: {
      wallet: Wallet
    },
    data() {
      return {
        charges: 0,
        amount: 0,
        chargeOnWallet: 0.0013
      }
    },
    computed: {
      getCharges() {
        return (this.chargeOnWallet * this.amount).toFixed(2); 

      }
    }
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
</style>