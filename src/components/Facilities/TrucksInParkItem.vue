<template>
	<tbody>
		<tr>
			<th scope="row">{{ counter + 1 }}</th>
			<td>{{ booking.truckInfo.plateNo.toUpperCase() }}</td>
			<td class="text-center">
				<div class="btn-group btn-group-sm" role="group">
					<div class="btn-group" role="group">
						<button
							id="btnGroupVerticalDrop1"
							type="button"
							class="btn btn-danger btn-sm"
							@click="showActionHandler"
						>
							<i class="bx bx-chevron-down"></i>
						</button>
						<div
							class="dropdown-menu"
							:class="showActionDetails"
							@mouseleave="showAction = false"
						>
							<a class="dropdown-item" href="#">Pickup History</a>
							<a class="dropdown-item" href="#">Offense History</a>
							<a
								class="dropdown-item"
								href="javascript:void(0)"
								@click="letsCallUp"
								>Call Up</a
							>
							<a class="dropdown-item" target="_blank">View Image</a>
							<a class="dropdown-item" href="javascript:void(0)"
								>Call Out History</a
							>
						</div>
					</div>
				</div>
			</td>
			<td>
				<span v-if="booking.bookingInfo.dateCalled">{{
					booking.bookingInfo.dateCalled
				}}</span>
				<span v-else>NA</span>
			</td>
			<td>{{ capitalizer(booking.bookingInfo.parkId.name) }}</td>
			<td>{{ capitalizer(booking.bookingInfo.terminalId.name) }}</td>
			<td>{{ booking.bookingInfo.terminalId.contact.address }}</td>
			<td>NA</td>
			<td>
				{{
					new Date(booking.bookingInfo.createdAt).toUTCString().substr(0, 26)
				}}
			</td>
			<td>NA</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: {
		booking: {
			require: true,
			type: Object,
		},
		counter: {
			require: true,
			type: Number,
		},
	},
	data() {
		return {
			showAction: false,
		};
	},
	methods: {
		showActionHandler() {
			this.showAction = !this.showAction;
		},
		displayCallOutModal() {
			this.$store.state.displayModal = true;
			this.showAction = false;
		},
		letsCallUp() {
			this.$emit("callUp", { showCallUpModal: true, ...this.booking });
			this.showAction = false;
		},
	},
	computed: {
		showModal() {
			return this.$store.state.displayModal;
		},
		showActionDetails() {
			if (this.showAction) {
				return "show";
			}
			return "d-none";
		},
	},
};
</script>