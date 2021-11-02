<template>
  <design-layout>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Call Up: BCU1092XHSILO9019VY</h4>
                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item active">New Booking</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <!-- end page title -->
            
            <div class="row">
              <div class="col-lg-12">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title mb-4">Book a Call Up {{ isSelected }} </h4>

                          <div id="basic-example" role="application" class="wizard clearfix">
                            <div class="steps clearfix">
                              <ul role="tablist">
                                <li role="tab" class="done" :class="showBookingTab" aria-disabled="false" aria-selected="true" @click="displayTabContent('booking-details')">
                                  <a id="bookingDetails" href="#booking-details" aria-controls="basic-example-p-0">
                                    <span class="current-info audible">current step: </span>
                                    <span class="number">1.</span>Booking Details
                                  </a>
                                </li>
                                <li role="tab" class="done" :class="showAddOnTab" aria-disabled="false" aria-selected="false" @click="displayTabContent('add-on-services')">
                                  <a id="addOnServices" href="#add-on-services" aria-controls="basic-example-p-1">
                                    <span class="number">2.</span> Add-on Services
                                    </a>
                                  </li>
                                  <li role="tab" class="done" :class="showConfirmBookingTab" aria-disabled="false" aria-selected="false" @click="displayTabContent('confirm-bookings')">
                                    <a id="confirmDetail" href="#confirm-details" aria-controls="basic-example-p-2">
                                      <span class="number">3.</span> Confirm Details
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="content clearfix">
                              <h3  tabindex="-1" class="title">Booking Info</h3>
                              <section id="bookingDetails" role="tabpanel" class="body" :class="isSelected === 'booking-details' ? 'current': 'd-none'"  aria-hidden="false">
                                  <form>
                                      <div class="row">
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                  <label for="basicpill-firstname-input">Port Terminal</label>
                                                  <input type="text" class="form-control form-control-sm" id="basicpill-firstname-input">
                                              </div>
                                          </div>
                                          
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                  <label for="basicpill-phoneno-input">Truck</label>
                                                  <input type="text" class="form-control form-control-sm" id="basicpill-phoneno-input">
                                              </div>
                                          </div>

                                          <div class="col-lg-4">
                                            <div class="mb-3">
                                              <label for="basicpill-email-input">Booking Category</label>
                                              <select type="email" class="form-control form-control-sm" id="basicpill-email-input">
                                                <option>...</option>
                                              </select>
                                            </div>
                                          </div>
                                      </div>

                                      <div class="row">
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                <label for="basicpill-email-input">Where are your trucks coming from?</label>
                                                <input type="text" class="form-control form-control-sm" id="basicpill-email-input">
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                <label for="basicpill-email-input">Driver</label>
                                                <input type="text" class="form-control form-control-sm" id="basicpill-email-input">
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                <label for="basicpill-email-input">How many day(s) will your truck be staying for?</label>
                                                <input type="email" class="form-control form-control-sm" id="basicpill-email-input">
                                              </div>
                                          </div>
                                      </div>
                                       <div class="row">
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                  <label for="basicpill-email-input">Expected Arrival Date </label>
                                                  <input type="date" class="form-control form-control-sm" id="basicpill-email-input">
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                              <div class="mb-3">
                                                <label for="basicpill-email-input">Expected Arrival Time</label>
                                                <input type="time" class="form-control form-control-sm" id="basicpill-email-input">
                                              </div>
                                          </div>
                                          <div class="col-lg-4">
                                            <div class="mb-3">
                                              <label>&nbsp;</label>
                                              <button type="button" @click="addPark" class="btn btn-danger btn-sm d-block"><i class="bx bx-plus-medical"></i>Add Parks</button>
                                            </div>
                                          </div>
                                      </div>
                                      <div class="row" v-for="n in parkCount" :key="n">
                                        <div class="col-lg-4">
                                          <div class="mb-3">
                                            <label for="basicpill-email-input">Choose a parking facility</label>
                                            <select type="text" class="form-control form-control-sm" id="basicpill-email-input">
                                              <option>...</option>
                                            </select>
                                          </div>
                                        </div>
                                        <div class="col-lg-4">
                                          <div class="mb-3">
                                            <label for="basicpill-email-input">Expected Date of Arrival</label>
                                            <input type="date" class="form-control form-control-sm" id="basicpill-email-input">
                                          </div>
                                        </div>
                                        <div class="col-lg-4">
                                          <div class="mb-3">
                                            <label for="basicpill-email-input">How many day(s) are you staying for?</label>
                                            <input type="email" class="form-control form-control-sm" id="basicpill-email-input">
                                          </div>
                                        </div>
                                    </div>
                                      
                                      
                                  </form>
                              </section>

                              <!-- Add On Services -->
                              <h3 id="addOnServices" tabindex="-1" class="title">Add-On Services</h3>
                              <section id="addOnServices" role="tabpanel" aria-labelledby="basic-example-h-2" class="body" :class="isSelected === 'add-on-services' ? 'current': 'd-none'" aria-hidden="true" style="">
                                  <div class="table-responsive">
                                    <table class="table table-striped">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div class="form-check font-size-16">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck02">
                                                <label class="form-check-label" for="transactionCheck02"></label>
                                              </div>
                                          </th>
                                          <th>Service</th>
                                          <th>Charges</th>
                                          <th class="text-center">No of Days</th>
                                          <th class="text-center">Sub Charge</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="n in 10" :key="n">
                                          <td>
                                              <div class="form-check font-size-16">
                                                <input class="form-check-input" type="checkbox" id="transactionCheck02">
                                                <label class="form-check-label" for="transactionCheck02"></label>
                                              </div>
                                          </td>
                                          <td>Accomodation</td>
                                          <td>&#x20A6;15,000.00</td>
                                          <td class="text-center">2</td>
                                          <td class="text-center">&#x20A6;15,000.00</td>
                                        </tr>
                                        <tr>
                                          <td colspan="3">&nbsp;</td>
                                          <td class="font-weight-bold">Total</td>
                                          <td class="font-weight-bold text-center">&#x20A6;150,000.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                              </section>

                              <!-- Confirm Details -->
                              <h3 id="confirmDetail" tabindex="-1" class="title">Confirm Detail</h3>
                              <section id="confirmDetail" role="tabpanel" aria-labelledby="basic-example-h-3" class="body"  :class="isSelected === 'confirm-bookings' ? 'current': 'd-none'">
                                  <div class="row justify-content-center">
                                    <div class="col-lg-12">
                                      <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="invoice-title">
                                            <h4 class="float-end font-size-16">Parking Ticket # 12345</h4>
                                            <div class="mb-4">&nbsp;</div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                          <div class="col-sm-6">
                                                <address>
                                                    <strong>Port: </strong><br>Apapa Port.<br><br>
                                                    <strong>Terminal:</strong><br />
                                                    <strong>Flour Mills of Nigeria Plc</strong><br>
                                                    3 Imam Dauda Street, Apapa, Lagos,<br>
                                                    Nigeria<br><br>
                                                    <strong>Booking Category:</strong><br>
                                                  Pregate<br><br>
                                                </address>
                                            </div>
                                            <div class="col-sm-6 mt-3 text-sm-end">
                                                <address>
                                                  <strong>Booking Date:</strong><br>
                                                  October 16, 2019<br><br>
                                                  <strong>Truck No:</strong><br>
                                                  ABC123XY, LND765XY<br><br>
                                                </address>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-6 mt-0">
                                                <address>
                                                    <strong>Park Name</strong><br>
                                                    Imam Dauda, non port park.<br>
                                                </address>
                                            </div>
                                            <div class="col-sm-6 text-sm-end">
                                                <address class="mt-0 mt-sm-0">
                                                    <strong>Pregate Destination</strong><br>
                                                    Kenny Rigdon<br>
                                                    1234 Main<br>
                                                    Apt. 4B<br>
                                                    Springfield, ST 54321
                                                </address>
                                            </div>
                                        </div>
                                        <div class="py-2 mt-3">
                                            <h3 class="font-size-15 fw-bold">Add-On Services</h3>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th style="width: 70px;">No.</th>
                                                        <th>Item</th>
                                                        <th class="text-end">Price</th>
                                                        <th class="text-end">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>Accomodation</td>
                                                        <td class="text-end">&#x20A6;15,000.00</td>
                                                        <td class="text-end">
                                                          <button class="btn btn-danger btn-sm">
                                                            <i class="bx bxs-minus-circle"></i>
                                                          </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>02</td>
                                                        <td>Skote - Landing Template</td>
                                                        <td class="text-end">&#x20A6;399.00</td>
                                                        <td class="text-end">
                                                          <button class="btn btn-danger btn-sm">
                                                            <i class="bx bxs-minus-circle"></i>
                                                          </button>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>03</td>
                                                        <td>Veltrix - Admin Dashboard Template</td>
                                                        <td class="text-end">&#x20A6;499.00</td>
                                                        <td class="text-end">
                                                          <button class="btn btn-danger btn-sm">
                                                            <i class="bx bxs-minus-circle"></i>
                                                          </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3" class="text-end">Sub Total</td>
                                                        <td class="text-end">&#x20A6;1397.00</td>
                                                        
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td colspan="3" class="border-0 text-end">
                                                            <strong>Total</strong></td>
                                                        <td class="border-0 text-end"><h4 class="m-0">&#x20A6;1410.00</h4></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                                    </div>
                                  </div>
                              </section>
                          </div><div class="actions clearfix"><ul role="menu" aria-label="Pagination"><li class="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Previous</a></li><li aria-hidden="false" aria-disabled="false" class="" style=""><a href="#next" role="menuitem">Next</a></li><li aria-hidden="true" style="display: none;"><a href="#finish" role="menuitem">Finish</a></li></ul></div></div>

                      </div>
                      <!-- end card body -->
                  </div>
                  <!-- end card -->
              </div>
              <!-- end col -->
            </div>
          
           

            
            
        </div> <!-- container-fluid -->
    </div>
  </design-layout>

</template>

<script>
export default {
  data() {
    return {
      isSelected: 'booking-details',
      parkCount: 0,
    }
  },
  computed: {
    showBookingTab() {
      let className = null
      if(this.isSelected === 'booking-details') {
        className = 'current';
      }
      else {
        className = '';
      }
      return className
    },
    showAddOnTab() {
      let className = null
      if(this.isSelected === 'add-on-services') {
        className = 'current';
      }
      else {
        className = '';
      }
      return className          
    },
    showConfirmBookingTab() {
      let className = null
      if(this.isSelected === 'confirm-bookings') {
        className = 'current';
      }
      else {
        className = '';
      }
      return className
    },
  },
  methods: {
    addPark() {
      return this.parkCount++;
    },
    displayTabContent(content) {
      this.isSelected = content
    }
  },
}
</script>

<style scoped>
input, select {
  border-radius: 0;
}
</style>