<template>
	<section :class="className">
		<form>
			<div class="row">
				<div class="col-lg-6">
					<div class="mb-3">
						<label>What are you booking for?</label>
						<select
							class="form-control form-select"
							v-model="formData.bookingCategoryId"
						>
							<option value="">Choose a Booking Category</option>
							<option
								v-for="category in bookingCategories"
								:value="category._id"
								:key="category._id"
							>
								{{ category.name }}
							</option>
						</select>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label for="basicpill-phoneno-input">Select Truck</label>
						<select
							class="form-control form-select form-control-sm"
							v-model="formData.selectedTruck"
							@change="addTrucks"
						>
							<option value="">Select Trucks</option>
							<option
								v-for="truck in availableTrucks"
								:key="truck._id"
								:value="truck"
							>
								{{ truck.plateNo.toUpperCase() }}
							</option>
						</select>
					</div>
				</div>

				<div class="col-lg-12" v-show="trucks.length > 0">
					<div class="mb-3">
						<span
							v-for="(truck, index) in trucks"
							:key="truck._id"
							class="
								bg-info
								badge
								rounded-pill
								p-2
								d-inline-block
								me-2
								text-white
							"
						>
							{{ truck.plateNo.toUpperCase() }}
							<button class="btn-close" @click="removeTruck(index)"></button>
						</span>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="mb-3">
						<label for="basicpill-firstname-input">Port Terminal</label>
						<select
							@change="getParks"
							v-model="formData.terminalId"
							class="form-control form-select form-control-sm"
						>
							<option value="">Choose a Terminal</option>
							<option
								v-for="terminal in terminals"
								:key="terminal._id"
								:value="terminal._id"
							>
								{{ capitalizer(terminal.name) }}
							</option>
						</select>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="mb-3">
						<label>Location From</label>
						<input
							type="text"
							class="form-control"
							v-model="formData.fromWhere"
						/>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label
							>Staying for (Days)
							<i
								v-if="formData.parkStayDuration"
								class="bx bxs-info-circle text-danger bx-tada"
							></i>
						</label>
						<select
							v-model.lazy.number="formData.parkStayDuration"
							class="form-control form-select"
						>
							<option v-for="n in 14" :key="n">{{ n }}</option>
						</select>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>Expected Date of Arrival </label>
						<input
							type="date"
							class="form-control"
							v-model="formData.expectedDateOfArrival"
						/>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>Expected Time of Arrival</label>
						<input
							type="time"
							class="form-control"
							v-model="formData.expectedTimeOfArrival"
						/>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>&nbsp;</label>
						<button
							type="button"
							@click="increaseStopOver"
							class="btn btn-danger d-block"
						>
							<i class="bx bx-plus-medical"></i>Add Stop Over
						</button>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12" v-if="formData.expectedDateOfArrival">
					<div class="col-mb-2">
						<p class="text-danger me-0">
							<strong
								>You are expected to gate out to port by:
								{{
									dateCalculator(
										new Date(formData.expectedDateOfArrival),
										formData.parkStayDuration
									)
								}}</strong
							>
						</p>
					</div>
				</div>
			</div>
			<div
				class="row mt-3"
				v-for="(stop, index) in formData.stopOverParks"
				:key="stop"
			>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>Stop</label>
						<select
							class="form-select"
							v-model="formData.stopOverParks[index].parkId"
						>
							<option value="">Choose a Park</option>
							<option
								v-for="holdingBay in availableHoldingBays"
								:value="holdingBay._id"
								:key="holdingBay._id"
							>
								{{ capitalizer(holdingBay.name) }}
							</option>
						</select>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>Staying for (days)</label>
						<input
							type="number"
							class="form-control"
							v-model="formData.stopOverParks[index].stayingFor"
						/>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>Expected Date of Arrival</label>
						<input
							type="datetime-local"
							class="form-control"
							v-model="formData.stopOverParks[index].expectedDateOfArrival"
						/>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="mb-3">
						<label>&nbsp;</label>
						<button
							type="button"
							@click="removeStop(index)"
							class="btn btn-danger d-block"
						>
							<i class="bx bx-x-circle"></i>
						</button>
					</div>
				</div>
				<div
					class="col-lg-12"
					v-if="formData.stopOverParks[index].expectedDateOfArrival"
				>
					<div class="col-mb-2">
						<p class="text-danger me-0">
							<strong
								>You are expected to exit park by:
								{{
									dateCalculator(
										new Date(
											formData.stopOverParks[index].expectedDateOfArrival
										),
										formData.stopOverParks[index].stayingFor
									)
								}}</strong
							>
						</p>
					</div>
				</div>
			</div>
		</form>
		<div class="actions clearfix">
			<button class="btn btn-primary" @click="proceedToStepTwo">Proceed</button>
		</div>
	</section>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
	props: {
		bookingId: {
			require: true,
			type: String,
		},
		className: {
			require: true,
			type: String,
		},
	},

	setup() {
		return { v$: useVuelidate() };
	},

	validations() {
		return {
			formData: {
				terminalId: { required },
			},
		};
	},

	data() {
		return {
			formData: {
				stopOverParks: [],
				parkId: this.$store.state.selectedHoldingBay,
			},
			parks: [],
			trucks: [],
		};
	},
	computed: {
		terminals() {
			return this.$store.getters.terminalList;
		},
		bookingCategories() {
			return this.$store.getters.bookingCategoryList;
		},
		availableTrucks() {
			return this.$store.getters.availableTrucks;
		},
		availableHoldingBays() {
			return this.$store.getters.getHoldingBays.filter(
				(park) => park._id !== this.formData.parkId
			);
		},
	},

	methods: {
		addTrucks() {
			if (this.formData.selectedTruck === "") return;
			const truck = this.trucks.findIndex(
				(truck) => truck._id === this.formData.selectedTruck._id
			);
			truck < 0 ? this.trucks.push(this.formData.selectedTruck) : null;
		},
		removeTruck(truckIndex) {
			this.trucks.splice(truckIndex, 1);
		},

		increaseStopOver() {
			this.formData.stopOverParks.push({
				parkId: "",
				stayingFor: "",
				expectedDateOfArrival: "",
			});
		},
		removeStop(index) {
			this.formData.stopOverParks.splice(index, 1);
		},
		proceedToStepTwo() {
			this.$emit("stepOneCompleted", { ...this.formData, trucks: this.trucks });
		},
	},

	async mounted() {
		await this.$store.dispatch("fetchTerminals");
		await this.$store.dispatch("fetchBookingCategories");
		await this.$store.dispatch("fetchAvailableTrucks");
	},
	created() {
		document.title = "Book Call Up";
	},
};
</script>
<style scoped>
input,
select {
	border-radius: 0;
}
</style>