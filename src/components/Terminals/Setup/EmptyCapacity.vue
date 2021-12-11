<template>
	<modal>
		<template #modalHeader>
			<h4>{{ terminal.name.toUpperCase() }} - Empty Capacity</h4>
		</template>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>&nbsp;</th>
					<th colspan="2" class="text-center">40FT</th>
					<th colspan="2" class="text-center">20FT</th>
				</tr>
				<tr>
					<th>Shipping Line</th>
					<th class="bg-danger text-white">Available</th>
					<th class="bg-danger text-white">Remaining</th>
					<th class="bg-info text-white">Available</th>
					<th class="bg-info text-white">Remaining</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(brand, index) in shippingLines" :key="brand">
					<td>{{ brand }}</td>
					<td>
						<input
							type="text"
							class="form-control"
							placeholder="Available"
							v-model="emptyCapacity[index]._40ftAvailable"
						/>
					</td>
					<td>
						<input
							type="text"
							class="form-control"
							placeholder="Remaining"
							v-model="emptyCapacity[index]._40ftRemaining"
						/>
					</td>
					<td>
						<input
							type="text"
							class="form-control"
							placeholder="Available"
							v-model="emptyCapacity[index]._20ftAvailable"
						/>
					</td>
					<td>
						<input
							type="text"
							class="form-control"
							placeholder="Remaining"
							v-model="emptyCapacity[index]._20ftRemaining"
						/>
					</td>
				</tr>
			</tbody>
		</table>
		<spinner v-if="isLoading" class="d-block" />
		<button :disabled="isLoading" class="btn btn-success" @click="saveChanges">
			Save Changes
		</button>
	</modal>
</template>

<script>
export default {
	props: {
		terminal: {
			require: true,
			type: Object,
		},
	},
	data() {
		return {
			isLoading: false,
			emptyCapacity: this.emptiesForShippingLine(),
			shippingLines: this.$store.state.Terminal.shippingLines,
		};
	},

	methods: {
		emptiesForShippingLine() {
			if (this.terminal.emptyCapacity.length === 0) {
				const shippingLines = this.$store.state.Terminal.shippingLines;
				let empties = [];
				for (let i = 0; i < shippingLines.length; i++) {
					const emptyObj = {
						shippingLine: shippingLines[i],
						_40ftAvailable: 0,
						_40ftRemaining: 0,
						_20ftAvailable: 0,
						_20ftRemaining: 0,
					};
					empties.push(emptyObj);
				}
				return empties;
			}
			return this.terminal.emptyCapacity;
		},
		async saveChanges() {
			this.isLoading = true;
			this.$store.dispatch("updateEmptyCapacity", {
				terminalId: this.terminal._id,
				emptyCap: this.emptyCapacity,
			});
			this.isLoading = false;
		},
	},
};
</script>

<style scoped>
input,
select {
	border-radius: 0;
}
</style>