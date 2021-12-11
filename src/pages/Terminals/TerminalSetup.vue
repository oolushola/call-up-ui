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
							<h4 class="mb-sm-0 font-size-18">Setup Your Terminal.</h4>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row">
					<div class="col-md-6">
						<terminal-form :onEdit="terminalInfo"></terminal-form>
					</div>
					<div class="col-md-6">
						<terminal-preview
							@editTerminal="updateTerminalInfo"
							class="m-0"
						></terminal-preview>
						<div class="card">
							<div class="card-body">
								<div class="row">
									<div class="col-md-6 text-center">
										<span
											class="d-block text-primary hover"
											@click="displayDailyCapacity"
											>Setup Daily Capacity <i class="bx bxs-ship bx-burst"></i
										></span>
									</div>
									<div class="col-md-6 text-center">
										<span
											class="d-block text-info hover"
											@click="displayEmptyCapacity"
											>Setup Empty Daily <i class="bx bx-package bx-burst"></i
										></span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<daily-capacity
						v-if="dailyCapacityModal && showModal"
						:terminal="terminal"
					></daily-capacity>
					<empty-capacity
						v-if="emptyCapacityModal && showModal"
						:terminal="terminal"
					></empty-capacity>
				</div>
			</div>
		</div>
	</design-layout>
</template>

<script>
import TerminalForm from "../../components/Terminals/Setup/TerminalForm.vue";
import TerminalPreview from "../../components/Terminals/Setup/TerminalPreview.vue";
import DailyCapacity from "../../components/Terminals/Setup/DailyCapacity.vue";
import EmptyCapactity from "../../components/Terminals/Setup/EmptyCapacity.vue";
export default {
	components: {
		"terminal-form": TerminalForm,
		"terminal-preview": TerminalPreview,
		"daily-capacity": DailyCapacity,
		"empty-capacity": EmptyCapactity,
	},
	data() {
		return {
			terminalInfo: {},
			userType: this.$store.state.user.userType,
			dailyCapacityModal: false,
			emptyCapacityModal: false,
		};
	},
	computed: {
		showModal() {
			return this.$store.state.displayModal;
		},
		terminal() {
			return this.$store.getters.getUserTerminal;
		},
	},
	methods: {
		displayDailyCapacity() {
			this.$store.state.displayModal = true;
			this.dailyCapacityModal = true;
			this.emptyCapacityModal = false;
		},
		displayEmptyCapacity() {
			this.$store.state.displayModal = true;
			this.dailyCapacityModal = false;
			this.emptyCapacityModal = true;
		},
		updateTerminalInfo(value) {
			this.terminalInfo = value;
		},
	},
};
</script>

<style scoped>
.hover:hover {
	text-decoration: underline;
	cursor: pointer;
}
</style>

