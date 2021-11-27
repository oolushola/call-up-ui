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
          <section class="container bg-white p-2" v-for="booking in receipt" :key="booking.bookingQuery._id" >
            <header class="row m-2">
              <div class="col-md-12">
                <h4 class="mt-4 text-end" style="font-family: verdana; font-weight:bold">Parking Ticket</h4>
              </div>
              
              <!-- <div class="col-md-3 text-end">
                <img :src="booking.truckInfo.qrCode" height="90" />
              </div> -->
            </header>
            <main>
              <div class="table-responsive mb-3 text-center">
                <table class="table table-striped card-bg mb-2" style="font-family: verdana;">
                  <tbody>
                    <tr class="p-0">
                      <td>Truck Name</td>
                      <td>Plate Number</td>
                      <td>Journey Code</td>
                    </tr>
                    <tr>
                      <td class="bookingLabel">{{ capitalizer(booking.truckInfo.truckName) }}</td>
                      <td class="bookingLabel">{{ booking.truckInfo.plateNo.toUpperCase() }}</td>
                      <td class="bookingLabel">{{ booking.bookingQuery.journeyCode.toUpperCase() }}</td>
                    </tr>
                    <tr class="p-0">
                      <td>Expected Date of Arrival</td>
                      <td>Exit Date </td>
                      <td>Payment Status</td>
                    </tr>
                    <tr>
                      <td class="bookingLabel">{{ booking.bookingQuery.expectedDateOfArrival }}</td>
                      <td class="bookingLabel">{{ timeConverter(dateCalculator(new Date(booking.bookingQuery.expectedDateOfArrival), booking.bookingQuery.parkStayDuration) ) }}</td>
                      <td class="bookingLabel text-danger">Paid</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="table-responsive text-center">
                <table class="table table-border card-bg mb-2" style="font-family: verdana;">
                  <tbody>
                    <tr class="p-0">
                      <td>Holding Bay</td>
                      <td>Pregate Destination Park</td>
                      <td>Container / VEP NO</td>
                    </tr>
                    <tr>
                      <td class="bookingLabel">{{ capitalizer(booking.bookingQuery.parkId.name) }}</td>
                      <td class="bookingLabel">NA</td>
                      <td class="bookingLabel">NA</td>
                    </tr>
                    <tr class="p-0">
                      <td>Ticket Tag</td>
                      <td>Booking Category </td>
                    </tr>
                    <tr>
                      <td class="bookingLabel">{{ booking.bookingQuery._id.substr(15, 20).toUpperCase() }}</td>
                      <td class="bookingLabel">{{ booking.bookingQuery.bookingCategoryId.name }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="table-responsive text-center">
                <table class="table table-border card-bg mb-2" style="font-family: verdana;">
                  <tbody>
                    <tr class="p-0">
                      <td>Port Destination</td>
                      <td>Terminal</td>
                      <td>Booking Date</td>
                    </tr>
                    <tr>
                      <td class="bookingLabel">{{ capitalizer(booking.bookingQuery.terminalId.name) }}</td>
                      <td class="bookingLabel">NA</td>
                      <td class="bookingLabel">{{ new Date(booking.bookingQuery.createdAt).toUTCString().substring(0, 26) }}</td>
                    </tr>
                    <tr>
                      <td colspan="3">VALIDITY: 72 Hours for FLATBEDS. 7 Days for Empties. 2Weeks for Export after left pre gate.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style="display: flex; align-content:center; padding: 0 10px">
                <i class="bx bx-cut"></i>
                <div style="border-top: 2px dashed black; width: 100%; padding: 3px 0; top: 5px; position: relative"></div>
              </div>

              <div class="table-responsive text-center">
                <table class="table table-border card-bg mb-2" style="font-family: verdana;">
                  <tbody>
                     <tr class="p-0">
                      <td>Plate Number</td>
                      <td>Journey Code</td>
                      <td>Booking Number</td>
                    </tr>
                    <tr>
                      <td class="bookingLabel">{{ booking.truckInfo.plateNo.toUpperCase() }}</td>
                      <td class="bookingLabel">{{ booking.bookingQuery.journeyCode.toUpperCase() }}</td>
                      <td class="bookingLabel">{{ booking.bookingQuery.bookingNo.toUpperCase() }}</td>
                    </tr>
                  </tbody>
                </table>
                <div style="display: flex; justify-content: space-between">
                  <img :src="booking.truckInfo.qrCode" height="90" />
                  <span class="logo-sm">
                    <img src="../../../assets/images/logo-dark.png" height="17" style="margin-top: 25px" />
                </span>
                </div>
                
              </div>


              
              
              

            </main>
          </section>
        </div>
        


      </div>
    </div>
  </design-layout>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      printObj: {
        printLoading: true,
        id: 'printable',
        extraCss: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        beforeOpenCallback (vue) {
          vue.printLoading = true
          console.log('打开之前')
        },
        openCallback (vue) {
          vue.printLoading = false
          console.log('执行了打印')
        },
        closeCallback () {
          console.log('关闭了打印工具')
        }
      }
    }
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
      this.$htmlToPaper("printable")
    }
  },

	mounted() {
		let bookingIds = JSON.parse(localStorage.getItem("bookings"));
		this.bookingsPreview(bookingIds);
	},

}
</script>

<style scoped>
  .card-bg {
    background: rgba(123, 114, 108, 0.1);
  }
  .bookingLabel {
    font-size: 16px; font-family:verdana; font-weight:bold
  }
  .container {
    max-width: 700px;
  }
</style>