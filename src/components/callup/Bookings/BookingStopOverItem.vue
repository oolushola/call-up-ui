<template>
	<tr>
		<td>{{ counter + 1 }}</td>
		<td>{{ capitalizer(stop.parkId.name) }}</td>
		<td>
			<span v-for="phoneNo in stop.parkId.contact.phoneNos" :key="phoneNo">
				<span class="d-inline-block bg-info rounded-pill badge me-1">{{
					phoneNo
				}}</span>
			</span>
		</td>
		<td>{{ stop.parkId.contact.address }}</td>
		<td class="text-center">{{ timeConverter(stop.expectedDateOfArrival) }}</td>
		<td class="text-center">
			{{
				timeConverter(
					dateCalculator(stop.expectedDateOfArrival, stop.stayingFor)
				)
			}}
		</td>
		<td class="text-center">{{ stop.stayingFor }}</td>
		<td class="text-end">
			<button
				class="btn btn-danger btn-sm"
				@click="removeStopOver({ parkId: stop.parkId._id, bookingId })"
			>
				<i class="bx bxs-minus-circle"></i>
			</button>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		stop: {
			type: Object,
			require: true,
		},
		counter: {
			type: Number,
			require: true,
		},
		bookingId: {
			type: String,
			require: true,
		},
	},
  methods: {
    removeStopOver(payload) {
      this.$store.dispatch('removeHoldingBayStopOver', payload)
    }
  }
};
</script>