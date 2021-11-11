import crypto from 'crypto'

const methodMixins = {
  timeConverter(timestamp) {
    return new Date(timestamp).toLocaleString().substr(0, 10)
  },
  currencyFormatter(value) {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  },

  capitalizer: (string) => {
    const arr = string.split(" ")
    for (let i = 0; i< arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
    }
    const capitalized = arr.join(" ")
    return capitalized
  },

  generateTransactionRef() {
    return crypto.randomBytes(16).toString('hex')
  },

  initializeFlutterWave(envChecker) {
    const script = document.createElement('script')
    script.src = !envChecker 
    ? 'https://ravemodal-dev.herokuapp.com/v3.js' 
    : 'https://checkout.flutterwave.com/v3.js'
    return document.getElementsByTagName("head")[0].appendChild(script)
  },

  flutterwavePaymentCheckout(ref, amount, redirectUrl, name, email, title, description) {
    window.FlutterwaveCheckout({
      public_key: process.env.VUE_APP_FLW_PUBLIC_KEY,
      tx_ref: ref,
      amount: amount,
      currency: 'NGN',
      payment_options: 'card',
      redirect_url: redirectUrl,
      customer: {
        name: name,
        email: email,
      },
      callback : (resp) => {
        console.log('successful' + resp)
      },
      onclose: () => {
        this.$router.push({
          name: 'PaymentVerification',
          query: {
            status: 'failed',
            tx_ref: ref
          }
        })
      },
      customizations: {
        title: title,
        description: description,
        logo: 'https://kaya-world.com/assets/img/kaya/kaya-africa-techonology-nig-ltd.png'
      }
    })
  }
}

export default methodMixins