<template>
  <wallet>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Activities</h4>
                    
                <div class="table-responsive">
                    <table class="table align-middle table-striped table-nowrap mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="align-middle">Ref ID</th>
                                <th class="align-middle">Date</th>
                                <th class="align-middle">Amount</th>
                                <th class="align-middle">Service</th>
                                <th class="align-middle">Payment Status</th>
                                <th class="align-middle">Payment Method</th>
                                <th class="align-middle">View Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="walletActivities.length <= 0">
                                <td colspan="6">
                                    <i class="bx bx-loader bx-spin"></i>
                                    Please wait...
                                </td>
                            </tr>
                            <transaction-history-item 
                                v-else
                                v-for="(transaction) in walletActivities" 
                                :key="transaction._id"
                                :transactionRef="transaction._id"
                                :transactionDate="transaction.timestamp"
                                :amount="transaction.amount"
                                :transactionType="transaction.transactionType"
                                transactionStatus="Successful"
                                :paymentMode="transaction.modeOfPayment">
                            </transaction-history-item>
                        </tbody>
                    </table>
                </div>                                       
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
    </wallet>
</template>

<script>
import { mapActions } from 'vuex'
import Wallet from '../../components/Wallet/Wallet.vue'
import TransactionHistoryItem from './TransactionHistoryItem.vue'
export default {
    components: {
        wallet: Wallet,
        TransactionHistoryItem: TransactionHistoryItem
    },
    data() {
        return {
            currentPage: 1,
            limit: 20
        }
    },
    computed: {
        walletActivities() {
            return this.$store.getters.userWalletActivities
        }
    },
    methods: {
        ...mapActions({
            walletHistory: 'walletHistory'
        })
    },
    mounted() {
        this.walletHistory({ page: this.currentPage, limit: this.limit })
    }
}
</script>