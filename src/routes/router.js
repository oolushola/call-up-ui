import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../pages/Auth/Login.vue'
import NotFoundComponent from '../pages/NotFound.vue'
import SignUpComponent from '../pages/Auth/SignUp.vue'
import PasswordRecoveryComponent from '../pages/Auth/PasswordRecovery.vue'
import EmailConfirmationComponent from '../pages/Auth/EmailConfirmation.vue'
import VerifyEmailComponent from '../pages/Auth/VerifyEmail.vue'
import DashboardComponent from '../pages/Dashboards/Dashboard.vue'
import TruckManagement from '../pages/Trucks.vue'
import VerifiedTrucks from '../pages/VerifiedTrucks.vue'
import WalletTransactionHistory from '../pages/Wallet/TransactionHistory.vue'
import FundWallet from '../pages/Wallet/FundWallet.vue'
import Parks from '../pages/Facilities/Parks.vue'
import BookCallUp from '../pages/BookCallUp.vue'
import store from '../store/store'

const router = createRouter({
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'exact-link',
  history: createWebHistory(),
  routes: [
    { name: 'index', path: '/', redirect: '/login' },
    { name: 'login', path: '/login',  component: LoginComponent },
    { name: 'register', path: '/sign-up', component: SignUpComponent },
    { name: 'passwordRecovery', path: '/password-recovery', component:PasswordRecoveryComponent },
    { path: '/email-confirmation', component: EmailConfirmationComponent },
    { name: 'verifyEmail', path: '/verify-email/auth/is/click', component: VerifyEmailComponent },
    { name: 'dashboard', path: '/dashboard', component: DashboardComponent, meta: {
        requiresAuth: true
      }
    },
    { name: 'TruckManagement', path: '/trucks', component: TruckManagement, meta: {
        requiresAuth: true
      }
    },
    { name: 'verifiedTrucks', path: '/verified-trucks', component: VerifiedTrucks, meta: {
        requiresAuth: true
      }
    },
    { name: 'TransactionHistory', path: '/wallet/transaction-history', component: WalletTransactionHistory, meta: {
        requiresAuth: true
      }
    },
    { name: 'FundWallet', path: '/wallet/fund-wallet', component: FundWallet, meta: {
        requiresAuth: true
      }
    },
    { name: 'parks', path: '/facilities/parks', component: Parks, meta: {
      requiresAuth: true
    }},
    { name:'BookCallUp', path: '/book-call-up/new', component: BookCallUp, meta: {
        requiresAuth: true
      }
    },
    {
      name: '404',
      path: '/:notFound(.*)*',
      component: NotFoundComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth && store.state.token) {
    next("/dashboard");
  } else if (to.meta.requiresAuth && !store.state.token) {
    next(from);
  } else {
    next();
  }
})

export default router