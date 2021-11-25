<template>
  <tr>
    <th scope="row">{{ counter + 1}}</th>
    <td class="text-center">{{ timeConverter(tdo.createdAt) }}</td>
    <td>{{ capitalizer(tdo.clearingAgentId.name) }}</td>
    <td>{{ tdo.transNo }}</td>
    <td>{{ capitalizer(tdo.containerType) }}</td>
    <td>{{ tdo.lineOperator }}</td>
    <td>{{ tdo.containerNo.toUpperCase() }}</td>
    <td>{{ tdo.size }}</td>
    <td>{{ tdo.weight }}</td>
    <td class="text-center">
      <i class="bx bx-loader-alt bx-tada bx-sm text-warning"></i>
    </td>
    <td>{{ tdo.location }}</td>
  </tr> 
</template>


<script>
export default {
  props: {
    counter: {
      require: true, type: Number
    },
    tdo: {
      require: true,
      type: Object
    }
  }
}
</script>