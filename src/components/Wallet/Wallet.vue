<template>
  <design-layout>
    <div class="page-content">
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0 font-size-18">Wallet</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Transaction History</a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-4">
                                    <i class="bx bx-user text-primary h1"></i>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="text-muted">
                                        <h5>{{ $store.getters.nameCapitalizer }}</h5>
                                        <p class="mb-1">{{ $store.state.user.email}}</p>
                                        <p v-if="!getWalletDetails"><i class="bx bx-loader bx-spin"></i></p>
                                        <p v-else class="mb-0">Wallet Id: {{ getWalletDetails._id }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="card mini-stats-wid">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3 align-self-center">
                                            <i class="bx bx-wallet h2 text-warning mb-0"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-2">Available Balance</p>
                                            <p v-if="!getWalletDetails"><i class="bx bx-loader bx-spin"></i></p>
                                            <h5 v-else class="mb-1">&#x20A6;{{ currencyFormatter(getWalletDetails.availableBalance) }}</h5>
                                            <p class="text-muted mb-2">{{ new Date().toUTCString().substr(0, 16) }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card mini-stats-wid">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3 align-self-center">
                                            <router-link :to="{name: 'FundWallet'}">
                                                <i class="bx bx-plus-medical bx-tada h2 text-primary mb-0"></i>
                                            </router-link>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-2">Fund Wallet</p>
                                            <p v-if="!getWalletDetails"><i class="bx bx-loader bx-spin"></i></p>
                                            <h5 v-else class="mb-0">&#x20A6;{{ currencyFormatter(getWalletDetails.lastDeposit) }} </h5>
                                            <p class="text-muted mb-2">last credited amount</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="card mini-stats-wid">
                                <div class="card-body">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3 align-self-center">
                                            <i class="bx bx-coin-stack h2 text-info mb-0"></i>
                                        </div>
                                        <div class="flex-grow-1">
                                            <p class="text-muted mb-2">Last Amount Spent</p>
                                            <p v-if="!getWalletDetails"><i class="bx bx-loader bx-spin"></i></p>
                                            <h5 v-else class="mb-0">&#x20A6; {{ currencyFormatter(getWalletDetails.lastAmountSpent) }}</h5>
                                            <p class="text-muted mb-2">25th Oct, 2021.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end row -->

                    
                </div>
            </div>
            <!-- end row -->
            <slot></slot>
            
        </div> <!-- container-fluid -->
    </div>
  </design-layout>
</template> 

<script>
export default {
    
    computed: {
        getWalletDetails() {
            return this.$store.getters.userWallet
        }
    },
    async beforeMount() {
        this.$store.dispatch('walletInfoRequest')
    }
}
</script>