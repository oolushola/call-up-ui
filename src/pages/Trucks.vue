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
            
          
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <div class="row">
                                  <div class="col-md-4">
                                    <div class="mb-3">
                                      <label for="formrow-email-input" class="form-label">Truck Type</label>
                                      <input type="email" class="form-control form-control-sm" id="formrow-email-input">
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="mb-3">
                                      <label for="formrow-password-input" class="form-label">Truck Model</label>
                                      <input type="password" class="form-control form-control-sm" id="formrow-password-input">
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <div class="mb-3">
                                      <label for="formrow-password-input" class="form-label">Plate Number</label>
                                      <input type="password" class="form-control form-control-sm" id="formrow-password-input">
                                    </div>
                                  </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-4">
                                      <div class="mb-3">
                                        <label for="formrow-password-input" class="form-label">Truck Length</label>
                                        <input type="password" class="form-control form-control-sm" id="formrow-password-input">
                                      </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="mb-3">
                                            <label for="formrow-inputState" class="form-label">Truck Union</label>
                                            <select id="formrow-inputState" class="form-select form-select-sm">
                                              <option selected="">Choose Union</option>
                                              <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="mb-3">
                                          <label for="formrow-inputZip" class="form-label">Truck Color</label>
                                          <input class="form-control form-control-sm" type="color" value="#999">
                                        </div>
                                    </div>
                                    <div class="col-sm-6">      
                                      <div class="mb-3">
                                        <label for="formFile" class="form-label">Choose Truck Image</label>
                                        <input class="form-control  form-control-sm" type="file" id="formFile">
                                      </div>
                                    </div>
                                    <div class="col-sm-6">      
                                      <div class="mb-3">
                                        <label for="formFile" class="form-label">Chasis Number</label>
                                        <input class="form-control form-control-sm" type="text" id="formFile">
                                      </div>
                                    </div>
                                </div>
                                <div>
                                  <button type="submit" class="btn btn-primary w-md">Save Changes</button>
                                  <button type="button" class="btn btn-danger w-md m-1">Upload Bulk Truck</button>
                                </div>
                                
                            </form>
                        </div>
                        <!-- end card body -->
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
              <div class="col-lg-12">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Truck Directory</h4>
                          <p class="card-title-desc">You have (5) Unveried Trucks</p>

                          <div class="table-responsive">
                              <table class="table mb-0">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th>Truck Info</th>
                                          <th>Model</th>
                                          <th>Union</th>
                                          <th>Chasis Number</th>
                                          <th class="text-center">Status</th>
                                          <th class="text-center">Color</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <th scope="row">1</th>
                                          <td>T-1000 XY: Full Sided, 28FT</td>
                                          <td>Ford Ranger.</td>
                                          <td>NARTO</td>
                                          <td>10920019920192919</td>
                                          <td class="text-center"><i class="bx bxs-badge-check text-primary" style="font-size: 20px"></i></td>
                                          <td class="text-center"><i class="bx bxs-truck" style="font-size: 20px; color: green"></i></td>
                                      </tr>
                                      <tr>
                                          <th scope="row">2</th>
                                          <td>ABC 123 XY: Full Sided, 46FT</td>
                                          <td>Mitsubishi Strada</td>
                                          <td>NARTO</td>
                                          <td>10920019920192919</td>
                                          <td class="text-center"><i class="bx bxs-x-circle text-danger" style="font-size: 20px"></i></td>
                                          <td class="text-center"><i class="bx bxs-truck" style="font-size: 20px; color: brown"></i></td>
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