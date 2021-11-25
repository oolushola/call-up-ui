<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <form @submit.prevent="uploadTdoHandler">
            <div class="row">

              <div class="alert alert-success alert-dismissible fade show" role="alert" v-show="serverResponse === 201"> 
                <i class="bx bx-double-check mt-2 fs-16"></i> TDO Uploaded Successfully
                <button type="button" class="btn-close"></button>
              </div>

              <div class="alert alert-warning alert-dismissible fade show" role="alert" v-show="serverResponse === 409"> 
                <i class="bx bx-double-check mt-2 fs-16"></i> The container number you are trying to upload already exists.
                <button type="button" class="btn-close"></button>
              </div>

              <div class="alert alert-danger alert-dismissible fade show" role="alert" v-show="serverResponse >= 500"> 
                <i class="bx bx-double-check mt-2 fs-16"></i> Oops! Internal Server Error. Try Again after some time.
                <button type="button" class="btn-close"></button>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Terminal</label>
                  <select class="form-control form-select" v-model="formData.terminalId" :class="v$.formData.terminalId.$error ? 'errorLabel' : ''">
                    <option value="0">Select Terminal</option>
                    <option v-for="terminal in terminals" :value="terminal._id" :key="terminal._id">{{ capitalizer(terminal.name) }}</option>
                  </select>
                  <span class="text-danger d-block mt-2" v-if="v$.formData.terminalId.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>You are required to select a terminal</span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Assign To</label>
                  <select class="form-control form-select" v-model="formData.clearingAgentId" :class="v$.formData.clearingAgentId.$error ? 'errorLabel' : ''">
                    <option value="0">Select a clearing agent</option>
                    <option v-for="agent in clearingAgents" :value="agent._id" :key="agent._id">{{ capitalizer(agent.name) }}</option>
                  </select>
                  <span class="text-danger d-block mt-2" v-if="v$.formData.clearingAgentId.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>Who are you giving the TDO to?</span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Trans No</label>
                  <input type="text" class="form-control" v-model="formData.transNo" :class="v$.formData.transNo.$error ? 'errorLabel' : ''">
                </div>
                  <span class="text-danger d-block mt-2" v-if="v$.formData.transNo.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>TDO trans no is required.</span>
                
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="truckType" class="form-label">Container Type</label>
                  <select class="form-control form-select" v-model="formData.containerType" :class="v$.formData.containerType.$error ? 'errorLabel' : ''">
                    <option value="0">Select container type</option>
                    <option value="import">Import</option>
                    <option value="export">Export</option>
                    <option value="refer">Refer</option>
                    <option value="empties">Empties </option>
                  </select>
                </div>
                <span class="text-danger d-block mt-2" v-if="v$.formData.containerType.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>Your type of container is required.</span>

              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="lineoperator" class="form-label">Line Operator</label>
                  <input type="text" v-model="formData.lineOperator" class="form-control" :class="v$.formData.lineOperator.$error ? 'errorLabel' : ''">
                  <span class="text-danger d-block mt-2" v-if="v$.formData.lineOperator.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>You are required to enter a line operator</span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="plateNo" class="form-label">Container No</label>
                  <input type="text" v-model="formData.containerNo" class="form-control" :class="v$.formData.containerNo.$error ? 'errorLabel' : ''">
                </div>
                <span class="text-danger d-block mt-2" v-if="v$.formData.containerNo.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>Your container number is required.</span>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="truckLength" class="form-label">Size</label>
                  <input type="text" v-model="formData.size" class="form-control" :class="v$.formData.size.$error ? 'errorLabel' : ''" />
                </div>                  
                <span class="text-danger d-block mt-2" v-if="v$.formData.size.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>What's the size of the container?</span>

              </div>
              
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="truckUnion" class="form-label"> Weight(KG)</label>
                  <input type="number" v-model="formData.weight" min="1" step="0.1" class="form-control" :class="v$.formData.weight.$error ? 'errorLabel' : ''" />
                  <span class="text-danger d-block mt-2" v-if="v$.formData.weight.$error"><i class="bx bxs-error-alt bx-tada me-2"></i>Weight of container is required.</span>
                </div>
              </div>
              
              <div class="col-md-3">      
                <div class="mb-3">
                  <label for="formFile" class="form-label">Location</label>
                  <input class="form-control" v-model="formData.location" type="text">
                </div>
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-primary w-md" ref="uploadTdo" :disabled="isFormSubmitted">Upload TDO</button>
              <button type="button" class="btn btn-danger w-md m-1">Upload Bulk</button>
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
</template>


<script>
import { mapGetters } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup() {
    return {
      v$: useVuelidate()
    }
  },

  validations(){
    return {
      formData: {
        terminalId: { required },
        clearingAgentId: { required },
        transNo: { required },
        containerType: { required },
        lineOperator: { required },
        containerNo: { required },
        size: { required },
        weight: { required },
        location: { required }
      }
    }
  },

  data() {
    return {
      formData: {},
      isFormSubmitted: false,
      serverResponse: null
    }
  },
  computed: {
    ...mapGetters({
      clearingAgents : 'getClearingAgents',
      terminals: 'getUserTerminals'
    })
  },
  methods: {
    async uploadTdoHandler() {
      this.v$.$touch();
      this.isFormSubmitted = true
      if(this.v$.$error) {
        this.isFormSubmitted = false
        return false
      }
      this.$refs.uploadTdo.innerHTML = '<i class="bx bx-loader bx-spin"></i> Uploading...';

      const response = await this.$store.dispatch('requestTdoUpload', this.formData)
      this.serverResponse = response.status
      if(this.serverResponse === 201) {
        this.formData = {};
        this.$refs.uploadTdo.innerHTML = 'Upload TDO';
      }
      else{
        this.isFormSubmitted = false
        this.$refs.uploadTdo.innerHTML = 'Upload TDO';
      }
    },

    async requestHandlers() {
      await this.$store.dispatch('getClearingAgents', 'clearing agent')
      await this.$store.dispatch('fetchTerminals')
    }
  },

  mounted() {
    this.requestHandlers()
  }
}
</script>

<style scoped>
  input, select {
    border-radius: 0;
  }
  .errorLabel {
    border: 1px solid red;
  }
</style>