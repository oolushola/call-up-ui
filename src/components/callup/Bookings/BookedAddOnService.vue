<template>
	<section v-if="services.length > 0">
		<div class="py-2 mt-3">
			<h3 class="font-size-15 fw-bold">Add-On Services</h3>
		</div>
		<div class="table-responsive">
			<table class="table table-nowrap table-striped">
				<thead>
					<tr>
						<th style="width: 70px">No.</th>
						<th>Item</th>
						<th class="text-end">Price</th>
						<th class="text-end">Action</th>
					</tr>
				</thead>
				<tbody>
					<booked-add-on-service-item
						v-for="(service, index) in services"
						:key="service._id"
						:counter="index"
						:service="service"
						:bookingId="bookingId"
					/>
					<tr>
						<td colspan="3" class="border-0 text-end">
							<strong>Total</strong>
						</td>
						<td class="border-0 text-end">
							<h4 class="m-0">
								&#x20A6;{{ currencyFormatter(totalAddOnService(services)) }}
							</h4>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
import BookedAddOnServiceItem from "./BookedAddOnServiceItem.vue";
export default {
	components: {
		"booked-add-on-service-item": BookedAddOnServiceItem,
	},
	props: {
		services: {
			type: Object,
			require: true,
		},
		bookingId: {
			type: String,
			require: true
		}
	},
	methods: {
		totalAddOnService(object) {
			return object
				.map((addOn) => addOn.subCharge)
				.reduce((sum, val) => sum + val, 0);
		},
	},
};
</script>