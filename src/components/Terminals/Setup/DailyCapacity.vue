<template>
	<modal>
		<template #modalHeader>
			<h4 class="">Daily Capacity Setup</h4>
		</template>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>SN</th>
					<th>Booking Category</th>
					<th>Size</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(category, index) in bookingCategoryList"
					:key="category._id"
				>
					<td>{{ index + 1 }}</td>
					<td>
						{{ category.name }}
					</td>
					<td>
						<input type="text" class="form-control" v-model="volume[index]" />
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
import { mapGetters } from "vuex";
export default {
	props: ["terminal"],
	data() {
		return {
			formData: {
				dailyCapacity: [],
			},
			volume: this.volumes(),
			isLoading: false,
		};
	},
	computed: {
		...mapGetters({
			bookingCategoryList: "bookingCategoryList",
		}),
	},
	methods: {
		volumes() {
			if (this.terminal.dailyCapacity.length === 0) {
				return [];
			}
			let values = [];
			for (let size = 0; size < this.terminal.dailyCapacity.length; size++) {
				let item = this.terminal.dailyCapacity[size].volume;
				values.push(item);
			}
			return values;
		},
		async saveChanges() {
			this.isLoading = true;
			let dailyCap = [];
			for (let i = 0; i < this.bookingCategoryList.length; i++) {
				let value = this.volume[i] ? this.volume[i] : 0;
				dailyCap.push({
					bookingCategory: this.bookingCategoryList[i]._id,
					volume: value,
				});
			}
			await this.$store.dispatch("addTerminalCapacity", {
				dailyCap,
				terminalId: this.terminal._id,
			});
			this.isLoading = false;
		},
	},

	mounted() {
		this.$store.dispatch("fetchBookingCategories");
	},
};
</script>