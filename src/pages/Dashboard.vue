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
							<h4 class="mb-sm-0 font-size-18">Dashboard</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item">
										<router-link :to="{ name: 'dashboard' }"
											>Dashboard</router-link
										>
									</li>
								</ol>
							</div>
						</div>
					</div>

					<transporter-dashboard v-if="userType === 'transporter'" />
					<park-dashboard v-if="userType === 'park owner'" />
					<union-dashboard v-if="userType === 'union'" />
					<policing-dashboard v-if="userType === 'policing'" />
					<terminal-dashboard v-if="userType === 'terminal'" />
				</div>
			</div>
		</div>
	</design-layout>
</template>

<script>
import ParkDashboard from "../components/Dashboard/Park.vue";
import TransporterDashboard from "../components/Dashboard/Transporter.vue";
import UnionDashboard from "../components/Dashboard/TruckUnion.vue";
import PolicingDashboard from "../components/Dashboard/Policing.vue";
import TerminalDashboard from "../components/Dashboard/Terminal.vue";
export default {
	components: {
		"transporter-dashboard": TransporterDashboard,
		"park-dashboard": ParkDashboard,
		"union-dashboard": UnionDashboard,
		"policing-dashboard": PolicingDashboard,
		"terminal-dashboard": TerminalDashboard,
	},
	computed: {
		userType() {
			return this.$store.state.user.userType;
		},
	},
};
</script>