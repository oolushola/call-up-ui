<template>
	<section v-if="stops.length > 0">
		<div class="py-2 mt-3">
			<h3 class="font-size-15 fw-bold">Stop Over</h3>
		</div>
		<div class="table-responsive">
			<table class="table table-nowrap table-bordered">
				<thead>
					<tr>
						<th style="width: 70px">No.</th>
						<th>Park</th>
						<th>Contact</th>
						<th>Location</th>
						<th class="text-center">Expected Date of Arrival</th>
						<th class="text-center">Expected Date of Exit</th>
						<th class="text-center">Day(s)</th>
						<th class="text-end">Action</th>
					</tr>
				</thead>
				<tbody>
					<booking-stop-over-item
						v-for="(stop, index) in stops"
						:bookingId="bookingId"
						:counter="index"
						:stop="stop"
						:key="stop._id"
					/>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
import BookingStopOverItem from "./BookingStopOverItem.vue";
export default {
	components: {
		"booking-stop-over-item": BookingStopOverItem,
	},
	props: {
		stops: {
			type: Array,
			require: true,
		},
		bookingId: {
			type: String,
			require: true,
		},
	},
};
</script>