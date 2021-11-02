<template>
  <wallet>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Activities</h4>

                <div class="table-responsive">
                    <table class="table align-middle table-striped table-nowrap mb-0">
                        <thead class="table-light">
                            <tr>
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
                                <td><a href="javascript: void(0);" class="text-body fw-bold">#SK2540</a> </td>
                                <td>07 Oct, 2019</td>
                                <td>&#x20A6;400,000.00</td>
                                <td>Credit</td>
                                <td>
                                    <span class="badge badge-pill badge-soft-success font-size-11">Successful</span>
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
                            <tr>
                                <td><a href="javascript: void(0);" class="text-body fw-bold">#SK2541</a> </td>
                                <td>07 Oct, 2019</td>
                                <td>&#x20A6;300,000.00</td>
                                <td>Credit</td>
                                <td>
                                    <span class="badge badge-pill badge-soft-danger font-size-11">Failed</span>
                                </td>
                                <td>
                                    <i class="fab fa-cc-mastercard me-1"></i> Interswitch
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
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
    </wallet>
</template>

<script>
import Wallet from '../../components/Wallet/Wallet.vue'
export default {
    components: {
        wallet: Wallet
    }
}
</script>