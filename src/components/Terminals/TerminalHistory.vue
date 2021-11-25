<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title">Assigned TDO Logs</h4>
					<p class="card-title-desc">
						Hi Kaya Africa, you have 5 TDO's assigned to you.
					</p>
					<div class="table-responsive" style="max-height: 550px">
						<table class="table mb-0">
							<thead>
								<tr>
									<th>#</th>
									<th class="text-center">Date Uploaded</th>
                  <th class="text-center">Terminal</th>
									<th>Owner</th>
									<th class="text-center">Date Matched</th>
                  <th class="text-center">Called In</th>
									<th>Trans No</th>
									<th>Container Type</th>
									<th>Line Operator</th>
									<th>Container No.</th>
									<th>Size</th>
									<th>Weight(KG)</th>
									<th class="text-center">Match Status</th>
									<th>Location</th>
								</tr>
							</thead>
							<tbody>
								<terminal-history-item
									v-for="(tdo, index) in getTdoHistory"
									:tdo="tdo"
									:key="tdo._id"
									:counter="index"
								/>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TerminalHistoryItem from "./TerminalHistoryItem.vue";
export default {
	components: {
		"terminal-history-item": TerminalHistoryItem,
	},
	computed: {
		...mapGetters({
			getTdoHistory: "getTdoHistory",
		}),
	},

	methods: {
		...mapActions({
			fetchTdoHistory: "fetchTdoHistory",
		}),
	},

	async mounted() {
		await this.fetchTdoHistory();
	},
};
</script>

<style>
  th, td {
    white-space: nowrap;
  }
</style>