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
							<h4 class="mb-sm-0 font-size-18">View TDO/TRO</h4>
							<!-- <div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item"></li>
                  <li class="breadcrumb-item active">Form Layouts</li>
                </ol>
              </div> -->
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="card-body">
								<h4 class="card-title">Assigned TDO Logs </h4>
								<p class="card-title-desc">
									Hi Kaya Africa, you have 5 TDO's assigned to you.
								</p>
								<div class="table-responsive">
									<table class="table mb-0">
										<thead>
											<tr>
												<th>#</th>
                        <th>From</th>
												<th>Trans No</th>
												<th>Container Type</th>
												<th>Line Operator</th>
												<th>Container No.</th>
												<th>Size</th>
												<th>Weight(KG)</th>
												<th class="text-center">Match</th>
                        <th>Location</th>
                        <th class="text-center">Date Uploaded</th>
											</tr>
										</thead>
										<tbody>
                      <tr>
                        <th scope="row">1</th>
                        <th>APM Terminals Apapa</th>
                        <td>284681</td>
                        <td>Deliver Import</td>
                        <td>MAE</td>
                        <td>MSKU4762653</td>
                        <td>45</td>
                        <td>26350.0</td>
                        <td class="text-center" @click="displayModal">
                          <i class="bx bx-git-merge bx-sm text-primary"></i>
                        </td>
                        <td>Ijora</td>
                        <td class="text-center">2021-11-09</td>
                      </tr> 
                      <tr>
                        <th scope="row">2</th>
                        <th>Consortium</th>
                        <td>284681</td>
                        <td>Deliver Import</td>
                        <td>COS</td>
                        <td>MSKU7626531</td>
                        <td>21</td>
                        <td>11350.0</td>
                        <td class="text-center">
                          <i class="bx bx-git-merge bx-sm text-primary"></i>
                        </td>
                        <td>Shagamu</td>
                        <td class="text-center">2021-11-09</td>
                      </tr>            
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

      <modal v-if="showModal">
        <template #modalHeader>
          <h4>Apm Terminals Apapa: MSKU4762653 </h4>
        </template>
        <div>
          <div class="mt-2 mb-2">
            <strong class="text-danger">Filter by Parks &nbsp; &nbsp;</strong>
            <div class="badge bg-info rounded-pill p-3 text-white me-1 mb-2">Mob Integrated Services</div>
            <div class="badge bg-warning rounded-pill p-3 text-white me-1 mb-2">Special Zau Logistics Services</div>
          </div>
          <input type="text" class="form-control mt-1" placeholder="Can't wait? Enter Truck No" >
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>Truck Number</th>
                  <th>Transporter</th>
                  <th>Reference No</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="form-check font-size-16">
                      <input class="form-check-input" type="checkbox" id="transactionCheck02">
                      <label class="form-check-label" for="transactionCheck02"></label>
                    </div>
                  </th>
                  <th>ABC123XY</th>
                  <th>Kaya Africa </th>
                  <th>LND09897812LB</th>
                  <th>
                    <button class="btn btn-sm btn-warning">Match <i class="bx bx-git-compare"></i></button>
                  </th>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="form-check font-size-16">
                      <input class="form-check-input" type="checkbox" id="transactionCheck02">
                      <label class="form-check-label" for="transactionCheck02"></label>
                    </div>
                  </th>
                  <th>LND765YX</th>
                  <th>Anas Nigeria Limited</th>
                  <th>31298912</th>
                  <th>
                    <button class="btn btn-sm btn-warning">Match <i class="bx bx-git-compare"></i></button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <p>Hello, {{ capitalizer($store.state.user.name) }}! You are about to match TDO with container no: <strong>MSKU4762653</strong> with truck number <strong>ABC123XY</strong>. Kindly note that once this action is completed, it cannot be reverted</p>
        </div>
        
      </modal>


	</design-layout>
</template>

<script>
export default {
  
  methods: {
    displayModal() {
      this.$store.state.displayModal = true
    }
  },
  computed: {
    showModal() {
      return this.$store.state.displayModal
    }
  }
  
}
</script>

<style scoped>

</style>

