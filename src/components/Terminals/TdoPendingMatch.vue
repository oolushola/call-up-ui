<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="card">
				<div class="card-body">
					<h4 class="card-title">Assigned TDO Logs</h4>
					<p class="card-title-desc">
						Hi Kaya Africa, you have {{ tdoPendingMatch.length }} Assigned TDO's
						to your clearing agents
					</p>
					<div class="table-responsive">
						<table class="table mb-0">
							<thead>
								<tr>
									<th>#</th>
									<th class="text-center">Date Uploaded</th>
									<th>Assigned To</th>
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
								<tdo-pending-match-item
									v-for="(tdo, index) in tdoPendingMatch"
									:counter="index"
									:tdo="tdo"
									:key="tdo._id"
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
import TdoPendingMatchItem from "./TdoPendingMatchItem.vue";
export default {
	components: {
		"tdo-pending-match-item": TdoPendingMatchItem,
	},

	computed: {
		...mapGetters({
			tdoPendingMatch: "getPendingTdoMatches",
		}),
	},

	methods: {
		...mapActions({
			fetchPendingMatchTdo: "fetchUserPendingMatchTdo",
		}),
	},

	async mounted() {
		await this.fetchPendingMatchTdo();
	},
};
</script>
