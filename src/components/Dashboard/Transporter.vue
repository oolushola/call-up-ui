<template>
	<div class="row">
		<div class="col-xl-4">
			<div class="card overflow-hidden">
				<div class="bg-primary bg-soft">
					<div class="row">
						<div class="col-7">
							<div class="text-primary p-3">
								<h5 class="text-primary">Welcome Back !</h5>
								<p>Call Up Dashboard</p>
							</div>
						</div>
						<div class="col-5 align-self-end">
							<img
								src="../../assets/images/profile-img.png"
								alt=""
								class="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div class="card-body pt-0">
					<div class="row">
						<div class="col-sm-4">
							<div class="avatar-md profile-user-wid mb-4">
								<img
									src="../../assets/images/users/avatar-1.jpg"
									alt=""
									class="img-thumbnail rounded-circle"
								/>
							</div>
							<h5 class="font-size-15 text-truncate">
								{{ capitalizer($store.state.user.name) }}
							</h5>
							<p class="text-muted mb-0 text-truncate">
								{{ capitalizer(user.userType) }}
							</p>
						</div>
						<div class="col-sm-8">
							<div class="pt-4">
								<div class="row">
									<div class="col-6">
										<h5 class="font-size-15">
											{{ truckOverview.trucksInPark }}
											<span v-if="truckOverview.trucksInPark > 1">Trucks</span>
											<span v-else>Truck</span>
										</h5>
										<p class="text-muted mb-0">In all Parks</p>
									</div>
									<div class="col-6">
										<h5 class="font-size-15">
											&#x20A6;{{ truckOverview.trucksInPark * 5000 }}
										</h5>
										<p class="text-muted mb-0">Cost</p>
									</div>
								</div>
								<div class="mt-4">
									<a
										href="javascript: void(0);"
										class="btn btn-primary waves-effect waves-light btn-sm"
										>View Profile <i class="mdi mdi-arrow-right ms-1"></i
									></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xl-8">
			<div class="row">
				<dashboard-cta
					title="Bookings"
					:value="truckOverview.bookings"
					icon="bx-copy-alt"
				></dashboard-cta>
				<dashboard-cta
					title="Wallet Balance"
					:value="walletBalance"
					icon="bx-wallet"
				></dashboard-cta>
				<dashboard-cta
					title="Total Trucks"
					value="0"
					icon="bxs-truck"
				></dashboard-cta>
			</div>
			<div class="row">
				<dashboard-cta
					title="Demurrage"
					value="0"
					icon="bx-sad"
				></dashboard-cta>
				<dashboard-cta
					title="Completed Transactions"
					:value="truckOverview.completedTransactions"
					icon="bx-check-circle"
				></dashboard-cta>
				<dashboard-cta
					title="Support Ticket"
					value="0"
					icon="bx-support"
				></dashboard-cta>
			</div>
		</div>
	</div>
	<!-- end row -->
	<transaction-log />
	<!-- end row -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Transactions from "../../pages/Wallet/Transactions.vue";
export default {
	components: {
		transactionLog: Transactions,
	},
	computed: {
		user() {
			return this.$store.state.user;
		},
		...mapGetters({
			truckOverview: "getTruckOverview",
		}),
		walletBalance() {
			if (this.truckOverview.walletBalance === 0) {
				return `&#x20A6;${this.truckOverview.walletBalance / 1000}K`;
			}
			return 0;
		},
	},
	methods: {
		...mapActions(["fetchTruckOverview"]),
	},
	created() {
		this.fetchTruckOverview();
	},
};
</script>