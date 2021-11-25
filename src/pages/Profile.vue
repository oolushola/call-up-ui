<template>
	<design-layout>
		<div class="page-content">
			<div class="container-fluid">
				<!-- start page title -->
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
							<h4 class="mb-sm-0 font-size-18">
								Profile - {{ capitalizer($store.state.user.name) }}
							</h4>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row">
					<div class="col-md-6 col-xl-3">
						<div class="card">
							<img
								class="card-img-top img-fluid"
								src="../assets/images/users/avatar-1.jpg"
								alt="Card image cap"
							/>
							<div class="card-body">
								<h4 class="card-title">
									Kaya Africa <i class="bx bxs-badge-check text-primary"></i>
								</h4>
								<p class="card-text">Clearing Agents</p>
							</div>
							<ul class="list-group list-group-flush">
								<li class="list-group-item">ID: 18029182ABYDLK</li>
								<li class="list-group-item">Profile Impression: 45%</li>
								<li class="list-group-item">Total Bookings: 0</li>
								<li class="list-group-item">Truck Fleets: 120</li>
							</ul>
							<div class="card-body">
								<router-link
									:to="{ name: 'TransactionHistory' }"
									class="card-link"
									>Wallet</router-link
								>
								<router-link :to="{ name: 'dashboard' }" class="card-link"
									>Dashboard</router-link
								>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-xl-9">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title mb-4">Profile Management</h4>
								<div
									id="vertical-example"
									class="vertical-wizard wizard clearfix vertical"
									role="application"
								>
									<div class="steps clearfix">
										<ul role="tablist">
											<li
												@click="tabNavigator('basicInformation')"
												role="tab"
												class="mb-2 p-2"
												aria-disabled="false"
												aria-selected="true"
												:class="
													isSelected === 'basicInformation'
														? 'bg-info text-white'
														: ''
												"
											>
												<span class="current-info audible">current step: </span>
												<span class="number">1.</span>Basic Information
											</li>
											<li
												@click="tabNavigator('2fa')"
												role="tab"
												class="mb-2 p-2"
												aria-disabled="false"
												aria-selected="false"
												:class="
													isSelected === '2fa'
														? 'bg-info text-white'
														: ''
												"
											>
												<span class="number">2.</span>Password 2FA
											</li>
											<li
												role="tab"
												class="mb-2 p-2"
												aria-disabled="true"
												@click="tabNavigator('bankDetails')"
												:class="
													isSelected === 'bankDetails'
														? 'bg-info text-white'
														: ''
												"
											>
												<span class="number">3.</span> Bank Details
											</li>
										</ul>
									</div>
									<div class="content clearfix">
										<basic-information :selected="isSelected" />
										<two-factor-auth :selected="isSelected" />
										<bank-details :selected="isSelected" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- container-fluid -->
		</div>
	</design-layout>
</template>

<script>
import BasicInformation from "../components/Profile/BasicInformation.vue";
import TwoFactorAuthentication from "../components/Profile/TwoFactorAuthentication.vue";
import BankDetails from "../components/Profile/BankDetails.vue";

export default {
	components: {
		"basic-information": BasicInformation,
		"two-factor-auth": TwoFactorAuthentication,
		"bank-details": BankDetails,
	},
	data() {
		return {
			isSelected: "basicInformation",
		};
	},
	methods: {
		tabNavigator(selected) {
			this.isSelected = selected;
		},
	},
};
</script>