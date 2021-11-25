<template>
  <tr>
    <td width="10%">
      <div class="form-check font-size-16 align-middle">
        <input @click="featureHandler" class="form-check-input" type="checkbox" >
      </div>
    </td>
    <td>{{ feature }}</td>
  </tr>
</template>

<script>
export default {
  props: {  
    feature: { type: String, required: true },
    featureId: { type: String, required: true }
  },
  
  methods: {
    featureHandler(e) {
      this.$emit("selectedFeature", {
        isChecked: e.target.checked,
        featureId: this.featureId
      })
    }
  }
}
</script>