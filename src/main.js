import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './routes/router'
import callUpMixins from './mixins/mixin'

import DesignLayout from './components/Layouts/DesignLayout.vue'
import AuthWrapper from './components/AuthWrapper.vue'
import DashboardCta from './components/DashboardCta.vue'
import BaseModal from './components/UI/BaseModal.vue'


const app = createApp(App);

app.use(router)
app.use(store)
app.mixin(callUpMixins)

app.component('auth-wrapper', AuthWrapper)
app.component('dashboard-cta', DashboardCta)
app.component('design-layout', DesignLayout)
app.component('modal', BaseModal)

router.isReady().then(() => {
  app.mount('#app')
})
.catch(err => {
  console.log(err.message)
})

