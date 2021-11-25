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
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    const capitalized = arr.join(" ")
    return capitalized
  },

  generateTransactionRef() {
    return crypto.randomBytes(10).toString('hex').toUpperCase()
  },

  initializeFlutterWave(envChecker) {
    const script = document.createElement('script')
    script.src = envChecker !== 'production'
      ? 'https://ravemodal-dev.herokuapp.com/v3.js'
      : 'https://checkout.flutterwave.com/v3.js'
    return document.getElementsByTagName("head")[0].appendChild(script)
  },

  dateCalculator(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days)
    return result
  },

  // Slugify a string
  slugify(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
    return str;
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
      callback: (resp) => {
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
  },
}

export default methodMixins