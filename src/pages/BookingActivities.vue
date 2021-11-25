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
							<h4 class="mb-sm-0 font-size-18">Booking Activities</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item">{{ $store.state.user.name }}</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div class="row mb-2">
					<div class="col-md-3">
						<div class="input-group">
							<input
								type="text"
								class="form-control form-control-sm"
								id=""
								placeholder=""
							/>
							<div class="input-group-text"><i class="bx bx-search"></i></div>
							<div class="input-group-text"><i class="bx bx-download"></i></div>
						</div>
					</div>
					<div class="offset-md-3 col-md-6">
						<div class="input-group">
							<select class="form-control form-control-sm" id="">
								<option>Select Facility Location</option>
								<option>Terminal</option>
								<option>Available for Call Up</option>
							</select>
							<input type="date" class="form-control form-control-sm" id="" />
							<input type="date" class="form-control form-control-sm" id="" />
							<div class="input-group-text"><i class="bx bx-search"></i></div>
							<div class="input-group-text">
								<router-link title="Add Park" :to="{ name: 'newPark' }"
									><i class="bx bx-plus-medical"></i>
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<router-view></router-view>

				<booking-activities />
			</div>
			<!-- container-fluid -->
		</div>
	</design-layout>
</template>

<script>
import BookingActivities from "../components/callup/Bookings/Activities/BookingActivities.vue";
export default {
	components: {
		"booking-activities": BookingActivities,
	},
};
</script>