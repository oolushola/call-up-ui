<template>
	<main v-if="booking.bookingQuery">
		<div class="table-responsive mb-3 text-center">
			<table
				class="table table-striped card-bg mb-2"
				style="font-family: verdana"
			>
				<tbody>
					<tr class="p-0">
						<td>Truck Name</td>
						<td>Plate Number</td>
						<td>Journey Code</td>
					</tr>
					<tr>
						<td class="bookingLabel">
							{{ capitalizer(booking.truckInfo.truckName) }}
						</td>
						<td class="bookingLabel">
							{{ booking.truckInfo.plateNo.toUpperCase() }}
						</td>
						<td class="bookingLabel">
							{{ booking.bookingQuery.journeyCode.toUpperCase() }}
						</td>
					</tr>
					<tr class="p-0">
						<td>Expected Date of Arrival</td>
						<td>Exit Date</td>
						<td>Payment Status</td>
					</tr>
					<tr>
						<td class="bookingLabel">
							{{ booking.bookingQuery.expectedDateOfArrival }}
						</td>
						<td class="bookingLabel">
							{{
								timeConverter(
									dateCalculator(
										new Date(booking.bookingQuery.expectedDateOfArrival),
										booking.bookingQuery.parkStayDuration
									)
								)
							}}
						</td>
						<td class="bookingLabel text-danger">Paid</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="table-responsive text-center">
			<table
				class="table table-border card-bg mb-2"
				style="font-family: verdana"
			>
				<tbody>
					<tr class="p-0">
						<td>Holding Bay</td>
						<td>Pregate Destination Park</td>
						<td>Container / VEP NO</td>
					</tr>
					<tr>
						<td class="bookingLabel">
							{{ capitalizer(booking.bookingQuery.parkId.name) }}
						</td>
						<td class="bookingLabel">NA</td>
						<td class="bookingLabel">NA</td>
					</tr>
					<tr class="p-0">
						<td>Ticket Tag</td>
						<td>Booking Category</td>
					</tr>
					<tr>
						<td class="bookingLabel">
							{{ booking.bookingQuery._id.substr(15, 20).toUpperCase() }}
						</td>
						<td class="bookingLabel">
							{{ booking.bookingQuery.bookingCategoryId.name }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="table-responsive text-center">
			<table
				class="table table-border card-bg mb-2"
				style="font-family: verdana"
			>
				<tbody>
					<tr class="p-0">
						<td>Port Destination</td>
						<td>Terminal</td>
						<td>Booking Date</td>
					</tr>
					<tr>
						<td class="bookingLabel">
							{{ capitalizer(booking.bookingQuery.terminalId.name) }}
						</td>
						<td class="bookingLabel">NA</td>
						<td class="bookingLabel">
							{{
								new Date(booking.bookingQuery.createdAt)
									.toUTCString()
									.substring(0, 26)
							}}
						</td>
					</tr>
					<tr>
						<td colspan="3">
							VALIDITY: 72 Hours for FLATBEDS. 7 Days for Empties. 2Weeks for
							Export after left pre gate.
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div style="display: flex; align-content: center; padding: 0 10px">
			<i class="bx bx-cut"></i>
			<div
				style="
					border-top: 2px dashed black;
					width: 100%;
					padding: 3px 0;
					top: 5px;
					position: relative;
				"
			></div>
		</div>

		<div class="table-responsive text-center">
			<table
				class="table table-border card-bg mb-2"
				style="font-family: verdana"
			>
				<tbody>
					<tr class="p-0">
						<td>Plate Number</td>
						<td>Journey Code</td>
						<td>Booking Number</td>
					</tr>
					<tr>
						<td class="bookingLabel">
							{{ booking.truckInfo.plateNo.toUpperCase() }}
						</td>
						<td class="bookingLabel">
							{{ booking.bookingQuery.journeyCode.toUpperCase() }}
						</td>
						<td class="bookingLabel">
							{{ booking.bookingQuery.bookingNo.toUpperCase() }}
						</td>
					</tr>
				</tbody>
			</table>
			<div style="display: flex; justify-content: space-between">
				<img :src="booking.bookingQuery.qrCode" height="90" />
				<span class="logo-sm">
					<img
						src="../../../assets/images/main-logo.png"
						height="80"
						class="m-1"
					/>
				</span>
			</div>
		</div>
	</main>
</template>


<script>
export default {
	props: {
		booking: {
			type: Object,
			default: () => {
				return {};
			},
		},
	},
};
</script>

<style scoped>
.card-bg {
	background: rgba(123, 114, 108, 0.1);
}
.bookingLabel {
	font-size: 16px;
	font-family: verdana;
	font-weight: bold;
}
</style>