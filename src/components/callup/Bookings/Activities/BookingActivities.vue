<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title">Booking History</h4>
					<p class="card-title-desc">You have 4 pending bookings..</p>

					<div class="table-responsive" style="min-height: 500px">
						<table class="table table-striped mb-0">
							<thead>
								<tr>
									<th>SN</th>
									<th>Plate No</th>
									<th>Booking Category</th>
									<th>Terminal</th>
									<th>Park Name</th>
									<th class="text-center">Payment Status</th>
									<th>Date Called Out</th>
									<th class="text-center">Action</th>
								</tr>
							</thead>
							<tbody>
								<booking-activity-item
									v-for="(booking, index) in bookingActivities"
									:key="booking._id"
									:booking="booking"
									:counter="index"
								/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BookingActivitiesItem from "./BookingActivitiesItem.vue";
import { mapGetters } from "vuex";
export default {
	components: {
		"booking-activity-item": BookingActivitiesItem,
	},
	computed: {
		...mapGetters({
			bookingActivities: "getBookingActivities",
		}),
	},
	mounted() {
		this.$store.dispatch("fetchBookingActivities");
	},
};
</script>