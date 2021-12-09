<template>
  <tr>
    <td class="text-center me-2 pt-2 text-danger fw-bold" :colspan="colspan">
      <i class="bx bxs-error-alt"></i> {{ label }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    colspan: {
      require: true,
      type: String
    },
    label: {
      require: true,
      type: String
    }
  }
}
</script>