<template>
  <tr>
    <th scope="row">{{ counter + 1 }}</th>
    <td>{{ capitalizer(truckName) }}</td>
    <td>{{ truckNo.toUpperCase() }}</td>
    <td>{{ chasisNumber }}</td>
    <td>{{ capitalizer(truckModel) }}</td>
    <td>{{ truckType }}</td>
    <td>{{ truckUnion }}</td>
    <td> {{ truckLength }} </td>
    <td class="text-center">
      <button type="button" class="btn btn-danger btn-sm waves-effect waves-light">
        <i class="bx bx-radio-circle bx-burst font-size-16 align-middle"></i> Pending 
      </button>
    </td>
    <td class="text-center"><i class="bx bxs-truck" style="font-size: 20px;" :style="{'color': truckColor}"></i></td>
  </tr>
  </template>
  
  <script>
  export default {
    props: {
      counter: {
        required: true,
        type: Number
      },
      truckNo: {
        type: String,
        required: true
      },
      truckType: {
        type: String,
        required: true
      },
      truckLength: {
        type: String,
        required: true
      },
      truckModel: {
        required: true,
        type: String
      },
      truckName: {
        type: String,
        required: true
      },
      truckUnion: {
        required: true,
        type: String
      },
      chasisNumber: {
        required: true,
        type: String
      },
      truckColor: {
        required: true,
        type: String
      },
      paymentStatus: {
        required: true,
        type: Boolean
      },
      truckId: {
        required: true,
        type: String
      },
      verificationStatus: {
        required: true,
        type: Boolean
      }
    },
    data() {
      return {
        truckInfo: {
          truckNo: this.truckNo,
          chasisNo: this.chasisNumber,
          color: this.truckColor,
          truckId: this.truckId,
          truckType: this.truckType
        }
      }
    },
  }
  </script>