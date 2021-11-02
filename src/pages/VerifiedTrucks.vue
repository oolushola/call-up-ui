<template>
  <design-layout>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
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
            <div class="row mb-2">
              <div class="col-md-3">
                <div class="input-group">
                  <input type="text" class="form-control form-control-sm" id="inlineFormInputGroupUsername" placeholder="Truck Look Up">
                  <div class="input-group-text"><i class="bx bx-search"></i></div>
                  <div class="input-group-text"><i class="bx bx-download"></i></div>
                </div>
              </div>
              <div class="offset-md-3 col-md-6">
                <div class="input-group">
                  <select class="form-control form-control-sm" id="inlineFormInputGroupUsername">
                    <option>In Park</option>
                    <option>Terminal</option>
                    <option>Available for Call Up</option>
                  </select>
                  <input type="date" class="form-control form-control-sm" id="inlineFormInputGroupUsername">
                  <input type="date" class="form-control form-control-sm" id="inlineFormInputGroupUsername">
                  <div class="input-group-text"><i class="bx bx-search"></i></div>
                  <div class="input-group-text">
                    <router-link title="Add New Truck" :to="{name: 'TruckManagement'}"><i class="bx bx-plus-medical"></i>
                    </router-link></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Truck Directory</h4>
                          <p class="card-title-desc">You have (5) Unverified Trucks</p>

                          <div class="table-responsive">
                              <table class="table table-striped mb-0">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th class="text-center">Date Activated</th>
                                          <th>Truck Info</th>
                                          <th>Model</th>
                                          <th>Union</th>
                                          <th>Status</th>
                                          <th class="text-center">Approval</th>
                                          <th class="text-center">Color</th>
                                          <th class="text-center">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="(n, i) in 25" :key="n">
                                          <th scope="row">{{ i+1 }}</th>
                                          <td class="text-center">10-05-2021</td>
                                          <td>
                                            T-1000 XY: Full Sided, 28FT
                                            <span class="d-block">10920019920192919</span>
                                          </td>
                                          <td>Ford Ranger</td>
                                          <td>NARTO</td>
                                          <td>In Park</td>
                                          <td class="text-center"><i class="bx bxs-badge-check text-primary" style="font-size: 20px"></i></td>
                                          <td class="text-center"><i class="bx bxs-truck" style="font-size: 20px; color: green"></i></td>
                                          <td class="text-center">
                                            <div class="btn-group btn-group-sm" role="group">
                                                <div class="btn-group" role="group">
                                                  <button id="btnGroupVerticalDrop1" type="button" class="btn btn-danger btn-sm" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="bx bx-chevron-down"></i>
                                                  </button>
                                                  <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1" style="">
                                                      <a class="dropdown-item" href="#">History</a>
                                                      <a class="dropdown-item" href="#">Edit</a>
                                                      <a class="dropdown-item" href="#">Deactivate</a>
                                                  </div>
                                                </div>
                                            </div>
                                          </td>
                                      </tr>
                                      
                                  </tbody>
                              </table>
                          </div>

                      </div>
                  </div>
              </div>
            </div>
            
        </div> <!-- container-fluid -->
    </div>
  </design-layout>

</template>


<style scoped>
input, select {
  border-radius: 0;
}
</style>
