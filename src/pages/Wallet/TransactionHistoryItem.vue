<template>
  <tr>
    <td><a href="javascript: void(0);" class="text-body fw-bold">{{ transactionRefId }} </a> </td>
    <td>{{ transactionDate }}</td>
    <td>&#x20A6;{{ formattedAmount }}</td>
    <td>{{ capitalizer(transactionType) }}</td>
    <td>
        <span class="badge badge-pill badge-soft-success font-size-11">{{ capitalizer(transactionStatus) }}</span>
    </td>
    <td>
        <i class="fab fa-cc-mastercard me-1"></i>{{ capitalizer(paymentMode) }}
    </td>
    <td>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
          View Details
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    transactionRef: {
      type: String,
      required: true
    },
    transactionDate: {
      type: String,
      required: true
    },
    amount: {
      required: true,
      type: Number
    },
    transactionType: {
      required: true,
      type: String
    },
    transactionStatus: {
      required: true,
      type: String
    },
    paymentMode: {
      required: true,
      type: String
    }
  },
  computed: {
    transactionRefId() {
      const firstFourTransRef = this.transactionRef.substr(0,4).toUpperCase()
      const lastFourTransRef = this.transactionRef.substr(20, 24).toUpperCase()
      return `${firstFourTransRef}****${lastFourTransRef}`
    },
    formattedAmount() {
      return this.currencyFormatter(this.amount) 
    },
  }
}
</script>