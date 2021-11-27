<template>
  <tr>
    <td>{{ counter + 1 }}</td>
    <td>{{ service.addOn }}</td>
    <td class="text-end">&#x20A6;{{ currencyFormatter(service.amount) }}</td>
    <td class="text-end">
      <button class="btn btn-danger btn-sm" @click="removeAddOnService({service: service.addOn, bookingId })">
        <i class="bx bxs-minus-circle"></i>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    counter: {
      require: true,
      type: Number
    },
    service: {
      require: true,
      type: Object
    },
    bookingId: {
      require: true,
      type: String
    }
  },

  methods: {
    removeAddOnService(bookingAddOnInfo) {
      this.$store.dispatch('removeHoldingBayOnService', bookingAddOnInfo)
    }
  }
}
</script>