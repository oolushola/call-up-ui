<template>
	<modal>
		<template v-slot:modalHeader>
			<h2>
				Park Activity:
				<span v-if="bookingInfo.mode === 'checkIn'">Check In.</span>
				<span v-else>Check Out</span>
			</h2>
		</template>
		<form @submit.prevent="authorizeCheckIn">
			<div class="row mt-4">
				<div class="col-md-3">
					<div class="form-group mb-3">
						<label>Booking Date</label>
					</div>
				</div>
				<div class="col-md-9">{{ new Date(bookingInfo.bookings.createdAt).toUTCString().substr(0, 26) }}</div>
				<div class="col-md-3">
					<div class="form-group mb-3">
						<label>Truck Name</label>
					</div>
				</div>
				<div class="col-md-9">{{ bookingInfo.truckDetails.truckName }}</div>

				<div class="col-md-3">
					<div class="form-group mb-3">
						<label>Plate No</label>
					</div>
				</div>
				<div class="col-md-9">
					{{ bookingInfo.truckDetails.plateNo.toUpperCase() }}
				</div>

				<h3 class="text-danger mb-4">
					Validate Truck
					<span v-if="bookingInfo.mode === 'checkIn'">Entry.</span>
					<span v-else>Exit.</span>
				</h3>

				<div class="col-md-6 mb-2">
					<div class="form-group">
						<label class="text-primary">Journey Code</label>
						<div class="input-group">
							<input
								type="text"
								class="form-control"
								v-model="formData.journeyCode"
								@blur="validateJourneyCode"
								:disabled="checkBookingCode"
							/>
							<div class="input-group-text" v-if="checkBookingCode">
								<i
									class="bx bx-loader-circle bx-spin text-info bx-sm"
									v-if="checkBookingCode && !journeyCodeStatus"
								></i>
								<i
									class="bx bx-check-circle text-success bx-sm"
									v-if="journeyCodeStatus === 200"
								></i>
								<i
									class="bx bxs-error-circle text-danger bx-sm bx-tada"
									v-if="journeyCodeStatus >= 400"
									@click="resetJourneyCode"
									title="Retry Journey Code"
								></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6 mb-2">
					<div class="form-group">
						<label class="text-primary">Entry Gate Serial No</label>
						<div class="input-group">
							<input type="text" class="form-control" v-model="formData.entryGateSerialNo" @blur="validateEntrySerialNo" :disabled="checkEntryGateSerialNo" />
							<div
								class="input-group-text"
								v-if="checkEntryGateSerialNo"
							>
								<i
									class="bx bx-loader bx-spin text-info bx-sm"
									v-if="checkEntryGateSerialNo && !gateEntrySerialNoStatus"
								></i>
								<i
									class="bx bx-check-circle text-success bx-sm"
									v-if="gateEntrySerialNoStatus === 200"
								></i>
								<i
									class="bx bxs-error-circle text-danger bx-sm bx-tada"
									v-if="gateEntrySerialNoStatus >= 400"
									@click="resetEntryGateSerialNo"
									title="Retry Entry Gate Serial No"
								></i>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-12" v-if="bookingInfo.mode !== 'checkIn'">
					<div class="form-group mb-3">
						<label class="text-primary">Exit Gate Serial No</label>
						<div class="input-group">
							<input type="text" class="form-control" v-model="formData.exitSerialNo"  @blur="validateExitSerialNo" :disabled="checkExitSerialNo" />
							<div class="input-group-text" v-if="checkExitSerialNo">
								<i
									class="bx bx-loader bx-spin text-info bx-sm"
									v-if="checkExitSerialNo && !exitSerialNoStatus"
								></i>
								<i
									class="bx bx-check-circle text-success bx-sm"
									v-if="exitSerialNoStatus === 200"
								></i>
								<i
									class="bx bxs-error-circle text-danger bx-sm bx-tada"
									v-if="exitSerialNoStatus >= 400"
									@click="resetExitSerialNo"
									title="Retry Exit Serial No"
								></i>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-12">
					<div class="">
						<label class="text-primary">&nbsp;</label>
						<button class="btn btn-success fw-bold" ref="checkIn" :disabled="!verifyCheckIn" v-if="bookingInfo.mode === 'checkIn'">
							AUTHORIZE CHECK IN
						</button>
						<button class="btn btn-success fw-bold" ref="checkOut" :disabled="!verifyCheckOut" v-else>
							AUTHORIZE CHECK OUT
						</button>
					</div>
				</div>
				
				<h4 v-if="statusResponse === 201" class="text-success mt-3">
					<i class="bx bx-check"></i>Park Activity Updated Successfully.
				</h4>
				<h5 v-if="statusResponse >= 500" class="text-info mt-3">
					<i class="bx bxs-error-circle"></i>Internal Server Error. We''ve notified our engineers about it.	
				</h5>
				<h5 v-if="statusResponse === 409" class="text-danger mt-3">
					<i class="bx bxs-error-alt"></i> This action can only be done one time. Truck already in park.
				</h5>
				<h5 v-if="statusResponse === 422" class="text-danger mt-3">
					<i class="bx bxs-message-error"></i> Sorry we can't process your request.
				</h5>
			</div>
		</form>
	</modal>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: {
		bookingInfo: {
			require: true,
			type: Object,
		},
	},
	data() {
		return {
			journeyCodeValidated: false,
			entryGateValidated: false,
			exitGateValidated: false,
			journeyCodeStatus: null,
      gateEntrySerialNoStatus: null,
			exitSerialNoStatus: null,
			loadEntryGate: false,
			formData: {
				journeyCode: "",
        entryGateSerialNo: "",
				exitSerialNo: ""
			},
			statusResponse: null
		};
	},

	methods: {
		async validateJourneyCode(e) {
			if (e.target.value.length === 12) {
				const journeyCodeReq = await this.$store.dispatch(
					"fetchJourneyCodeValidity",
					{
						journeyCode: this.formData.journeyCode.toLowerCase(),
						bookingId: this.bookingInfo.bookings._id,
					}
				);
				this.journeyCodeStatus = journeyCodeReq.status;
			}
		},
    async validateEntrySerialNo(e) {
      if (e.target.value.length === 10) {
				const entryGateSerialNoReq = await this.$store.dispatch(
					"verifyEntryGateSerialNo",
					{
						entryGateSerialNo: this.formData.entryGateSerialNo,
						bookingId: this.bookingInfo.bookings._id,
					}
				);
				this.gateEntrySerialNoStatus = entryGateSerialNoReq.status;
			}
    },
		async validateExitSerialNo(e) {
			if (e.target.value.length === 10) {
				const exitSerialNoReq = await this.$store.dispatch(
					"verifyExitSerialNo",
					{
						exitSerialNo: this.formData.exitSerialNo,
						bookingId: this.bookingInfo.bookings._id,
					}
				);
				this.exitSerialNoStatus = exitSerialNoReq.status;
			}
		},

		...mapActions({
			truckCheckIn: 'truckCheckIn',
			truckCheckOut: 'truckCheckOut'
		}),

		async authorizeCheckIn() {
			if(this.bookingInfo.mode === 'checkIn') {
				this.$refs.checkIn.innerHTML = '<i class="bx bx-loader bx-spin"></i> Processing Entry'
				this.$refs.checkIn.disabled = true
				const checkInReq = await this.truckCheckIn({
					journeyCode: this.formData.journeyCode,
					bookingId: this.bookingInfo.bookings._id
				})
				this.statusResponse = checkInReq.status
				this.$refs.checkIn.innerHTML = 'AUTHORIZE CHECK IN'
				this.$refs.checkIn.disabled = false
			}
			else{
				this.$refs.checkOut.innerHTML = '<i class="bx bx-loader bx-spin"></i> Processing Exit'
				this.$refs.checkOut.disabled = true
				const checkOutReq = await this.truckCheckOut({
					bookingId: this.bookingInfo.bookings._id
				})
				this.statusResponse = checkOutReq.status
				this.$refs.checkOut.innerHTML = 'AUTHORIZE CHECK OUT'
				this.$refs.checkOut.disabled = false
			}
		},

		resetJourneyCode() {
			this.journeyCodeStatus = null;
			this.formData.journeyCode = "";
		},
    resetEntryGateSerialNo() {
      this.gateEntrySerialNoStatus = null;
			this.formData.entryGateSerialNo = ""; 
    },
		resetExitSerialNo() {
			this.exitSerialNoStatus = null;
			this.formData.exitSerialNo = "";
		},
		codeChecker(checkInstance, size) {
			if(checkInstance.length >= size) {
				return true
			}
			else{
				return false
			}
		}
	},
	computed: {
		checkBookingCode() {
			return this.codeChecker(this.formData.journeyCode, 12)
		},
    checkEntryGateSerialNo() {
			return this.codeChecker(this.formData.entryGateSerialNo, 10)
    },
		checkExitSerialNo() {
			return this.codeChecker(this.formData.exitSerialNo, 10)
    },
		verifyCheckIn() {
			if(this.journeyCodeStatus === 200 && this.gateEntrySerialNoStatus === 200) {
				return true
			}
			else {
				return false
			}
		},
		verifyCheckOut() {
			if(this.verifyCheckIn && this.exitSerialNoStatus === 200) {
				return true
			}
			else{
				return false
			}
		}
	},
};
</script>

<style scoped>
input {
	border-radius: 0;
}
.input-group-text {
	border-radius: 0;
}
</style>