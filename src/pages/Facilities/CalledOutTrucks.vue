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
                    <h4 class="card-title">Called Out Trucks</h4>
                    <p class="card-title-desc">You have 2 Called Out Trucks</p>

                    <div class="table-responsive" style="height: 500px">
                      <table class="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>Terminal</th>
                            <th>Plate No.</th>
                            <th class="text-center">Print</th>
                            <th>Call Out Category</th>
                            <th class="text-center">Date Called</th>
                            <th>Pre-Gate Park</th>
                            <th class="text-center">Journey Code</th>                            
                            <th>Matched To</th>
                            <th class="text-center">Booking Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Apapa Bulk Terminal</td>
                            <td>ABC123XY</td>
                            <td class="text-center"><i class="bx bxs-printer bx-sm text-info"></i></td>
                            
                            <td>Import</td>
                            <td class="text-center">2021-11-16</td>
                            <td>MOB Integrated Service</td>
                            <td class="text-center">187281</td>
                            <td>MSKU19829109</td>
                            <td  class="text-center">2021-11-13 | 09:00AM</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Apm Terminals Nigeria Ltd.</td>
                            <td>LND765XY</td>
                            <td class="text-center"><i class="bx bxs-printer bx-sm text-info"></i></td>
                            <td>Export</td>
                            <td class="text-center">2021-10-11</td>
                            <td>Sodiq Garage</td>
                            <td class="text-center">178821</td>
                            <td>NA</td>
                            <td  class="text-center">2021-11-13 | 09:00AM</td>
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
