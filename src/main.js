import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './routes/router'

import './assets/libs/jquery/jquery.min.js'
import './assets/libs/bootstrap/js/bootstrap.bundle.min.js'
import './assets/libs/metismenu/metisMenu.min.js'
import './assets/libs/node-waves/waves.min.js'
import './assets/js/app.js'
import DesignLayout from './components/Layouts/DesignLayout.vue'
import AuthWrapper from './components/AuthWrapper.vue'
import DashboardCta from './components/DashboardCta.vue'



const app = createApp(App);

app.use(router)
app.use(store)

app.component('auth-wrapper', AuthWrapper)
app.component('dashboard-cta', DashboardCta)
app.component('design-layout', DesignLayout)

router.isReady().then(() => {
  app.mount('#app')
})
.catch(err => {
  console.log(err.message)
})
