<template>
  <design-layout>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Facilities</h4>
                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">Parks</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <!-- end page title -->
            <div class="row mb-2">
              <div class="col-md-3">
                <div class="input-group">
                  <input type="text" class="form-control form-control-sm" id="inlineFormInputGroupUsername" placeholder="">
                  <div class="input-group-text"><i class="bx bx-search"></i></div>
                  <div class="input-group-text"><i class="bx bx-download"></i></div>
                </div>
              </div>
              <div class="offset-md-3 col-md-6">
                <div class="input-group">
                  <select class="form-control form-control-sm" id="inlineFormInputGroupUsername">
                    <option>Select Facility Location</option>
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
                                          <th>SN</th>
                                          <th>Name</th>
                                          <th class="text-center">Action</th>
                                          <th>Contact Information</th>
                                          <th>Capacity</th>
                                          <th>Park Status</th>
                                          <th class="text-center">Available Space</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-for="(n, i) in 15" :key="n">
                                          <th scope="row">{{ i+1 }}</th>
                                          <td>MOB Integrated Services</td>
                                          <td class="text-center">
                                            <div class="btn-group btn-group-sm" role="group">
                                                <div class="btn-group" role="group">
                                                  <button id="btnGroupVerticalDrop1" type="button" class="btn btn-danger btn-sm" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                       <i class="bx bx-chevron-down"></i>
                                                  </button>
                                                  <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1" style="">
                                                      <a class="dropdown-item" href="#">Locate Address</a>
                                                      <a class="dropdown-item" href="#">View Park Images</a>
                                                      <a class="dropdown-item" href="#">Your History</a>
                                                      <a class="dropdown-item" href="#">View Park Fatures</a>
                                                  </div>
                                                </div>
                                            </div>
                                          </td>
                                          <td>
                                            3A Gbenga Ademulegun Lane, Parkview, Ikoyi, Lagos.
                                            <br />
                                            08056547277, 08129112872
                                          </td>
                                          <td>550 (Trucks)</td>
                                          <td><span class="badge rounded-pill bg-success">Active</span>  <span class="badge rounded-pill bg-primary">Public</span></td>
                                          <td class="text-center">3 Trucks</td>
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
