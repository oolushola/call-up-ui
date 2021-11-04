import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './routes/router'
import crypto from 'crypto'

import DesignLayout from './components/Layouts/DesignLayout.vue'
import AuthWrapper from './components/AuthWrapper.vue'
import DashboardCta from './components/DashboardCta.vue'


const app = createApp(App);

app.use(router)
app.use(store)

app.component('auth-wrapper', AuthWrapper)
app.component('dashboard-cta', DashboardCta)
app.component('design-layout', DesignLayout)

app.mixin({
  methods: {
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
      return crypto.randomBytes(6).toString('hex')
    }
  }
})

router.isReady().then(() => {
  app.mount('#app')
})
.catch(err => {
  console.log(err.message)
})

