<template>
  <div class="overlay">
    <div class="main-modal">
      <header>
        <slot name="modalHeader"></slot>
      </header>
      <main class="">
        <slot></slot>
      </main>
      <footer>
        <button type="submit" class="btn btn-danger w-md m-1" @click="closeModal">Close</button>
        <slot name="modalFooter"></slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.state.displayModal = false
    }
  }
}
</script>

<style scoped>
.overlay{
  width: 100%;
  height: 100%;
  position: absolute;
  background:  rgba(140, 191, 158, 0.5);
  z-index: 0;
  top: 0;
  left: 0;
}
.main-modal {
  width: 500px;
  min-height: 100px;
  background: #fff;
  margin: auto 32%;
  position: relative;
  top: 13%;
  border-radius: 8px;
  padding: 20px 18px;
  z-index: 10;
}
</style>