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
							<h4 class="mb-sm-0 font-size-18">Call Up</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item active"></li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<section
					role="tabpanel"
					aria-labelledby="basic-example-h-3"
					class="body"
				>
					<div class="row justify-content-center">
						<div class="col-lg-12">
							<div
								class="row"
								v-for="booking in pendingCallUps"
								:key="booking.bookingQuery._id"
							>
								<div class="col-lg-12">
									<div class="card">
										<div class="card-body">
											<div class="invoice-title">
												<h4 class="float-end font-size-16">
													<button
														@click="payNow(booking.bookingQuery._id)"
														class="btn btn-success font-weight-bold btn-sm"
														v-if="!booking.bookingQuery.paymentStatus"
													>
														PAY NOW
													</button>
													<!-- Parking Ticket #{{ booking.bookingQuery._id.substr(18).toUpperCase() }} -->
												</h4>
												<div class="mb-4">&nbsp;</div>
											</div>
											<hr />

											<booked-terminal
												:bookedTerminal="booking.bookingQuery.terminalId"
												:bookingCategory="
													booking.bookingQuery.bookingCategoryId
												"
												:dateBooked="booking.bookingQuery"
												:truckInfo="booking.truckInfo"
											/>

											<booked-park :bookedPark="booking.bookingQuery.parkId" />
											<booking-stop-over
												:bookingId="booking.bookingQuery._id"
												:stops="booking.bookingQuery.stops"
											/>
											<booked-add-on-service
												:bookingId="booking.bookingQuery._id"
												:services="booking.bookingQuery.addOnService"
											/>
											<payment-modal
												v-if="showModal && !showPaymentResponseModal"
												:bookingId="bookingId"
												:stops="booking.bookingQuery.stops"
												:addOnServices="booking.bookingQuery.addOnService"
												@displayPaymentResponse="showPaymentResponse"
												:charge="parkCharge"
											/>

											<payment-response :paymentResponse="paymentResponse" v-if="showPaymentResponseModal && showModal" />

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	</design-layout>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BookedTerminal from "./BookedTerminalDetail.vue";
import BookedPark from "./BookedPark.vue";
import BookingStopOver from "./BookingStopOver.vue";
import BookedAddOnService from "./BookedAddOnService.vue";
import PaymentModal from "./PaymentModal.vue";
import PaymentResponse from "./PaymentResponse.vue"

export default {
	data() {
		return {
			bookingId: "",
			showPaymentResponseModal: false,
			paymentResponse: {},
			parkCharge: 5000,
		};
	},

	components: {
		"booked-terminal": BookedTerminal,
		"booked-park": BookedPark,
		"booking-stop-over": BookingStopOver,
		"booked-add-on-service": BookedAddOnService,
		"payment-modal": PaymentModal,
		"payment-response": PaymentResponse
	},

	computed: {
		showModal() {
			return this.$store.state.displayModal;
		},
		...mapGetters({
			pendingCallUps: "getCallUpPreviews",
		}),
	},

	methods: {
		...mapActions({
			bookingsPreview: "previewCallUp",
		}),
		payNow(tripId) {
			this.bookingId = tripId;
			this.$store.state.displayModal = true;
		},
		showPaymentResponse(value) {
			this.showPaymentResponseModal = true
			this.paymentResponse = value
		}
	},

	mounted() {
		let bookingIds = JSON.parse(localStorage.getItem("bookings"));
		this.bookingsPreview(bookingIds);
	},

};
</script>