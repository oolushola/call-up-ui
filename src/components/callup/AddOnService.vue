<template>
	<section :id="addOnId" role="tabpanel" class="body" :class="className">
		<div class="table-responsive">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>SN</th>
						<th>Service</th>
						<th>Charges</th>
						<th class="text-center">No of Days</th>
						<th class="text-center">Sub Charge</th>
					</tr>
				</thead>
				<tbody>
					<add-on-service-item
						v-for="(service, index) in addOnServices"
						:addOnService="service.addOn"
						:amount="service.amount"
						:key="service.addOn"
						:counter="index"
						@addToCart="getSelectedItem"
					></add-on-service-item>
					<tr>
						<td colspan="3">&nbsp;</td>
						<td class="font-weight-bold">Total</td>
						<td class="font-weight-bold text-center">
							&#x20A6;{{ currencyFormatter(totalAddOn) }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="actions clearfix">
			<button class="btn btn-danger btn-sm me-1" @click="proceedToPrevious">
				Previous
			</button>
			<button class="btn btn-primary btn-sm me-1" @click="previewAndCheckout">
				Next
			</button>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";
import AddOnServiceItem from "../../components/callup/AddOnServiceItem.vue";
export default {
	props: {
		addOnId: { require: true, type: String },
		className: { require: true, type: String },
		bookingDetails: { require: true, type: Object },
	},
	components: {
		"add-on-service-item": AddOnServiceItem,
	},
	data() {
		return {
			message: "",
			formData: {},
			selectedServices: [],
			total: 0,
		};
	},
	methods: {
		proceedToPrevious() {
			this.$emit("navigator", {
				message: "back",
				formData: this.formData,
			});
		},
		async previewAndCheckout() {
			const callUpReq = await this.$store.dispatch("bookCallUpRequest", {
				...this.bookingDetails,
				selectedServices: this.selectedServices,
			});
			let response = []
			if (callUpReq.status === 201) {
				callUpReq.data.map(booking => {
					response.push(booking._id)
				})
				localStorage.setItem("bookings", JSON.stringify(response))
				this.$router.push({
					name: "previewCallUp",
				});
			}
		},
		getSelectedItem(value) {
			const serviceIndex = this.selectedServices.findIndex(
				(service) => service.addOn === value.addOn
			);
			if (value.days > 0) {
				if (serviceIndex < 0) {
					this.selectedServices.push(value);
				} else {
					this.selectedServices[serviceIndex] = value;
				}
			} else {
				this.selectedServices.splice(serviceIndex, 1);
			}
		},
	},
	computed: {
		...mapGetters({
			addOnServices: "addOnServiceList",
		}),
		totalAddOn() {
			let total = 0;
			if (this.selectedServices.length <= 0) {
				return total;
			} else {
				return this.selectedServices
					.map((addOn) => addOn.subCharge)
					.reduce((sum, val) => sum + val, 0);
			}
		},
	},

	async mounted() {
		this.$store.dispatch("fetchAddOnServices");
	},
};
</script>