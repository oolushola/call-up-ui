<template>
	<div class="row">
		<div class="col-lg-12">
			<div class="content clearfix" style="margin: 20px 0">
				<booking-details
					@stepOneCompleted="getStepOneData"
					id="bookingDetails"
					ref="bookingInfo"
					:className="stepOneCompleted ? 'd-none' : 'current'"
				></booking-details>

				<add-on-service
					@navigator="determineStage"
					ref="addOnService"
					id="addOnService"
					:className="
						stepOneCompleted && !stepTwoCompleted
							? 'current'
							: 'd-none'
					"
					:bookingDetails="bookingDetails"
				></add-on-service>
			</div>
		</div>
		<!-- end col -->
	</div>
</template>

<script>
import BookingDetails from "../components/callup/BookingDetails.vue";
import AddOnService from "../components/callup/AddOnService.vue";
export default {
	components: {
		"booking-details": BookingDetails,
		"add-on-service": AddOnService,
	},
	data() {
		return {
			isSelected: "booking-details",
			parkCount: 0,
			stepOneCompleted: false,
			stepTwoCompleted: false,
			step3: false,
			bookingDetails: null,
		};
	},

	methods: {
		addPark() {
			this.parkCount = this.parkCount + 1;
		},

		getStepOneData(value) {
			this.stepOneCompleted = true;
			this.bookingDetails = value;
		},
		determineStage(value) {
			if (value.message === "back") {
				this.stepOneCompleted = false;
				this.stepTwoCompleted = false;
			} else {
				if (value.message === "forward") {
					this.stepOneCompleted = true;
					this.stepTwoCompleted = true;
				}
			}
		},
	},
};
</script>