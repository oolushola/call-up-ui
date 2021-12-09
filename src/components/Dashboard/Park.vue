<template>
	<div class="row">
		<div class="col-sm-4">
			<div class="card mini-stats-wid">
				<div class="card-body">
					<div class="d-flex">
						<div class="flex-shrink-0 me-3 align-self-center">
							<i class="bx bx-wallet h2 text-warning mb-0"></i>
						</div>
						<span v-if="parkLoadingStatus"
							><i class="bx bx-loader bx-spin"></i
						></span>
						<div class="flex-grow-1" v-else>
							<p class="text-muted mb-2">Expected Trips</p>
							<h5 class="mb-1">{{ parkOverview.expectedTrips }}</h5>
							<p class="text-muted mb-2">
								{{ new Date().toUTCString().substr(0, 16) }}
							</p>
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
						<span v-if="parkLoadingStatus"
							><i class="bx bx-loader bx-spin"></i
						></span>
						<div class="flex-grow-1" v-else>
							<p class="text-muted mb-2">Amount Last Received</p>
							<h5 class="mb-0">
								&#x20A6;{{
									currencyFormatter(Number(parkOverview.lastReceived.amount))
								}}
							</h5>
							<p class="text-muted mb-2">
								{{ parkOverview.lastReceived.percentageIncrement }}% decrease
								from last week.
							</p>
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
						<span v-if="parkLoadingStatus"
							><i class="bx bx-loader bx-spin"></i
						></span>
						<div class="flex-grow-1" v-else>
							<p class="text-muted mb-2">Revenue Generated</p>
							<h5 class="mb-0">
								&#x20A6;{{
									currencyFormatter(Number(parkOverview.generatedRevenue))
								}}
							</h5>
							<p class="text-muted mb-2">
								{{ parkOverview.lastReceived.percentageIncrement }}% increase
								from last week
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end row -->

	<span v-if="parkLoadingStatus"><i class="bx bx-loader bx-spin"></i></span>
	<daily-report-analytics
		v-else
		type="line"
		height="200"
		:data="parkOverview.revenue"
		id="parkDailyEntry"
		label="Daily Revenue Generated(₦)"
		:labels="parkOverview.days"
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
			parkLoadingStatus: "getParkResource",
			parkOverview: "getParkOverview",
		}),
	},
	methods: {
		...mapActions({
			fetchParkOverview: "fetchParkOverview",
		}),
	},
	created() {
		this.fetchParkOverview();
	},
};
</script>
