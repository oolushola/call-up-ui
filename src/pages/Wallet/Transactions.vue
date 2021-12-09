<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title mb-4">Activities</h4>
					<spinner v-if="isWalletLoading" />
					<div class="table-responsive" v-else>
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
								<record-not-found
									v-if="walletActivities.length <= 1"
									colspan="10"
									label="No record found."
								></record-not-found>
								<transaction-history-item
									v-else
									v-for="transaction in walletActivities"
									:key="transaction._id"
									:transactionRef="transaction._id"
									:transactionDate="transaction.timestamp"
									:amount="transaction.amount"
									:transactionType="transaction.transactionType"
									:transactionStatus="transaction.transactionStatus"
									:paymentMode="transaction.modeOfPayment"
								>
								</transaction-history-item>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TransactionHistoryItem from "./TransactionHistoryItem.vue";
export default {
	components: {
		TransactionHistoryItem: TransactionHistoryItem,
	},
	data() {
		return {
			currentPage: 1,
			limit: 20,
		};
	},
	computed: {
		walletActivities() {
			return this.$store.getters.userWalletActivities;
		},
		...mapGetters({
			isWalletLoading: "transactionLogStatus",
		}),
	},
	methods: {
		...mapActions({
			walletHistory: "walletHistory",
		}),
	},
	mounted() {
		this.walletHistory({ page: this.currentPage, limit: this.limit });
	},
};
</script>