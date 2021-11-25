<template>
  <tr>
    <th scope="row">{{ counter + 1 }}</th>
    <td class="text-center">{{ timeConverter(tdo.createdAt) }}</td>
    <td>{{ capitalizer(tdo.terminalId.name) }}</td>
    <td>{{ capitalizer(tdo.clearingAgentId.name) }}</td>
    <td>
      <span v-if="tdo.dateMatched">{{ timeConverter(tdo.dateMatched) }}</span>
      <span v-else class="badge bg-danger">Match Not Found</span>
    </td>
    <td>
      <span v-if="tdo.dateCalledOut">{{ timeConverter(tdo.dateCalledOut) }}</span>
      <span v-else class="badge bg-info badge-pill">NA</span>  
    </td>
    <td>{{ tdo.transNo }}</td>
    <td>{{ capitalizer(tdo.containerType) }}</td>
    <td>{{ tdo.lineOperator.toUpperCase() }}</td>
    <td>{{ tdo.containerNo }}</td>
    <td>{{ tdo.size }}</td>
    <td class="text-center">{{ tdo.weight }}</td>
    <td class="text-center">
      <span v-if="tdo.matchedStatus"><i class="bx bxs-check-shield bx-sm text-success"></i></span>
      <span v-else><i class="bx bxs-x-circle bx-sm text-warning"></i></span>
      
    </td>
    <td>{{ tdo.location }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    tdo: {
      require: true,
      type: Object
    },
    counter: {
      require: true,
      type: Number
    }
  }
}
</script>