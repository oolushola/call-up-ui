<template>
	<modal>
		<template #modalHeader>
			<h4>{{ selectedBooking.truckInfo.plateNo.toUpperCase() }} - Call Up</h4>
		</template>
		<form>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group m-2">
						<label for="category">Call Out Category</label>
						<select class="form-control form-select" v-model="callOutType">
							<option
								v-for="category in bookingCategories"
								:key="category._id"
								:value="{ _id: category._id, name: category.name }"
							>
								{{ capitalizer(category.name) }}
							</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group m-2">
						<label for="journey-code">Terminal</label>
						<select class="form-control" v-model="selectedTerminal">
							<option v-for="terminal in terminals" :key="terminal._id">
								{{ capitalizer(terminal.name) }}
							</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group m-2">
						<label for="category">Pre Gate Park</label>
						<select class="form-control form-select">
							<option>...</option>
							<option
								v-for="park in pregateParks"
								:key="park._id"
								:value="park._id"
							>
								{{ capitalizer(park.name) }}
							</option>
						</select>
					</div>
				</div>
				<div
					class="col-md-6"
					v-if="
						callOutType.name === 'Arewa' ||
						callOutType.name === 'Fish' ||
						callOutType.name === 'Authority to Load'
					"
				>
					<div class="form-group m-2">
						<label for="journey-code">Booking Reference No.</label>
						<input type="text" class="form-control" />
					</div>
				</div>
				<div class="col-md-6" v-else>
					<div class="form-group m-2">
						<label for="journey-code">Container No(s)</label>
						<input type="text" class="form-control" />
					</div>
				</div>
			</div>
		</form>
	</modal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	props: {
		selectedBooking: {
			type: Object,
			require: true,
		},
	},
	data() {
		return {
			callOutType: this.selectedBooking.bookingInfo.bookingCategoryId,
			selectedTerminal: this.capitalizer(
				this.selectedBooking.bookingInfo.terminalId.name
			),
		};
	},
	computed: {
		...mapGetters({
			bookingCategories: "bookingCategoryList",
			terminals: "terminalList",
		}),
		pregateParks() {
			let myParks = [];
			const terminalInfo = this.terminals.find(
				(terminal) => terminal.name === this.selectedTerminal.toLowerCase()
			);
			if (terminalInfo) {
				terminalInfo.parks.filter((park) => {
					const parkType = park.parkType.findIndex(
						(parkType) => parkType === "Pre-gate"
					);
					if (parkType >= 0) {
						myParks.push(park);
					}
				});
				return myParks;
			}
			return myParks;
		},
	},
	methods: {
		...mapActions({
			fetchBookingCategories: "fetchBookingCategories",
			fetchTerminals: "fetchTerminals",
		}),
	},
	async mounted() {
		await this.fetchBookingCategories();
		await this.fetchTerminals();
	},
};
</script>

<style scoped>
input,
select {
	border-radius: 0;
}
</style>