<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title">Manage Park Activities</h4>
					<p class="card-title-desc"></p>
					<spinner v-if="isExpectedParkLoading" />
					<div v-else class="table-responsive">
						<table class="table table-striped mb-0 table-nowrap">
							<thead>
								<tr>
									<th>SN</th>
									<th>Park</th>
									<th>Booking Date</th>
									<th>Truck Name</th>
									<th>Owned By</th>
									<th>Plate No.</th>
									<th class="text-center">Action</th>
									<th>Contact Information</th>
								</tr>
							</thead>
							<tr v-show="getExpectedTrucks.length === 0">
								<td colspan="10" class="text-danger fw-bold me-3 pt-3 text-center">
									<i class="bx bxs-error-alt"></i> You have no truck expectations. 
								</td>
							</tr>
							<expected-trucks-item
								v-for="(booking, index) in getExpectedTrucks"
								:key="booking.bookings._id"
								:counter="index"
								:bookingInfo="booking"
								@activityModal="activityModalDeterminant"
							/>
						</table>
					</div>
				</div>
			</div>
		</div>
		<park-activity-modal
			v-if="showModal"
			:bookingInfo="bookingInfo"
		></park-activity-modal>
	</div>
</template>

<script>
import ExpectedTrucksItem from "../../../components/Facilities/InTransit/ParkActivityItem.vue";
import ParkActivityModal from "./ParkActivityModal.vue";
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			isExpectedParkLoading: this.$store.getters.getParkResource,
			bookingInfo: {},
		};
	},
	methods: {
		activityModalDeterminant(value) {
			this.$store.state.displayModal = true;
			this.bookingInfo = value;
		},
	},
	components: {
		"expected-trucks-item": ExpectedTrucksItem,
		"park-activity-modal": ParkActivityModal,
	},
	computed: {
		showModal() {
			return this.$store.state.displayModal;
		},
		...mapGetters({
			getExpectedTrucks: "getExpectedTrucks",
		}),
	},
	async mounted() {
		this.$store.dispatch("fetchExpectedTrucks");
	},
};
</script>