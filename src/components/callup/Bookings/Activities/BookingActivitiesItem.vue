<template>
	<tr>
		<th scope="row">{{ counter + 1 }}</th>
		<td>{{ booking.truck.plateNo.toUpperCase() }}</td>
		<td>{{ capitalizer(booking.bookingCategory) }}</td>
		<td>{{ capitalizer(booking.terminal) }}</td>
		<td>{{ capitalizer(booking.park) }}</td>
		<td class="text-center">
			<i
				class="bx bxs-check-circle bx-sm text-success"
				v-if="booking.paymentStatus"
			></i>
			<i class="bx bxs-error-alt bx-sm bx-tada text-danger" v-else></i>
		</td>
		<td>
			{{ booking.expectedDateOfArrival }} {{ booking.expectedTimeOfArrival }}
		</td>
		<td class="text-center">
			<button
				class="btn btn-sm btn-outline-success"
				@click="generateReceipt(booking._id)"
				v-if="booking.paymentStatus"
			>
				<span class="bx bx-printer bx-sm"></span>
			</button>
			<button
				class="btn btn-info btn-sm"
				v-else
				@click="previewToContinue(booking._id)"
			>
				CONTINUE
			</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		booking: {
			type: Object,
			require: true,
		},
		counter: {
			type: Number,
			require: true,
		},
	},
	methods: {
		previewToContinue(bookingId) {
			localStorage.setItem("bookings", JSON.stringify([bookingId]));
			this.$router.push({
				name: "previewCallUp",
			});
		},
		generateReceipt(bookingId) {
			localStorage.setItem("bookings", JSON.stringify([bookingId]));
			this.$router.push({
				name: "holdingBayReceipt",
				params: {
					bookingId: bookingId
				}
			})
		}
	},
};
</script>