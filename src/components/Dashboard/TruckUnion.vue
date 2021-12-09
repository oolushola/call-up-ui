<template>
	<div class="row">
		<div class="col-sm-4">
			<div class="card mini-stats-wid">
				<div class="card-body">
					<div class="d-flex">
						<div class="flex-shrink-0 me-3 align-self-center">
							<i class="bx bx-wallet h2 text-warning mb-0"></i>
						</div>
						<span v-if="isLoading"><i class="bx bx-loader bx-spin"></i></span>
						<div class="flex-grow-1" v-else>
							<p class="text-muted mb-2">Pending Payments</p>
							<h5 class="mb-1">
								&#x20A6;{{ currencyFormatter(unionOverview.pendingPayments) }}
							</h5>
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
							<i class="bx bx-money h2 text-primary mb-0"></i>
						</div>
						<span v-if="isLoading"><i class="bx bx-loader bx-spin"></i></span>
						<div class="flex-grow-1" v-else>
							<p class="text-muted mb-2">Total Payment Received</p>
							<h5 class="mb-0">
								&#x20A6;{{
									currencyFormatter(Number(unionOverview.receivedPayments))
								}}
							</h5>
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
						<span v-if="isLoading"><i class="bx bx-loader bx-spin"></i></span>
						<div class="flex-grow-1" v-else>
							<p class="text-muted mb-2">Revenue Generated</p>
							<h5 class="mb-0">
								&#x20A6;{{
									currencyFormatter(Number(unionOverview.generatedRevenue))
								}}
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->

	<span v-if="isLoading"><i class="bx bx-loader bx-spin"></i></span>
	<daily-report-analytics
		v-else
		type="line"
		height="200"
		:data="unionOverview.revenue"
		id="parkDailyEntry"
		label="Daily Revenue Generated(₦)"
		:labels="unionOverview.days"
	/>
	<transactions />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Transactions from "../../pages/Wallet/Transactions.vue";
import DailyReportAnalytics from "../Analytics/ChartAnalytics.vue";
export default {
	components: {
		transactions: Transactions,
		"daily-report-analytics": DailyReportAnalytics,
	},
	computed: {
		...mapGetters({
			isLoading: "getFetchResource",
			unionOverview: "getTruckUnion",
		}),
	},
	methods: {
		...mapActions({
			truckUnionOverview: "fetchUnionAccountOverview",
		}),
	},
	created() {
		this.truckUnionOverview();
	},
};
</script>
