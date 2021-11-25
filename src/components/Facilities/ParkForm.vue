<template>
	<div class="row">
		<div class="col-xl-12">
			<div class="card">
				<div class="card-body">
          <div class="row">

            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="serverResponse === 'error'"> 
              <i class="bx bxs-x-circle mt-2 fs-16"></i>
              Operation Aborted:  <strong>validation failed</strong>. 
              <button type="button" class="btn-close" @click="closeMessage"></button>
            </div>

            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if="serverResponse === 'serverError'"> 
              <i class="bx bxs-x-circle mt-2 fs-16"></i>
              Operation Aborted: <strong>Internal Server Error </strong>. 
              <button type="button" class="btn-close" @click="closeMessage"></button>
            </div>

            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="serverResponse === 'success'"> 
              <i class="bx bx-check mt-2"></i> 
              Operation Successful
              <button type="button" class="btn-close" @click="closeMessage"></button>
            </div>


            <div class="col-md-3">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label"
                  >Park Name</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model.lazy="formData.parkName"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="mb-3">
                <label for="location" class="form-label">Phone Nos</label>
                <div class="form-control" id="phoneNos">
                  <span
                    v-for="(phoneNo, index) in phoneNos"
                    :key="phoneNo"
                    class="
                      badge
                      bg-dark
                      rounded-pill
                      d-inline-block
                      text-white
                      me-1
                      mb-1
                    "
                    >{{ phoneNo }}
                    <button
                      type="button"
                      class="btn-close"
                      id="btnClose"
                      @click="removePhoneNo(index)"
                    ></button>
                  </span>
                  <input
                    type="text"
                    id="phoneNoInput"
                    @keyup.enter.prevent="addPhoneNosHandler"
                  />
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="mb-3">
                <label for="location" class="form-label">Address</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.lazy="formData.location"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="mb-3">
                <label for="plateNo" class="form-label">Park Category</label>
                <select
                  class="form-control form-select"
                  v-model.lazy="formData.parkCategory"
                >
                  <option value="">Select Park Category</option>
                  <option
                    v-for="category in getParkCategories"
                    :key="category._id"
                    :value="category._id"
                  >
                    {{ category.category }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-1">
                <label for="truckLength" class="form-label">Park Type</label>
                <select v-model="selectedParkType" @change="parkTypeHandler" class="form-select">
                  <option value="0">Choose Park Type</option>
                  <option v-for="type in parkTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
              </div>
              <div
                class="badge rounded-pill me-1 mt-1 bg-primary text-white p-2"
                v-for="(park, index) in parkType"
                :key="index"
              >
                {{ capitalizer(park) }}
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  @click="removePark(index)"
                ></button>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label for="capacity" class="form-label"> Capacity</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formData.capacity"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-1">
                <label for="" class="form-label">Allowed Terminals</label>
                <select
                  class="form-control form-select"
                  v-model.lazy="selectedTerminal"
                  @change="selectTerminalHandler"
                >
                  <option value="">Choose Applicable Terminals</option>
                  <option
                    v-for="terminal in getTerminals"
                    :key="terminal._id"
                    :value="{ id: terminal._id, name: terminal.name }"
                  >
                    {{ capitalizer(terminal.name) }}
                  </option>
                </select>
              </div>
              <div
                class="badge rounded-pill me-1 mt-1 bg-primary text-white p-2"
                v-for="(terminal, index) in allowedTerminal"
                :key="terminal._id"
              >
                {{ capitalizer(terminal.name) }}
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                  @click="removeTerminal(index)"
                ></button>
              </div>
            </div>
            <div class="col-md-3">
              <div class="mb-3">
                <label for="formFile" class="form-label">Park Image</label>
                <input
                  class="form-control"
                  type="file"
                  id="image"
                  @change="imagePicker"
                />
              </div>
            </div>
          </div>

          <div class="col-md-12 mt-3">
            <div class="table-responsive">
              <table class="table table-condensed">
                <thead>
                  <tr>
                    <th colspan="2" class="mb-4">
                      Facilities: Select the ones available to your park
                    </th>
                  </tr>
                </thead>
                <tbody class="mt-2">
                  <tr v-if="getParkFeatures.length === 0">
                    <td>
                      <span class="d-inline"
                        ><i class="bx bx-loader bx-spin bx-sm"></i
                      ></span>
                    </td>
                  </tr>
                  <feature-item
                    v-else
                    v-for="feature in getParkFeatures"
                    :key="feature.feature"
                    :feature="feature.feature"
                    :featureId="feature._id"
                    @selectedFeature="addFeatureItem"
                  ></feature-item>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="btn btn-primary w-md"
              ref="addPark"
              :disabled="isFormSubmitted"
              @click="parkManagementHandler"
            >
              Save Changes
            </button>
            <button type="button" class="btn btn-danger w-md m-1">
              Close
            </button>
          </div>
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
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapGetters } from "vuex";
import FeatureItem from "../../components/Facilities/FeatureItem.vue";
export default {
	setup() {
		return { v$: useVuelidate() };
	},
	validations() {
		return {
			formData: {
				parkName: { required },
			},
		};
	},
	components: {
		"feature-item": FeatureItem,
	},

	data() {
		return {
			formData: {},
			isFormSubmitted: false,
			allowedTerminal: [],
			parkImage: null,
			phoneNos: [],
			parkFeatures: [],
			selectedTerminal: "",
			parkTypes: ["Holding Bay", "Pre-gate", "Bonded"],
      serverResponse: '',
      parkType: [],
      selectedParkType: ''
		};
	},

	computed: {
		...mapGetters({
			getParkCategories: "getParkCategories",
			getTerminals: "getTerminals",
			getParkFeatures: "getParkFeatures",
		}),
	},

	methods: {
		async parkManagementHandler() {
      this.isFormSubmitted = true
      this.$refs.addPark.innerHTML = '<i class="bx bx-loader bx-spin"></i> Please wait...';
			const requestNewPark = await this.$store.dispatch("createNewPark", {
				...this.formData,
				parkFeatures: this.parkFeatures,
				allowedTerminals: this.allowedTerminal,
				parkImage: this.parkImage,
        phoneNos: this.phoneNos,
        parkType: this.parkType
			});
      if(requestNewPark.status === 201) {
        this.formData = {};
        this.allowedTerminal = []
        this.phoneNos = []
        this.parkFeatures = []     
        this.isFormSubmitted = false
        this.$refs.addPark.innerHTML = 'Save Changes';
        this.serverResponse = 'success';
      }
      if(requestNewPark.status >= 400 && requestNewPark.status <= 499) {
        this.$refs.addPark.innerHTML = 'Save Changes';
        this.serverResponse = 'error'
      }
      if(requestNewPark.status >= 500 && requestNewPark.status <= 503) {
        this.$refs.addPark.innerHTML = 'Save Changes';
        this.isFormSubmitted = false
        this.serverResponse = 'serverError'
      }
		},
		addPhoneNosHandler(e) {
			const checkPhoneNos = this.phoneNos.findIndex(
				(phoneNo) => phoneNo === e.target.value
			);
			if (checkPhoneNos < 0) {
				this.phoneNos.push(e.target.value);
				e.target.value = "";
			}
		},
		removePhoneNo(index) {
			this.phoneNos.splice(index, 1);
		},
		removeTerminal(index) {
			this.allowedTerminal.splice(index, 1);
		},
		selectTerminalHandler() {
			if (this.selectedTerminal === "") return;
			const allowedTerminalIndex = this.allowedTerminal.findIndex(
				(terminal) => terminal.id === this.selectedTerminal.id
			);
			if (allowedTerminalIndex < 0) {
				this.allowedTerminal.push(this.selectedTerminal);
			}
		},

    parkTypeHandler() {
      if (this.selectedParkType === "") return;
			const parkType = this.parkType.findIndex(
				(parkType) => parkType === this.selectedParkType
			);
			if (parkType < 0) {
				this.parkType.push(this.selectedParkType);
			}
    },

		addFeatureItem(value) {
			const featureIndex = this.parkFeatures.find(
				(feature) => feature === value.featureId
			);
			if (value.isChecked) {
				this.parkFeatures.push({featureId :value.featureId});
			} else {
				this.parkFeatures.splice(featureIndex, 1);
			}
		},
		imagePicker(e) {
			const file = e.target.files[0];
			if (
				file.type === "image/jpeg" ||
				file.type === "image/png" ||
				file.type === "image/jpg" ||
				file.type === "image/gif"
			) {
				this.parkImage = file;
				this.fileType = true;
			} else {
				this.fileType = false;
			}
		},
	},

	async mounted() {
		await this.$store.dispatch("fetchParkCategories");
		await this.$store.dispatch("fetchTerminals");
		await this.$store.dispatch("fetchParkFeatures");
	},
};
</script>

<style scoped>
input,
select,
div#phoneNos {
	border-radius: 0;
}
#phoneNoInput {
	outline: none;
	border: none;
	width: 60px;
}
.btn-close {
	color: #fff !important;
}
</style>