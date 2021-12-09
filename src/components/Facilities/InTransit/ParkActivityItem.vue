<template>
  <tbody>
    <tr>
      <th scope="row">{{ counter + 1 }}</th>
      <td>{{ bookingInfo.bookings.parkId.name }}</td>
      <td>{{ new Date(bookingInfo.bookings.createdAt).toUTCString().substr(0, 25) }}</td>
      <td>{{ capitalizer(bookingInfo.truckDetails.truckName) }}</td>
      <td>{{ capitalizer(bookingInfo.truckDetails.ownedBy.name) }}</td>
      <td>{{ bookingInfo.truckDetails.plateNo.toUpperCase() }}</td>
      <td class="text-center">
        <button @click="checkTruckIn" v-if="!bookingInfo.bookings.holdingBayActivity.inParkStatus" type="button" class="btn btn-outline-primary waves-effect btn-label waves-light">
          <i class="bx bxs-log-in label-icon"></i> Check In
        </button>
        <button @click="checkOutTruck" v-else type="button" class="btn btn-outline-danger waves-effect btn-label waves-light">
          <i class="bx bxs-log-out label-icon "></i> Check Out
        </button>
      </td>
      <td>
        <span v-for="(phoneNo) in bookingInfo.truckDetails.ownedBy.phoneNo" :key="phoneNo" class="badge bg-info p-2 me-1">{{ phoneNo }}</span>
      </td>
    </tr>
    <tr>
      <td colspan="10"><pre></pre></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    bookingInfo: {
      require: true,
      type: Object
    },
    counter: {
      require: true,
      type: Number
    }
  },
  methods: {
    checkTruckIn() {
      this.$emit("activityModal", {
        mode: "checkIn",
        ...this.bookingInfo
      })
    },
    checkOutTruck() {
      this.$emit("activityModal", {
        mode: "checkOut",
        ...this.bookingInfo
      })
    }
  }
}
</script>

