<template>
	<design-layout>
		<div class="page-content">
			<div class="container-fluid">
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
							<h4 class="mb-sm-0 font-size-18">Terminal Analytics</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item"></li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <single-chart
                  :labels="calledInLabels"
                  :data="calledInData"
                  label="Called In Today"
                  type="bar"
                  id="calledIn"
                  height="300"
                ></single-chart>
              </div>
              <div class="col-md-4">
                <single-chart
                  :labels="matchedTrucksLabel"
                  :data="matchedTrucksData"
                  label="TDO Matched Today"
                  type="bar"
                  id="matched"
                  height="300"
                ></single-chart>
              </div>
              <div class="col-md-4">
                <single-chart
                  :labels="tdoUploadedLabels"
                  :data="tdoUploadedData"
                  label="TDO's Uploaded"
                  type="bar"
                  id="tdoUploaded"
                  height="300"
                ></single-chart>
              </div>
              <div class="col-md-12">
                <single-chart
                  :labels="dailyCallInLabels"
                  :data="dailyCallInData"
                  label="Daily Matched Terminal Delivery Order"
                  type="line"
                  id="dailyMatched"
                  height="200"
                ></single-chart>
              </div>
            </div>
          </div>
        </div>
				<!-- end row -->
			</div>
		</div>
	</design-layout>
</template>

<script>
import SingleChart from "../../components/Analytics/Today.vue";
export default {
	data() {
		return {
			calledInLabels: ["Called In"],
			calledInData: [10],
      matchedTrucksData: [15],
      matchedTrucksLabel: ["TDO Matched"],
      tdoUploadedLabels: ["Terminal Delivery Order"],
      tdoUploadedData: [6],
      dailyCallInLabels: ["1st-nov", "2nd-nov", "3rd-nov", "4th-nov"],
      dailyCallInData: [0, 7, 3, 9]
		};
	},
	components: {
		"single-chart": SingleChart,
	},
};
</script>