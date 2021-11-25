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
                    <router-link title="Add Park" :to="{name: 'newPark'}"><i class="bx bx-plus-medical"></i>
                    </router-link></div>
                </div>
              </div>
            </div>

            <router-view></router-view>

            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">My Parks</h4>
                    <p class="card-title-desc">Hi {{ capitalizer($store.state.user.name) }}, you have {{ userParks.length }} associated with your account.</p>

                    <div class="table-responsive" style="min-height: 500px">
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
                          <user-park-item v-for="(park, index) in userParks" :key="park._id" :park="park" :counter="index"></user-park-item>
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
import { mapGetters } from 'vuex'
import UserParkItem from '../../components/Facilities/UserParkItem.vue'

export default {
  components: {
    'user-park-item': UserParkItem
  },
  computed: {
    ...mapGetters({
      userParks: 'getUserParks'
    })    
  },
  async mounted() {
    await this.$store.dispatch('fetchUserPark')
  }
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}

</style>
