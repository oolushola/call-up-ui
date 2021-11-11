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
							<h4 class="mb-sm-0 font-size-18">Truck Management</h4>
							<!-- <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"></li>
                  <li class="breadcrumb-item active">Form Layouts</li>
                </ol>
              </div> -->
						</div>
					</div>
				</div>
				<!-- end page title -->
				<truck-form></truck-form>

				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Truck Directory</h4>
								<p class="card-title-desc">
									You have ({{ unverifiedTrucks.length }}) Unveried Trucks
								</p>
								<div class="table-responsive">
									<table class="table mb-0">
										<thead>
											<tr>
												<th>#</th>
												<th>Truck Name</th>
												<th>Plate No</th>
												<th>Chasis No</th>
												<th>Model</th>
												<th>Truck Type</th>
												<th>Union</th>
												<th>Length</th>
												<th class="text-center">Verification</th>
												<th class="text-center">Color</th>
											</tr>
										</thead>
										<tbody>
											<truck-pending-verification-item
												v-for="(truck, index) in unverifiedTrucks"
                        :truckId="truck._id"
												:counter="index"
												:key="truck.plate"
												:truckNo="truck.plateNo"
												:truckName="truck.truckName"
												:truckType="truck.truckType"
												:chasisNumber="truck.chasisNo"
                        :truckModel="truck.truckModel"
                        :truckUnion="truck.union"
                        :truckColor="truck.color"
                        :truckLength="truck.length"
                        :paymentStatus="truck.paymentStatus"
                        :verificationStatus="truck.verificationStatus"
											></truck-pending-verification-item>
										</tbody>
									</table>
                  
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- container-fluid -->
		</div>
	</design-layout>
</template>


<script>
import TruckForm from "../components/Trucks/TruckForm.vue";
import TrucksPendingVeirification from "../components/Trucks/TrucksPendingVeirifcation.vue";
export default {
  data() {
    return {
      truckInfo: {},
      transactionRef: this.generateTransactionRef().toUpperCase(),
      truckCharge: 1000
    }
  },
  
	components: {
		"truck-form": TruckForm,
		"truck-pending-verification-item": TrucksPendingVeirification,
	},
	computed: {
		unverifiedTrucks() {
			return this.$store.getters.getUnverifiedTrucks;
		},
    modalStatus() {
      return this.$store.state.displayModal
    }
	},
	mounted() {
		this.$store.dispatch("fetchUnverifedTrucks");
	},
};
</script>
