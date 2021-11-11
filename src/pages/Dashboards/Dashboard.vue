<template>
  <design-layout>
    <div class="page-content">
      <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18">Dashboard</h4>
                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><router-link :to="{name: 'dashboard'}">Dashboard</router-link></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
              <div class="col-xl-4">
                  <div class="card overflow-hidden">
                      <div class="bg-primary bg-soft">
                          <div class="row">
                              <div class="col-7">
                                  <div class="text-primary p-3">
                                      <h5 class="text-primary">Welcome Back !</h5>
                                      <p>Call Up Dashboard</p>
                                  </div>
                              </div>
                              <div class="col-5 align-self-end">
                                  <img src="../../assets/images/profile-img.png" alt="" class="img-fluid">
                              </div>
                          </div>
                      </div>
                      <div class="card-body pt-0">
                          <div class="row">
                              <div class="col-sm-4">
                                  <div class="avatar-md profile-user-wid mb-4">
                                      <img src="../../assets/images/users/avatar-1.jpg" alt="" class="img-thumbnail rounded-circle">
                                  </div>
                                  <h5 class="font-size-15 text-truncate">{{ $store.getters.nameCapitalizer }}</h5>
                                  <p class="text-muted mb-0 text-truncate">{{ capitalizer(user.userType) }}</p>
                              </div>
                              <div class="col-sm-8">
                                  <div class="pt-4">
                                      <div class="row">
                                          <div class="col-6">
                                              <h5 class="font-size-15">15 Trucks</h5>
                                              <p class="text-muted mb-0">In Parks</p>
                                          </div>
                                          <div class="col-6">
                                              <h5 class="font-size-15">$1,245.00</h5>
                                              <p class="text-muted mb-0">Cost</p>
                                          </div>
                                      </div>
                                      <div class="mt-4">
                                          <a href="javascript: void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View Profile <i class="mdi mdi-arrow-right ms-1"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-xl-8">
                  <div class="row">
                      <dashboard-cta title="Bookings" value="1235" icon="bx-copy-alt"></dashboard-cta>
                      <dashboard-cta title="Wallet Balance" value="&#x20A6;350k" icon="bx-wallet"></dashboard-cta>
                      <dashboard-cta title="Total Trucks" value="0" icon="bxs-truck"></dashboard-cta>
                  </div>
                  <div class="row">
                      <dashboard-cta title="Failed Transactions" value="0" icon="bx-sad"></dashboard-cta>
                      <dashboard-cta title="Completed Transactions" value="0" icon="bx-check-circle"></dashboard-cta>
                      <dashboard-cta title="Support Ticket" value="0" icon="bx-support"></dashboard-cta>
                  </div>
              </div>
          </div>
          <!-- end row -->
          <div class="row">
              <div class="col-lg-12">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title mb-4">Latest Transaction</h4>
                          <div class="table-responsive">
                              <table class="table align-middle table-nowrap mb-0">
                                  <thead class="table-light">
                                      <tr>
                                          <th style="width: 20px;">
                                              <div class="form-check font-size-16 align-middle">
                                                  <input class="form-check-input" type="checkbox" id="transactionCheck01">
                                                  <label class="form-check-label" for="transactionCheck01"></label>
                                              </div>
                                          </th>
                                          <th class="align-middle">Order ID</th>
                                          <th class="align-middle">Date</th>
                                          <th class="align-middle">Amount</th>
                                          <th class="align-middle">Service</th>
                                          <th class="align-middle">Payment Status</th>
                                          <th class="align-middle">Payment Method</th>
                                          <th class="align-middle">View Details</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <div class="form-check font-size-16">
                                                  <input class="form-check-input" type="checkbox" id="transactionCheck02">
                                                  <label class="form-check-label" for="transactionCheck02"></label>
                                              </div>
                                          </td>
                                          <td><a href="javascript: void(0);" class="text-body fw-bold">#SK2540</a> </td>
                                          <td>07 Oct, 2019</td>
                                          <td>$400,000.00</td>
                                          <td>Wallet Funding</td>
                                          <td>
                                              <span class="badge badge-pill badge-soft-success font-size-11">Paid</span>
                                          </td>
                                          <td>
                                              <i class="fab fa-cc-mastercard me-1"></i> Flutterwave
                                          </td>
                                          <td>
                                              <!-- Button trigger modal -->
                                              <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                                  View Details
                                              </button>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                          <!-- end table-responsive -->
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
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    },
    methods: {
        capitalizer(string) {
            const arr = string.split(" ")
            for (let i = 0; i< arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
            }
            const capitalized = arr.join(" ")
            return capitalized
        }
    }
}
</script>