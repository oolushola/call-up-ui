<template>
  <div class="row">
    <div class="col-sm-6 mt-0">
      <address>
        <strong>Park Name</strong><br />
        {{ capitalizer(bookedPark.name) }}.<br />
      </address>
    </div>
    <div class="col-sm-6 text-sm-end">
      <address class="mt-0 mt-sm-0">
        <strong>Pregate Destination</strong><br />
        {{ bookedPark.contact.address }}<br />
        <span v-for="phone in bookedPark.contact.phoneNos" :key="phone">{{ phone }}, <br /></span>
      </address>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    bookedPark: {
      type: Object,
      require: true
    }
  }
}
</script>