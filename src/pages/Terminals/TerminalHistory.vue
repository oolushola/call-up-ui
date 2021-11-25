<template>
  <design-layout>
    <div class="page-content">
			<div class="container-fluid">
				<!-- start page title -->
				<div class="row">
					<div class="col-12">
						<div
							class="
								page-title-box
								d-sm-flex
								align-items-center
								justify-content-between
							"
						>
							<h4 class="mb-sm-0 font-size-18">Terminal</h4>
							<div class="page-title-right">
                <ol class="breadcrumb m-0">
                  <li class="breadcrumb-item">History</li>
                </ol>
              </div>
						</div>
					</div>
				</div>
				<!-- end page title -->

         <div class="row mb-2">
          <div class="col-md-3">
            <div class="input-group">
              <input type="text" class="form-control form-control-sm" placeholder="">
              <div class="input-group-text"><i class="bx bx-search"></i></div>
              <div class="input-group-text"><i class="bx bx-download"></i></div>
            </div>
          </div>
          <div class="offset-md-3 col-md-6">
            <div class="input-group">
              <select type="date" class="form-control form-select">
                <option>Clearing Agents</option>
              </select>
              <input type="date" class="form-control form-control-sm" />
              <input type="date" class="form-control form-control-sm">
              <div class="input-group-text"><i class="bx bx-search"></i></div>
              <div class="input-group-text">
                <router-link title="Add Park" :to="{name: 'uploadTdo'}"><i class="bx bx-plus-medical"></i>
                </router-link></div>
            </div>
          </div>
        </div>

      <!-- end row -->

        <terminal-history />


      </div>
    </div>
  </design-layout>
</template>

<script>
import TerminalHistory from '../../components/Terminals/TerminalHistory.vue'
export default {
  components: {
    'terminal-history': TerminalHistory
  },
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
</style>