<template>
  <div class="row">
    <div class="col-sm-6">
      <address>
        <strong>Terminal:</strong><br />
        <strong>{{ capitalizer(bookedTerminal.name) }}</strong><br />
        {{ bookedTerminal.contact.address }}<br />
        Nigeria<br /><br />
        <strong>Booking Category:</strong><br />
        {{ bookingCategory.name }}<br /><br />
      </address>
    </div>
    
    <div class="col-sm-6 mt-3 text-sm-end">
      <address>
        <strong>Booking Date:</strong><br />
        {{ timeConverter(dateBooked.createdAt) }}<br /><br />
        <strong>Truck No:</strong><br />
        {{ truckInfo.plateNo.toUpperCase() }}<br /><br />
      </address>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookedTerminal: {
      type: Object,
      require: true
    },
    bookingCategory: {
      type: Object,
      require: true
    },
    dateBooked: {
      type: Object,
      require: true
    },
    truckInfo: {
      type: Object,
      require: true
    }
  }
}
</script>