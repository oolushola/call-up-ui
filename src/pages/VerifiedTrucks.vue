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
                          <p class="card-title-desc">You have ({{ $store.getters.getUnverifiedTrucks.length }}) Unverified Trucks</p>

                          <div class="table-responsive">
                              <table class="table table-striped mb-0">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th class="text-center">Date Activated</th>
                                          <th>Plate No</th>
                                          <th>Truck Type</th>
                                          <th>Truck Length</th>
                                          <th>Chasis No</th>
                                          <th class="text-center">Action</th>
                                          <th>Model</th>
                                          <th>Union</th>
                                          <th>Status</th>
                                          <th class="text-center">Color</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr v-if="getVerifiedTrucks.length <= 0" class="text-danger">
                                          <td class="text-center">
                                           <span class="bx bxs-info-circle bx-sm"></span>
                                          </td>
                                          <td class="text-center" colspan="10"><strong>You have no verified trucks</strong></td>
                                      </tr>
                                      <verified-truck-items v-else v-for="(truck, index) in getVerifiedTrucks"
                                        :key="truck.plateNo"
                                        :counter="index"
                                        :dateVerified="truck.dateVerified"
                                        :truckNo="truck.plateNo"
                                        :truckType="truck.truckType.truckType"
                                        :truckLength="truck.length.truckLength"
                                        :chasisNo="truck.chasisNo"
                                        :truckModel="truck.truckModel"
                                        :union="truck.union.acronym"
                                        :truckStatus="truck.stage"
                                        :activationStatus="truck.activationStatus"
                                        :truckImage="truck.truckImage"
                                      ></verified-truck-items>
                                      
                                      
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


<script>
import VerifiedTruckItem from '../components/Trucks/VerifiedTruckItem.vue'
export default {
  components: {
    'verified-truck-items': VerifiedTruckItem
  },
  computed: {
    getVerifiedTrucks() {
      return this.$store.getters.getVerifiedTrucks
    }
  },
  beforeMount() {
    this.$store.dispatch('fetchVerifiedTrucks')
  }
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
</style>
