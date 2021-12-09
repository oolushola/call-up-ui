import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "../pages/Auth/Login.vue";
import NotFoundComponent from "../pages/NotFound.vue";
import SignUpComponent from "../pages/Auth/SignUp.vue";
import PasswordRecoveryComponent from "../pages/Auth/PasswordRecovery.vue";
import EmailConfirmationComponent from "../pages/Auth/EmailConfirmation.vue";
import VerifyEmailComponent from "../pages/Auth/VerifyEmail.vue";
import DashboardComponent from "../pages/Dashboard.vue";
import TruckManagement from "../pages/Trucks.vue";
import VerifiedTrucks from "../pages/VerifiedTrucks.vue";
import WalletTransactionHistory from "../pages/Wallet/TransactionHistory.vue";
import FundWallet from "../pages/Wallet/FundWallet.vue";
import Parks from "../pages/Facilities/Parks.vue";
import ParkForm from "../components/Facilities/ParkForm.vue";
import PaymentVerification from "../pages/Wallet/PaymentVerification.vue";
import Profile from "../pages/Profile.vue";
import ViewTdo from "../pages/ClearingAgents/ViewTdo.vue";
import TrucksInPark from "../pages/Facilities/TrucksInPark";
import CalledOutTrucks from "../pages/Facilities/CalledOutTrucks";

import TerminalAnalytics from "../pages/Terminals/TerminalAnalytics";
import UploadTdo from "../pages/Terminals/UploadTdo";
import MatchedTdo from "../pages/Terminals/MatchedTdo";
import TerminalHistory from "../pages/Terminals/TerminalHistory";
import CalledInTrucks from "../pages/Terminals/CalledInTrucks";
import ConfirmBookingDetails from "../components/callup/Bookings/ConfirmBookingDetail";
import BookingActivities from "../pages/BookingActivities.vue";

import HoldingBay from '../pages/Facilities/HoldingBays.vue'
import BookHoldingBay from "../pages/BookHoldingBay.vue";
import HoldingBayReceipt from "../components/callup/Receipt/CallUpReceipt.vue"
import ParkActivities from "../pages/Facilities/ParkActivities.vue"
import CreateUnion from "../pages/Union.vue"


import store from "../store/store";

const router = createRouter({
  linkActiveClass: "link-active",
  linkExactActiveClass: "exact-link",
  history: createWebHistory(),
  routes: [
    { name: "index", path: "/", redirect: "/login" },
    { name: "login", path: "/login", component: LoginComponent },
    { name: "register", path: "/sign-up", component: SignUpComponent },
    {
      name: "passwordRecovery",
      path: "/password-recovery",
      component: PasswordRecoveryComponent,
    },
    { path: "/email-confirmation", component: EmailConfirmationComponent },
    {
      name: "verifyEmail",
      path: "/verify-email/auth/is/click",
      component: VerifyEmailComponent,
    },
    {
      name: "dashboard",
      path: "/dashboard",
      component: DashboardComponent,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "profile",
      path: "/:name/profile",
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      name: "TruckManagement",
      path: "/trucks",
      component: TruckManagement,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "verifiedTrucks",
      path: "/verified-trucks",
      component: VerifiedTrucks,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "TransactionHistory",
      path: "/wallet/transaction-history",
      component: WalletTransactionHistory,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "FundWallet",
      path: "/wallet/fund-wallet",
      component: FundWallet,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "parks",
      path: "/facilities/parks",
      component: Parks,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          name: "newPark",
          path: "new",
          component: ParkForm,
        },
      ],
    },
    {
      name: "HoldingBays",
      path: "/holding-bays",
      component: HoldingBay,
      meta: {
        requiresAuth: true
      },
      children: [{
        name: "BookHoldingBay",
        path: "/book-holding-bay/new",
        component: BookHoldingBay,
        meta: {
          requiresAuth: true,
        },
      }]
    },
    {
      name: "previewCallUp",
      path: "/booking/preview",
      component: ConfirmBookingDetails,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "holdingBayReceipt",
      path: "/booking-receipt/:bookingId",
      component: HoldingBayReceipt,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "PaymentVerification",
      path: "/payment-verification",
      component: PaymentVerification,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "assignedTdo",
      path: "/assigned-tdo",
      component: ViewTdo,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "trucksInPark",
      path: "/trucks-in-parks",
      component: TrucksInPark,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "calledOutTrucks",
      path: "/called-out-trucks",
      component: CalledOutTrucks,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "uploadTdo",
      path: "/upload-tdo-and-tro",
      component: UploadTdo,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "matchedTdo",
      path: "/matched-tdo",
      component: MatchedTdo,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "terminalHistory",
      path: "/terminal-history",
      component: TerminalHistory,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "TerminalAnalytics",
      path: "/terminal-analytics",
      component: TerminalAnalytics,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "calledInTrucks",
      path: "/called-in-trucks",
      component: CalledInTrucks,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "BookingActivities",
      path: "/booking-activities",
      component: BookingActivities,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "parkActivity",
      path: "/park-activities",
      component: ParkActivities,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "CreateUnion",
      path: "/union/add",
      component: CreateUnion,
      meta: {
        requiresAuth: true
      }
    },
    {
      name: "404",
      path: "/:notFound(.*)*",
      component: NotFoundComponent,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth && store.state.token) {
    next("/dashboard");
  } else if (to.meta.requiresAuth && !store.state.token) {
    next(from);
  } else {
    next();
  }
});

export default router;
