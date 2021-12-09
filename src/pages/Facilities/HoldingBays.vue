<template>
	<design-layout>
		<div class="page-content">
			<div class="container-fluid">
				<!-- start page title -->
				<div class="row">
					<div class="col-12">
						<div
							class="
								page-title-box
								d-sm-flex
								align-items-center
								justify-content-between
							"
						>
							<h4 class="mb-sm-0 font-size-18">Parks</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item">Holding Bay</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row mb-2">
					<div class="col-md-3">
						<div class="input-group">
							<input
								type="text"
								class="form-control form-control-sm"
								placeholder=""
							/>
							<div class="input-group-text"><i class="bx bx-search"></i></div>
							<div class="input-group-text"><i class="bx bx-download"></i></div>
						</div>
					</div>
					<div class="offset-md-3 col-md-6">
						<div class="input-group">
							<select class="form-control form-control-sm">
								<option>Select Facility Location</option>
								<option>Terminal</option>
								<option>Available for Call Up</option>
							</select>
							<input type="date" class="form-control form-control-sm" />
							<input type="date" class="form-control form-control-sm" />
							<div class="input-group-text"><i class="bx bx-search"></i></div>
							<div class="input-group-text">
								<router-link
									title="Book a Park"
									:to="{ name: 'BookHoldingBay' }"
									><i class="bx bx-plus-medical"></i>
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Holding Bays</h4>
								<p class="card-title-desc"></p>
								<spinner v-if="isLoading" />
								<div class="table-responsive" v-else>
									<table class="table table-striped mb-0 table-nowrap">
										<thead>
											<tr>
												<th>SN</th>
												<th>Name</th>
												<th>Holding Bay</th>
												<th class="text-center">Action</th>
												<th>Contact Information</th>
												<th class="text-center">Capacity</th>
												<th>Park Type</th>
												<th>Park Status</th>
												<th class="text-center">Available Space</th>
											</tr>
										</thead>
										<record-not-found
											v-if="holdingBays.length === 0"
											label="Record not found."
										/>
										<holding-bay-item
											v-else
											v-for="(holdingBay, index) in holdingBays"
											:holdingBay="holdingBay"
											:key="holdingBay._id"
											:counter="index"
											@bookPark="displayModalHandler"
										/>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- container-fluid -->
		</div>

		<modal v-if="showModal">
			<template v-slot:modalHeader>
				<h4
					style="margin-left: 15px"
					class="bg-info d-inline-block text-white p-2"
				>
					{{ parkName }}
				</h4>
			</template>
			<book-holding-bay />
		</modal>
	</design-layout>
</template>


<script>
import { mapGetters } from "vuex";
import BookHoldingBay from "../../pages/BookHoldingBay.vue";
import HoldingBayItem from "../../components/Facilities/HoldingBayItem.vue";
export default {
	components: {
		"book-holding-bay": BookHoldingBay,
		"holding-bay-item": HoldingBayItem,
	},
	computed: {
		showModal() {
			return this.$store.state.displayModal;
		},
		...mapGetters({
			holdingBays: "getHoldingBays",
			isLoading: "getFetchResource",
		}),
	},
	data() {
		return {
			parkName: "",
		};
	},
	methods: {
		displayModalHandler(value) {
			this.parkName = value.parkName;
			this.$store.state.selectedHoldingBay = value.parkId;
			this.$store.state.displayModal = true;
		},
	},
	mounted() {
		this.$store.dispatch("fetchHoldingBays");
	},
};
</script>

<style scoped>
input,
select {
	border-radius: 0;
}
</style>
