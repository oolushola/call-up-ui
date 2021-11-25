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
					<div
						class="col-xl-4 col-sm-4"
						v-if="availableBalance >= totalAmountDue"
					>
						<div class="mb-3">
							<label class="card-radio-label mb-2">
								<input
									type="radio"
									value="wallet"
									v-model="paymentMethod"
									name="paymentMethod"
									class="card-radio-input"
								/>
								<div class="card-radio">
									<div>
										<i class="font-size-24 text-primary align-middle me-2"></i>
										<span>Wallet</span>
									</div>
								</div>
							</label>
						</div>
					</div>

					<div class="col-xl-4 col-sm-4">
						<div class="mb-3">
							<label class="card-radio-label mb-2">
								<input
									type="radio"
									value="flutterwave"
									v-model="paymentMethod"
									name="paymentMethod"
									class="card-radio-input"
								/>
								<div class="card-radio">
									<div>
										<i class="font-size-24 text-warning align-middle me-2"></i>
										<span>Flutterwave</span>
									</div>
								</div>
							</label>
						</div>
					</div>

					<div class="col-xl-4 col-sm-4">
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
					<span class="text-danger"
						><i class="bx bx-x-circle"></i> You need to select a payment
						processor</span
					>
				</div>
			</div>
			<VuePaystack v-if="isPaystack" :amount="totalAmountDue * 100" email="odejobi.olushola@gmail.com" firstname="olushola" lastname="odejobi" paystack-key="pk_test_c14365e63a366ae31f2053544faea6f8c14abb8d" :reference="transactionRef" :callback="callback" :close="closePayStack">Make Payment</VuePaystack>

			<template #modalFooter>
				<button class="btn btn-primary d-block" @click="pay">Pay Now</button>
			</template>
		</modal>
	</teleport>
</template>

<script>
import VuePaystack from 'vue-paystack2'
export default {
	components: {
		VuePaystack
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
	},
	data() {
		return {
			transactionRef: this.generateTransactionRef(),
			paymentMethod: "",
			parkCharge: 5000,
			isPaystack: false
		};
	},
	computed: {
		totalAddOn() {
			return this.addOnServices
				.map((addOn) => addOn.subCharge)
				.reduce((sum, val) => sum + val, 0);
		},
    totalAmountDue() {
      return this.parkCharge + (this.parkCharge * this.stops.length) + this.totalAddOn
    }
	},
	methods: {
		pay() {
			if (this.paymentMethod === "wallet") {
				//proceed to checkout directly
			}
			if (this.paymentMethod === "flutterwave") {
				this.flutterwavePaymentCheckout(
          this.transactionRef,
          this.totalAmountDue,
          `${process.env.VUE_APP_UI_BASE_URL}/payment-verification?booking`,
          this.$store.state.user.name,
          this.$store.state.user.email,
          'Booking',
          ''
        )
			}
			if(this.paymentMethod === 'paystack') {
				this.isPaystack = true
			}
		},
		callback(response) {
			console.log(response)
		},
		closePayStack() {
			console.log("payment closed")
		}
	}
};
</script>