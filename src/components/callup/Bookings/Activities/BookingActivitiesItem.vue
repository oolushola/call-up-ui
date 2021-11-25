<template>
	<tr>
		<th scope="row">{{ counter + 1 }}</th>
		<td>{{ booking.truck.plateNo.toUpperCase() }}</td>
		<td>{{ capitalizer(booking.bookingCategory) }}</td>
		<td>{{ capitalizer(booking.terminal) }}</td>
		<td>{{ capitalizer(booking.park) }}</td>
		<td>
			<span v-if="booking.paymentStatus"  class="bg-primary me-0 text-white p-3 fw-bold">
				Paid <i class="bx bx-check-circle"></i>
			</span>
			<span v-else class="bg-warning p-3 fw-bold text-white me-0">Unpaid <i class="bx bx-shield-x"></i> </span>
		</td>
		<td>{{ booking.expectedDateOfArrival }} {{ booking.expectedTimeOfArrival }}</td>
		<td class="text-center">
			<router-link :to="{ name: 'park'}" v-if="booking.paymentStatus">Show Printer</router-link>
			<button class="btn btn-info btn-sm" @click="previewToContinue(booking._id)">CONTINUE</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		booking: {
			type: Object,
			require: true
		},
		counter: {
			type: Number,
			require: true
		}
	},
	methods: {
		previewToContinue(bookingId) {
			localStorage.setItem("bookings", JSON.stringify([bookingId]))
			this.$router.push({
				name: 'previewCallUp'
			})
		}
	}
}
</script>