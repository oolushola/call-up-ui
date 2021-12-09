<template>
	<div class="row">
		<div class="col-md-12">
			<p>Verify Call Up Receipt</p>
			<div class="input-group">
				<input
					type="text"
					class="form-control journeyCode"
					@keyup="changeToUpperCase"
					v-model="journeyCode"
					placeholder="Enter Journey Code"
					:disabled="isLoading"
					maxlength="12"
				/>
				<div class="input-group-text">
					<button class="btn btn-success" @click="showQr">
						Scan QR Code <i class="bx bx-qr-scan"></i>
					</button>
				</div>
			</div>
		</div>

		<spinner class="mt-2 mb-2" v-if="isLoading" />
		<div class="row">
			<div class="col-md-12">
				<the-receipt :booking="preview"></the-receipt>
			</div>
		</div>
	</div>
	<teleport to="body">
		<modal v-if="showQr">
			<qr-stream
				@decode="onDecode"
				style="height: 200px; width: 200px"
			></qr-stream>
		</modal>
	</teleport>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Receipt from "../../components/callup/Receipt/Receipt.vue";
import { QrStream } from "vue3-qr-reader";

export default {
	data() {
		return {
			journeyCode: "",
			showQr: false,
		};
	},
	components: {
		"the-receipt": Receipt,
		"qr-stream": QrStream,
	},
	computed: {
		...mapGetters({
			isLoading: "getParkResource",
			preview: "getCallUpPreviews",
		}),
	},

	methods: {
		async changeToUpperCase(e) {
			this.journeyCode = e.target.value.toUpperCase();
			if (this.journeyCode.length === 12) {
				const verifyBooking = await this.viewBooking(this.journeyCode);
				if (verifyBooking.status === 200) {
					this.journeyCode = "";
				}
			}
		},
		scanQrCode() {
			this.showQr = true;
		},
		...mapActions({
			viewBooking: "previewJourneyCode",
		}),
		onDecode(url) {
			console.log(url);
		},
	},
};
</script>

<style scoped>
input {
	border-radius: 0;
}
.journeyCode {
	letter-spacing: 30px;
	padding: 20px;
	font-size: 20px;
	font-weight: bold;
}
.journeyCode::placeholder {
	letter-spacing: 0;
	font-weight: normal;
}
</style>