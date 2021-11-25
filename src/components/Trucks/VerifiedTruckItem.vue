<template>
  <tr>
    <th scope="row">{{ counter + 1 }}</th>
    <td class="text-center">{{ timeConverter(dateVerified) }}</td>
    <td>
      {{ truckNo.toUpperCase() }} 
      <i class="bx bxs-badge-check bx-xs text-primary" style="font-size: 20px"></i> 
    </td>
    <td>{{ truckType }}</td>
    <td>{{ truckLength }}</td>
    <td><span class="badge rounded-pill bg-primary p-2">{{ chasisNo.toUpperCase() }}</span></td>
    <td class="text-center">
      <div class="btn-group btn-group-sm" role="group">
        <div class="btn-group" role="group">
          <button id="btnGroupVerticalDrop1" type="button" class="btn btn-danger btn-sm" @click="showActionHandler">
            <i class="bx bx-chevron-down"></i> 
          </button>
          <div class="dropdown-menu" :class="showActionDetails">
            <a class="dropdown-item" href="#">History</a>
            <a class="dropdown-item" href="#">Verify QR Code</a>
            <a class="dropdown-item" href="#">Truck Details</a>
            <a :href="truckImage" class="dropdown-item" target="_blank">View Image</a>
            <a class="dropdown-item" href="javascript:void(0)">
              {{ activationStatus ? 'Disable': 'Enable' }}
            </a>
          </div>
        </div>
      </div>
    </td>
    <td>{{ capitalizer(truckModel) }}</td>
    <td>{{ union }}</td>
    <td>{{ capitalizer(truckStatus) }}</td>
    <td class="text-center"><i class="bx bxs-truck" style="font-size: 20px; color: green"></i></td>
  </tr>                            
</template>

<script>
export default {
  props: {
    counter: { required: true, type: Number },
    dateVerified: { required: true, type: String },
    truckNo: { required: true, type: String },
    truckType: { required: true,  type: String },
    truckLength: { required: true, type: String },
    chasisNo: { required: true, type: String },
    truckModel: { required: true, type: String },
    union: { required: true, type: String },
    truckStatus: { required: true, type: String },
    activationStatus: { required: true, type: Boolean },
    truckImage: { required: true, type: String }
  },
  data() {
    return {
      showAction: false,
    }
  },
  methods: {
    showActionHandler() {
      this.showAction = !this.showAction
    }
  },
  computed: {
    showActionDetails() {
      let className;
      if(this.showAction) {
        className = 'show';
      }
      else {
        className = 'nothing';
      }
      return className;
    }
  }
}
</script>

<style scoped>
.dropdown-menu.show {
  position: absolute;
  z-index:100
}
</style>