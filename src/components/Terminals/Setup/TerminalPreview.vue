<template>
	<section class="card">
		<spinner v-if="isLoading" />
		<h4 v-else-if="!terminal" class="p-2 me-2 text-info text-center">
			You have not added any truck union.
		</h4>
		<div class="card-body" v-else>
			<table class="table table-striped">
				<thead>
					<tr>
						<th class="bg-warning">
							<h3>{{ capitalizer(terminal.name) }}</h3>
						</th>
						<th class="text-end bg-warning" @click="editHandler">
							<i class="bx bx-pencil bx-sm pointer"></i>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<span v-if="!terminal.email" class="text-danger"
								>Email: Not Available</span
							>
							<span v-else>{{ terminal.email }}</span>
						</td>
						<td>
							<span
								class="badge bg-primary p-2 me-2"
								v-for="phoneNo in terminal.contact.phoneNos"
								:key="phoneNo"
								>{{ phoneNo }}</span
							>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							{{ terminal.contact.address }}
						</td>
					</tr>
					<tr class="text-danger">
						<td>
							<span class="text-end">
								Note: Only one terminal can be associated to your account.</span
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
			terminal: "getUserTerminal",
		}),
	},
	methods: {
		...mapActions({
			fetchTerminal: "fetchTerminal",
		}),
		editHandler() {
			this.$emit("editTerminal", {
				...this.terminal,
				onEdit: true,
			});
		},
	},
	beforeMount() {
		this.fetchTerminal();
	},
};
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
</style>