const computedMixins = {
  availableBalance() {
    return this.$store.getters.userWallet.availableBalance
  }
}

export default computedMixins