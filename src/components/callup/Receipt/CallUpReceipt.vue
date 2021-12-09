<template>
	<design-layout>
		<div class="page-content print">
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
							<h4 class="mb-sm-0 font-size-18">Booking Receipt</h4>
							<div class="page-title-right">
								<ol class="breadcrumb m-0">
									<li class="breadcrumb-item active">
										<button v-print="printObj">Print</button>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<!-- end page title -->
				<div id="printable">
					<section
						class="container bg-white p-2"
						v-for="booking in receipt"
						:key="booking.bookingQuery._id"
					>
						<header class="row m-2">
							<div class="col-md-12">
								<h4
									class="mt-4 text-end"
									style="font-family: verdana; font-weight: bold"
								>
									Parking Ticket
								</h4>
							</div>
						</header>
						<receipt
							v-for="booking in receipt"
							:key="booking.bookingQuery._id"
							:booking="booking"
						/>
					</section>
				</div>
			</div>
		</div>
	</design-layout>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import Receipt from "./Receipt.vue";
export default {
	components: {
		receipt: Receipt,
	},
	data() {
		return {
			printObj: {
				printLoading: true,
				id: "printable",
				extraCss:
					"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
				beforeOpenCallback(vue) {
					vue.printLoading = true;
				},
				openCallback(vue) {
					vue.printLoading = false;
				},
				closeCallback() {
					console.log("done");
				},
			},
		};
	},

	computed: {
		...mapGetters({
			receipt: "getCallUpPreviews",
		}),
	},

	methods: {
		...mapActions({
			bookingsPreview: "previewCallUp",
		}),
		doPrint() {
			this.$htmlToPaper("printable");
		},
	},

	mounted() {
		let bookingIds = JSON.parse(localStorage.getItem("bookings"));
		this.bookingsPreview(bookingIds);
	},
	created() {
		document.title = `Call Up Receipt.`;
	},
};
</script>

<style scoped>
.container {
	max-width: 700px;
}
</style>