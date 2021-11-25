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
                    <option>Mob Integrated Services</option>
                    <option>Spezial Bau</option>
                  </select>
                  <input type="date" class="form-control form-control-sm" id="inlineFormInputGroupUsername">
                  <input type="date" class="form-control form-control-sm" id="inlineFormInputGroupUsername">
                  <div class="input-group-text"><i class="bx bx-search"></i></div>
                  <div class="input-group-text">
                    <router-link title="Add Park" :to="{name: 'newPark'}"><i class="bx bx-plus-medical"></i>
                    </router-link></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Trucks in all parks</h4>
                    <p class="card-title-desc">We have 1409 trucks in all parks</p>

                    <div class="table-responsive" style="min-height: 500px">
                      <table class="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>Plate No.</th>
                            <th class="text-center">Action</th>
                            <th>Date Called</th>
                            <th>Park</th>
                            <th>Terminal</th>
                            <th class="text-center">Location</th>
                            <th class="text-center">Matched To</th>
                            <th class="text-center">Booking Date</th>
                            <th>Shared With</th>
                            <!-- <th>Pool Status</th> -->
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>ABC123XY</td>
                            <td class="text-center">
                              <div class="btn-group btn-group-sm" role="group">
                                <div class="btn-group" role="group">
                                  <button id="btnGroupVerticalDrop1" type="button" class="btn btn-danger btn-sm" @click="showActionHandler">
                                    <i class="bx bx-chevron-down"></i> 
                                  </button>
                                  <div class="dropdown-menu" :class="showActionDetails">
                                    <a class="dropdown-item" href="#">Pickup History</a>
                                    <a class="dropdown-item" href="#">Offense History</a>
                                    <a class="dropdown-item" href="javascript:void(0)" @click="displayCallOutModal">Call Up</a>
                                    <a class="dropdown-item" target="_blank">View Image</a>
                                    <a class="dropdown-item" href="javascript:void(0)">Call Out History</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>2021-11-16 | 9:30PM</td>
                            <td>Mob Integrated Service</td>
                            <td>Apm Terminal Nigeria Ltd.</td>
                            <td>12B Titilola Bolaji Close, Beckley Estate, Phase One. </td>
                            <td>MSKU19829109</td>
                            <td>2021-11-13 | 09:00AM</td>
                            <td>yemi.aladeyemi@gmail.com</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>LND765XY</td>
                            <td class="text-center">
                              <div class="btn-group btn-group-sm" role="group">
                                <div class="btn-group" role="group">
                                  <button id="btnGroupVerticalDrop1" type="button" class="btn btn-danger btn-sm">
                                    <i class="bx bx-chevron-down"></i> 
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Pickup History</a>
                                    <a class="dropdown-item" href="#">Offense History</a>
                                    <a class="dropdown-item" href="javascript:void(0)" >Call Out</a>
                                    <a class="dropdown-item" target="_blank">View Image</a>
                                    <a class="dropdown-item" href="javascript:void(0)">Call Out History</a>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>NA</td>
                            <td>Sodiq Garage</td>
                            <td>Greenview Development Nigeria Ltd.</td>
                            <td>Bomarah Investment Ltd.:36/42 Adeleye Street Orile Igamu, by White Sand, Lagos</td>
                            <td>NA</td>
                            <td>2021-11-10 | 09:00AM</td>
                            <td>NA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <nav aria-label="...">
                      <ul class="pagination pagination-sm">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </nav>

                  </div>
                </div>
              </div>
            </div>

            
            
        </div> <!-- container-fluid -->
    </div>
    <modal v-if="showModal">
        <template #modalHeader>
          <h4>LND765XY - Call Out</h4>
        </template>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group m-2">
                <label for="category">Call Out Category</label>
                <select class="form-control form-select" v-model="callOutType">
                  <optgroup label="Containers">
                    <option>Import</option>
                    <option>Export</option>
                    <option>Empty</option>
                    <option>Refer</option>
                  </optgroup>
                  <optgroup label="General">
                    <option>Gate Pass</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div class="col-md-6" v-if="callOutType === 'Gate Pass'">
              <div class="form-group m-2">
                <label for="journey-code">Booking Reference No.</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group m-2">
                <label for="journey-code">Call Out Date</label>
                <input type="date" class="form-control" readonly />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group m-2">
                <label for="category">Pre Gate Park</label>
                <select class="form-control form-select">
                  <optgroup label="Containers">
                    <option>Import</option>
                    <option>Export</option>
                    <option>Empty</option>
                    <option>Refer</option>
                  </optgroup>
                  <optgroup label="General">
                    <option>Gate Pass</option>
                  </optgroup>
                </select>
              </div>
            </div>

            
            <div class="col-md-6" v-if="callOutType !== 'Gate Pass'">
              <div class="form-group m-2">
                <label for="journey-code">Journey Code</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6"  v-if="callOutType !== 'Gate Pass'">
              <div class="form-group m-2">
                <label for="journey-code">Container No</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6" v-if="callOutType === 'Empty'">
              <div class="form-group m-2">
                <label for="category">Destination Terminal</label>
                <select class="form-control form-select">
                  <optgroup label="Containers">
                    <option>Import</option>
                    <option>Export</option>
                    <option>Empty</option>
                    <option>Refer</option>
                  </optgroup>
                  <optgroup label="General">
                    <option>Gate Pass</option>
                  </optgroup>
                </select>
              </div>
            </div>
            

            <div class="col-md-12" v-if="callOutType === 'Empty' || callOutType === 'Export'">
              <h5 class="">Are you picking up a loaded import container at the port?</h5>
              <div class="form-check form-radio-primary mb-3">
                <input class="form-check-input" type="radio" name="formRadioColor2" id="formRadioColor2" checked="">
                <label class="form-check-label" for="formRadioColor2">
                    Yes, I want to.
                </label>
              </div> 
              <div class="form-check form-radio-warning mb-3">
                <input class="form-check-input" type="radio" name="formRadioColor2" id="formRadioColor2" checked="">
                <label class="form-check-label" for="formRadioColor2">
                    No, I won't.
                </label>
              </div> 
            </div>
            
          </div>
        </form>
        
      </modal>
  </design-layout>

</template>


<script>
export default {
  data() {
    return {
      showAction: false,
      callOutType: ''
    }
  },
  methods: {
    showActionHandler() {
      this.showAction = !this.showAction
    },
    displayCallOutModal() {
      this.$store.state.displayModal = true
      this.showAction = false
    }
  },
  computed: {
    showModal() {
      return this.$store.state.displayModal
    },
    showActionDetails() {
      if(this.showAction) {
        return 'show';
      }
      return 'd-none';
    }
  }
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
th {
  white-space: nowrap;
}
td{
  white-space: nowrap;
}
</style>
