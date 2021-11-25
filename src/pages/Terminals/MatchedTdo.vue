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
							<h4 class="mb-sm-0 font-size-18">Terminal</h4>
							<div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item">Matched TDO</li>
                </ol>
              </div>
						</div>
					</div>
				</div>
				<!-- end page title -->

         <div class="row mb-2">
          <div class="col-md-3">
            <div class="input-group">
              <input type="text" class="form-control form-control-sm" placeholder="">
              <div class="input-group-text"><i class="bx bx-search"></i></div>
              <div class="input-group-text"><i class="bx bx-download"></i></div>
            </div>
          </div>
          <div class="offset-md-3 col-md-6">
            <div class="input-group">
              <input type="date" class="form-control form-control-sm" />
              <input type="date" class="form-control form-control-sm">
              <div class="input-group-text"><i class="bx bx-search"></i></div>
              <div class="input-group-text">
                <router-link title="Add Park" :to="{name: 'newPark'}"><i class="bx bx-plus-medical"></i>
                </router-link></div>
            </div>
          </div>
        </div>

      <!-- end row -->

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
                        <th class="text-center">Date Uploaded</th>
                        <th>Owner</th>
                        <th class="text-center">Date Matched</th>
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
                      <tr>
                        <th scope="row">1</th>
                        <td class="text-center">2021-11-09</td>
                        <td>Goldspeed Freight Agency</td>
                        <td class="text-center">2021-11-09</td>
                        <td>284681</td>
                        <td>Import</td>
                        <td>MAE</td>
                        <td>MSKU4762653</td>
                        <td>45</td>
                        <td>26350.0</td>
                        <td class="text-center">
                          <i class="bx bxs-check-shield bx-sm text-success"></i>
                        </td>
                        <td>Ijora</td>
                      </tr> 
                      <tr>
                        <th scope="row">2</th>
                        <td class="text-center">2021-11-09</td>
                        <td>DHL</td>
                        <td class="text-center">2021-11-09</td>
                        <td>294617</td>
                        <td>Export</td>
                        <td>COSCO</td>
                        <td>MSKU4762653</td>
                        <td>28</td>
                        <td>23879.0</td>
                        <td class="text-center">
                          <i class="bx bxs-check-shield bx-sm text-success"></i>
                        </td>
                        <td>Apapa</td>
                      </tr> 
										</tbody>
									</table>
                  
								</div>
							</div>
						</div>
					</div>
				</div>


      </div>
    </div>
  </design-layout>
</template>

<style scoped>
input, select {
  border-radius: 0;
}
</style>