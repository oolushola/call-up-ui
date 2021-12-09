<template>
	<teleport to="body">
		<modal>
			<div class="mb-2">
				<h4>Transaction Ref: {{ transactionRef }}</h4>
				<h4 class="mt-4 mb-4">
					Amount Due: &#x20A6;{{ currencyFormatter(totalAmountDue) }}
				</h4>
				<label>Payment Method</label>
				<div class="row">
					<div class="col-xl-4 col-sm-6">
						<div class="mb-3">
							<label class="card-radio-label mb-2">
								<input
									type="radio"
									value="wallet"
									v-model="paymentMethod"
									name="paymentMethod"
									class="card-radio-input"
									:disabled="availableBalance < totalAmountDue"
								/>
								<div class="card-radio">
									<div>
										<i class="font-size-24 text-warning align-middle me-2"></i>
										<span>Wallet <span class="badge rounded-pill bg-danger p-2" v-if="availableBalance < totalAmountDue">Insufficient fund</span></span>
									</div>
								</div>
							</label>
						</div>
					</div>

					<div class="col-xl-4 col-sm-6">
						<div class="mb-3">
							<label class="card-radio-label mb-2">
								<input
									type="radio"
									value="paystack"
									v-model="paymentMethod"
									name="paymentMethod"
									class="card-radio-input"
								/>
								<div class="card-radio">
									<div>
										<i class="font-size-24 text-primary align-middle me-2"></i>
										<span>Paystack</span>
									</div>
								</div>
							</label>
						</div>
					</div>
					<!-- <span class="text-danger"
						><i class="bx bx-x-circle"></i> You need to select a payment
						processor</span
					> -->
				</div>
			</div>
			<VuePaystack
				v-if="isPaystack"
				:amount="totalAmountDue * 100"
				:email="$store.state.user.email"
				firstname="Callup"
				:lastname="$store.state.user.name"
				:paystack-key="paystackKey"
				:reference="transactionRef"
				:callback="callback"
				:close="closePayStack"
				>Make Payment</VuePaystack
			>

			<template #modalFooter>
				<button class="btn btn-primary d-block" @click="pay">Pay Now</button>
			</template>
		</modal>
	</teleport>
</template>

<script>
import VuePaystack from "vue-paystack2";
export default {
	components: {
		VuePaystack,
	},
	props: {
		bookingId: {
			type: String,
			require: true,
		},
		addOnServices: {
			require: true,
			type: Array,
		},
		stops: {
			require: true,
			type: Array,
		},
		charge: {
			require: true,
			type: Number
		}
	},
	data() {
		return {
			transactionRef: this.generateTransactionRef(),
			paymentMethod: "",
			isPaystack: false,
			paystackKey: process.env.VUE_APP_PAYSTACK_KEY
		};
	},
	computed: {
		totalAddOn() {
			return this.addOnServices
				.map((addOn) => addOn.subCharge)
				.reduce((sum, val) => sum + val, 0);
		},
		totalAmountDue() {
			return (
				this.charge + (this.charge * this.stops.length) + this.totalAddOn
			);
		},
	},
	methods: {
		pay() {
			if (this.paymentMethod === "wallet") {
				//proceed to checkout directly
			}
			if (this.paymentMethod === "paystack") {
				this.isPaystack = true;
			}
		},
		callback(response) {
			this.$emit("displayPaymentResponse", {
				response: response,
				status: "success",
				tx_ref: this.transactionRef,
				amount: this.totalAmountDue,
				paymentMethod: this.paymentMethod,
				bookingId: this.bookingId
			});
		},
		closePayStack() {
			this.$emit("displayPaymentResponse", {
				status: "failed",
				tx_ref: this.transactionRef,
				amount: this.totalAmountDue,
				paymentMethod: this.paymentMethod,
				bookingId: this.bookingId
			});
		},
	},
};
</script>