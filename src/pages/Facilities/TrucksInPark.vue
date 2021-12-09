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
							<h4 class="mb-sm-0 font-size-18">Facilities</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item">Parks</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row mb-2">
					<div class="col-md-3">
						<div class="input-group">
							<input
								type="text"
								class="form-control form-control-sm"
								placeholder=""
							/>
							<div class="input-group-text"><i class="bx bx-search"></i></div>
							<div class="input-group-text"><i class="bx bx-download"></i></div>
						</div>
					</div>
					<div class="offset-md-3 col-md-6">
						<div class="input-group">
							<select class="form-control form-control-sm">
								<option>Select Facility Location</option>
								<option>Mob Integrated Services</option>
								<option>Spezial Bau</option>
							</select>
							<input type="date" class="form-control form-control-sm" />
							<input type="date" class="form-control form-control-sm" />
							<div class="input-group-text"><i class="bx bx-search"></i></div>
							<div class="input-group-text">
								<router-link title="Add Park" :to="{ name: 'newPark' }"
									><i class="bx bx-plus-medical"></i>
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Trucks in all parks</h4>
								<p class="card-title-desc">
									You have {{ fetchTrucksInPark.length }} trucks in all parks
								</p>

								<div class="table-responsive" style="min-height: 500px">
									<table class="table table-striped table-nowrap mb-0">
										<thead>
											<tr>
												<th>SN</th>
												<th>Plate No.</th>
												<th class="text-center">Action</th>
												<th>Date Called</th>
												<th>Park</th>
												<th>Terminal</th>
												<th class="text-center">Location</th>
												<th class="text-center">Matched To</th>
												<th class="text-center">Booking Date</th>
												<th>Shared With</th>
												<!-- <th>Pool Status</th> -->
											</tr>
										</thead>
										<trucks-in-park-item
											v-for="(booking, index) in fetchTrucksInParks"
											:counter="index"
											:booking="booking"
											:key="booking.bookingInfo._id"
											@call-up="getCallUp"
										></trucks-in-park-item>
									</table>
								</div>

								<!-- paginate this place. -->
								<paginate />
							</div>
						</div>
					</div>
				</div>
				<call-up-modal
					v-if="displayModal"
					:selectedBooking="selectedBooking"
				></call-up-modal>
			</div>
			<!-- container-fluid -->
		</div>
	</design-layout>
</template>


<script>
import TruckInParksItem from "../../components/Facilities/TrucksInParkItem.vue";
import CallUpModal from "../../components/Facilities/CallUp.vue";
import { mapActions, mapGetters } from "vuex";
export default {
	components: {
		trucksInParkItem: TruckInParksItem,
		callUpModal: CallUpModal,
	},
	data() {
		return {
			selectedBooking: null,
		};
	},
	computed: {
		displayModal() {
			return this.$store.state.displayModal;
		},
		...mapGetters({
			fetchTrucksInParks: "getTrucksInParks",
		}),
	},
	methods: {
		...mapActions({
			fetchTrucksInPark: "fetchTrucksInParks",
		}),
		getCallUp({ bookingInfo, truckInfo }) {
			this.$store.state.displayModal = true;
			this.selectedBooking = { bookingInfo, truckInfo };
		},
	},

	async mounted() {
		await this.fetchTrucksInPark();
	},
};
</script>

<style scoped>
input,
select {
	border-radius: 0;
}
</style>
