<template>
  <div class="row">
    <div class="col-xl-12">
      <div class="card">
        <div class="card-body">
          <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="serverResponse === 'error'"> 
            <i class="bx bxs-x-circle mt-2 fs-16"></i>
            Operation Aborted: Sorry, you have either a conflicting truck number <strong>{{ truckNo }}</strong> or chasis number <strong>{{ chasisNumber }}</strong>. 
            <button type="button" class="btn-close" @click="closeMessage"></button>
          </div>

          <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="serverResponse === 'conflict'"> 
            <i class="bx bxs-x-circle mt-2 fs-16"></i>
            Operation Aborted: Sorry, you have either a conflicting truck number <strong>{{ truckNo }}</strong> or chasis number <strong>{{ chasisNumber }}</strong>. 
            <button type="button" class="btn-close" @click="closeMessage"></button>
          </div>

          <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="serverResponse === 'success'"> 
            <i class="bx bx-check mt-2"></i> 
            Operation Successful
            <button type="button" class="btn-close" @click="closeMessage"></button>
          </div>

          <form @submit.prevent="addTruckHandler">
            <div class="row">
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="formrow-email-input" class="form-label">Name of Truck</label>
                  <input type="text" class="form-control form-control-sm" v-model.lazy="truckName">
                  <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckName.$error"><i class="bx bx-x-circle"></i>Truck name is required.</span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="truckType" class="form-label">Truck Type</label>
                  <p v-if="truckTypes.length === 0"><i class="bx bx-loader-circle bx-burst bx-sm"></i></p>
                  <select v-else v-model="truckType" class="form-select form-select-sm">
                    <option value=0>Choose Truck Type</option>
                    <option v-for="(truckType, index) in truckTypes" :value="truckType._id" :key="index">{{ truckType.truckType }}</option>
                  </select>
                  <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckType.$error"><i class="bx bx-x-circle"></i>Truck type is required.</span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="truckModel" class="form-label">Model</label>
                  <input type="text" class="form-control form-control-sm" v-model.lazy="truckModel">
                  <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckModel.$error"><i class="bx bx-x-circle"></i>Truck model is required.</span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="mb-3">
                  <label for="plateNo" class="form-label">Plate Number</label>
                  <input type="text" class="form-control form-control-sm" v-model.lazy="truckNo">
                  <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckNo.$error"><i class="bx bx-x-circle"></i>Truck number is required.</span>
                </div>
              </div>
            </div>

            <div class="row">              
              <div class="col-md-3">
                <div class="mb-3">
                  <label for="truckLength" class="form-label">Length</label>
                  <p v-if="truckLengths.length === 0"><i class="bx bx-loader-circle bx-burst bx-sm"></i></p>
                    <select v-else  v-model.lazy="truckLength" class="form-select form-select-sm">
                      <option value=0>Choose Truck Length</option>
                      <option v-for="(truckLength, index) in truckLengths" :value="truckLength._id" :key="index">{{ truckLength.truckLength }}</option>
                    </select>
                    <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckLength.$error"><i class="bx bx-x-circle"></i>Truck length is required.</span>
                </div>
              </div>
              <div class="col-md-3">
                  <div class="mb-3">
                    <label for="truckUnion" class="form-label"> Union</label>
                    <p v-if="truckUnions.length === 0"><i class="bx bx-loader-circle bx-burst bx-sm"></i></p>
                    <select v-else  v-model="truckUnion" class="form-select form-select-sm">
                      <option value=0>Choose Union</option>
                      <option v-for="(union, index) in truckUnions" :value="union._id" :key="index">{{ union.acronym }}</option>
                    </select>
                    <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckModel.$error"><i class="bx bx-x-circle"></i>Truck union is required.</span>
                  </div>
              </div>
              <div class="col-md-3">
                  <div class="mb-3">
                    <label for="truckColor" class="form-label">Truck Color</label>
                    <input class="form-control form-control-sm" v-model.lazy="color" type="color">
                    <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.color.$error"><i class="bx bx-x-circle"></i>What's the color of your truck.</span>
                  </div>
              </div>
              <div class="col-md-3">      
                <div class="mb-3">
                  <label for="formFile" class="form-label">Truck Image</label>
                  <input class="form-control  form-control-sm" type="file" id="image" @change="imagePicker">
                  <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.truckImage.$error"><i class="bx bx-x-circle"></i>Upload your truck image</span>
                </div>
              </div>
              <div class="col-md-3">      
                <div class="mb-3">
                  <label for="chasisNo" class="form-label">Chasis Number</label>
                  <input class="form-control form-control-sm" type="text" v-model.lazy="chasisNumber">
                  <span class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.chasisNumber.$error"><i class="bx bx-x-circle"></i>What's the truck chasis number?</span>
                </div>
              </div>
              <div class="col-md-9">
                <div class="form-check font-size-5 mt-4">
                  <input class="form-check-input" type="checkbox" v-model="confirmDetails">
                  <label class="form-check-label" for="truckDetailsConfirmation">I hereby confirm that every details entered is accurate, correct and in great detail. Call up has the right to flag, monitor all truck activities registered on it's platform. </label>
                  <span  class="mt-1 mb-2 d-block text-danger fw-bold" v-if="v$.confirmDetails.$error"><i class="bx bx-x-circle"></i>Please consent</span>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" class="btn btn-primary w-md" ref="addTruckBtn" :disabled="isFormSubmitted">Save Changes</button>
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
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  data() {
    return {
      truckType: null,
      truckUnion: null,
      truckLength: null,
      truckModel: '',
      isFormSubmitted: false,
      truckName: '',
      truckNo: '',
      color: null,
      chasisNumber: '',
      truckImage: null,
      fileType: null,
      isProduction: false,
      stickerCharge: 1000,
      confirmDetails: null,
      showWallet: false,
      serverResponse: null
    }
  },

  computed: {
    truckUnions() {
      return this.$store.getters.getTruckUnions
    },
    truckTypes() {
      return this.$store.getters.getTruckTypes
    },
    truckLengths() {
      return this.$store.getters.getTruckLengths
    },
    displayWallet() {
      if(this.availableBalance >= this.stickerCharge) {
        return !this.showWallet
      }
      return this.showWallet
    }
  },

  methods: {
    imagePicker(e) {
      const file = e.target.files[0];
      if(file.type === 'image/jpeg' || 
        file.type === 'image/png' || 
        file.type === 'image/jpg' || 
        file.type === 'image/gif'){
        this.truckImage = file
        this.fileType = true
      }
      else {
        this.fileType = false 
      }
    },
    async addTruckHandler() {
      this.v$.$touch()
      if(this.v$.$error) {
        return 
      }
      this.$refs.addTruckBtn.innerHTML = '<i class="bx bx-radio-circle bx-burst bx-sm"></i>'
      this.isFormSubmitted = true
      const formData = {
        truckName: this.truckName,
        truckType: this.truckType,
        truckModel: this.truckModel,
        plateNumber: this.truckNo,
        truckLength: this.truckLength,
        truckUnion: this.truckUnion,
        truckColor: this.color,
        truckImage: this.truckImage,
        chasisNumber: this.chasisNumber,
      }
      const saveTruckDetails = await this.$store.dispatch('createTruck', formData);
      if(saveTruckDetails.status === 201) {
        this.serverResponse ='success';
      }
      if(saveTruckDetails.status === 422) {
        this.serverResponse = 'error'
      }
      if(saveTruckDetails.status === 409) {
        this.serverResponse = 'conflict'
      }
      this.$refs.addTruckBtn.innerHTML = 'Save Changes'
      this.isFormSubmitted = false
    },
    closeMessage() {
      this.serverResponse = null
    }
  },  

  setup() {
    return {
      v$: useVuelidate()
    }
  },

  validations() { 
    return {
      truckName: { required },
      truckType: { required  },
      truckModel: { required },
      truckNo: { required },
      truckLength: { required },
      truckImage: { required },
      truckUnion: { required },
      color: { required },
      chasisNumber: { required },
      confirmDetails: { required }
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchTruckUnions')
    await this.$store.dispatch('fetchTruckTypes')
    await this.$store.dispatch('fetchTruckLengths')
  }
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
</style>