<template>
	<section class="card">
		<spinner v-if="isLoading" />
		<h4 v-else-if="!unionInfo" class="p-2 me-2 text-info text-center">
			You have not added any truck union.
		</h4>
		<div class="card-body" v-else>
			<table class="table table-striped">
				<thead>
					<tr>
						<th class="bg-warning">{{ unionInfo.acronym.toUpperCase() }}</th>
						<th class="text-end bg-warning" @click="editHandler">
							<i class="bx bx-pencil bx-sm pointer"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="2">
							<h3>{{ capitalizer(unionInfo.name) }}</h3>
						</td>
					</tr>
					<tr>
						<td>{{ unionInfo.contact.email }}</td>
						<td>
							<span
								class="badge bg-primary p-2 me-2"
								v-for="phoneNo in unionInfo.contact.phoneNos"
								:key="phoneNo"
								>{{ phoneNo }}</span
							>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							{{ unionInfo.contact.address }}
						</td>
					</tr>
					<tr class="text-danger">
						<td>
							<span class="text-end">
								Note: Only one union can be associated to your account.</span
							>
						</td>
						<td class="text-end">
							<i class="bx bxs-error-alt bx-tada bx-sm"></i>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters({
			isLoading: "getFetchResource",
			unionInfo: "getAddedUnion",
		}),
	},
	methods: {
		...mapActions({
			fetchAccountUnion: "fetchAccountUnion",
		}),
		editHandler() {
			this.$emit("editTruckUnion", {
				...this.unionInfo,
				onEdit: true,
			});
		},
	},
	beforeMount() {
		this.fetchAccountUnion();
	},
};
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
</style>