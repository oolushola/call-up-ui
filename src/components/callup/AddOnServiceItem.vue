<template>
	<tr>
		<td>{{ counter + 1 }}</td>
		<td>{{ addOnService }}</td>
		<td>&#x20A6;{{ currencyFormatter(amount) }}</td>
		<td class="text-center">
			<input
				v-model="noOfDays"
				class="form-control form-control-sm"
				type="number"
        min="0"
				@change="calculateSubCharge"
			/>
		</td>
		<td class="text-center">
			&#x20A6;{{ currencyFormatter(subCharge) }}
		</td>
	</tr>
</template>

<script>
export default {
	props: {
    counter: { require: true, type: Number },
		addOnService: { require: true, type: String },
		amount: { require: true, type: Number },
	},
	data() {
		return {
			noOfDays: "",
			subCharge: 0,
			selectedService: null,
		};
	},
	methods: {
		calculateSubCharge() {
			this.subCharge = this.noOfDays * this.amount;
      this.addToCart()
			return this.subCharge;
		},

		addToCart() {
      this.selectedService = {
        addOn: this.addOnService,
        amount: this.amount,
        days: this.noOfDays,
        subCharge: this.subCharge,
      };
      this.$emit("addToCart", this.selectedService)
		},
	},
};
</script>
