<template>
  <body data-sidebar="dark">
    <!-- Begin page -->
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
              <!-- LOGO -->
            <div class="navbar-brand-box">
              <a href="index.html" class="logo logo-dark">
                <span class="logo-sm">
                    <img src="../../assets/images/logo.svg" alt="" height="22">
                </span>
                <span class="logo-lg">
                  <img src="../../assets/images/logo-dark.png" alt="" height="17">
                </span>
              </a>

              <a href="index.html" class="logo logo-light">
                <span class="logo-sm">
                  <img src="../../assets/images/logo-light.svg" alt="" height="22">
                </span>
                <span class="logo-lg">
                  <img src="../../assets/images/logo-light.png" alt="" height="19">
                </span>
              </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn" @click="showNavigation">
              <i class="bx bx-menu-alt-left bx-sm d-block d-sm-block  d-md-none"></i>
            </button>

            <!-- App Search-->
            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input type="text" class="form-control" placeholder="Search...">
                <span class="bx bx-search-alt"></span>
              </div>
            </form>
        </div>

        <div class="d-flex">
            <div class="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-magnify"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown">
                    <form class="p-3">
                      <div class="form-group m-0">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username">
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                          </div>
                        </div>
                      </div>
                    </form>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="bx bx-bell"></i>
                    <span class="badge bg-danger rounded-pill">0</span>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-notifications-dropdown">
                    <div class="p-3">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="m-0" key="t-notifications"> Notifications </h6>
                            </div>
                            <div class="col-auto">
                                <a href="#!" class="small" key="t-view-all"> View All</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar style="max-height: 230px;">
                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="avatar-xs me-3">
                                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                                        <i class="bx bx-cart"></i>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1" key="t-your-order">Funded Wallet.</h6>
                                    <div class="font-size-12 text-muted">
                                        <p class="mb-1" key="t-grammer">Your credit of &#x20A6;0.00</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="d-flex">
                                <img src="../../assets/images/users/avatar-3.jpg"
                                    class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                <div class="flex-grow-1">
                                    <h6 class="mb-1">Olushola O.</h6>
                                    <div class="font-size-12 text-muted">
                                        <p class="mb-1" key="t-simplified">Olushola transferred &#x20A6;5,000.00 credit unit.</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="javascript: void(0);" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="avatar-xs me-3">
                                    <span class="avatar-title bg-success rounded-circle font-size-16">
                                        <i class="bx bx-badge-check"></i>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1" key="t-shipped">Truck Update</h6>
                                    <div class="font-size-12 text-muted">
                                        <p class="mb-1" key="t-grammer">ABC 123 XY status been verified.</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-2 border-top d-grid">
                        <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                            <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View More..</span> 
                        </a>
                    </div>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                data-bs-toggle="dropdown" @click="showAdditionalOptions">
                    <img class="rounded-circle header-profile-user" src="../../assets/images/users/avatar-1.jpg"
                        alt="Header Avatar">
                    <span class="d-none d-xl-inline-block ms-1" key="t-henry">{{ $store.getters.nameCapitalizer }}</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end" :class="showLogout ? 'show' : ''">
                    <!-- item-->
                    <a class="dropdown-item" href="#"><i class="bx bx-user font-size-16 align-middle me-1"></i> <span key="t-profile">Profile</span></a>
                    <a class="dropdown-item" href="#"><i class="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My Wallet</span></a>
                    <a class="dropdown-item d-block" href="#"><span class="badge bg-success float-end">0</span><i class="bx bx-wrench font-size-16 align-middle me-1"></i> <span key="t-settings">Settings</span></a>
                    <div class="dropdown-divider"></div>
                    <span class="dropdown-item text-danger" @click="logout">
                        <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span key="t-logout">Logout</span>
                    </span>
                </div>
            </div>
        </div>
        </div>
      </header>

      <!-- ========== Left Sidebar Start ========== -->
      <div class="vertical-menu" style="overflow: auto" :style="showNav ? { 'display': 'block' }:''" :class="showNav ? 'slide-out': 'slide-in'" >
          <div class="h-50">
              <!--- Sidemenu -->
              <div id="sidebar-menu" style="">
                  <!-- Left Menu Start -->
                  <ul class="metismenu list-unstyled" id="side-menu">
                      <li class="menu-title" key="t-menu">Menu - {{ userType }}</li>
                      <li>
                        <router-link :to="{ name: 'dashboard' }" class="waves-effect">
                        <i class="bx bx-home-circle"></i>
                        <span key="t-dashboards">Dashboard</span>
                        </router-link>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i class="bx bxs-report"></i>
                          <span key="t-ecommerce">Reports</span>
                        </a>
                      </li>
                      <li>
                        <router-link :to="{ name: 'profile', params:{ name: slugify($store.state.user.name)}}">
                          <i class="bx bxs-user-circle"></i>
                          <span key="t-ecommerce">Profile</span>
                        </router-link>
                      </li>
                      <li v-if="userType === 'terminal' || userType === 'admin'">
                          <a href="javascript:void(0)">
                            <i class="bx bxs-terminal"></i>
                            <span key="t-invoices">Terminal<i class="bx bx-chevron-right d-xl-inline-block"></i></span>
                          </a>
                          <ul class="sub-menu" aria-expanded="false">
                            <li>
                              <router-link :to="{name: 'TerminalAnalytics'}" key="t-invoice-list">
                                Analytics
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'uploadTdo'}" key="t-invoice-list">
                                Upload TDO/TRO
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'calledInTrucks'}" key="t-invoice-detail">
                                Called In
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'terminalHistory'}" key="t-invoice-detail">
                                History
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'matchedTdo'}" key="t-invoice-detail">
                                Matched TDO/TRO
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'matchedTdo'}" key="t-invoice-detail">
                                Verify Call-in Trucks
                              </router-link>
                            </li>
                          </ul>
                      </li>
                      <div v-if="userType === 'admin' || userType === 'agent'">
                        <li>
                          <router-link :to="{ name: 'assignedTdo' }">
                            <i class="bx bxs-component"></i>
                            <span key="t-ecommerce">View TDO/TRO</span>
                          </router-link>
                        </li>
                        <li>
                          <router-link :to="{ name: 'calledOutTrucks' }">
                            <i class="bx bx-phone-call"></i>
                            <span key="t-ecommerce">Called Up Trucks</span>
                          </router-link>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i class="bx bxs-phone-call"></i>
                            <span key="t-ecommerce">Manage Call Up</span>
                          </a>
                        </li>
                      </div>
                      <li v-if="userType === 'transporter' || userType === 'admin'">
                        <a href="javascript:void(0)">
                          <i class="bx bxs-truck"></i>
                          <span key="t-invoices">Truck Management <i class="bx bx-chevron-right d-xl-inline-block"></i></span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                          <li>
                            <router-link :to="{ name: 'TruckManagement' }" key="t-invoice-list">
                              Add New Truck
                            </router-link>
                          </li>
                          <li>
                            <router-link :to="{ name: 'verifiedTrucks' }" key="t-invoice-detail">
                              Truck Fleets <span class="badge rounded-pill bg-info float-end">{{ $store.getters.getVerifiedTrucks.length   }}</span>
                            </router-link>
                          </li>
                        </ul>
                      </li>
                      <li v-if="userType !== 'terminal' && userType !=='union'">
                        <router-link :to="{ name: 'trucksInPark' }" key="t-invoice-detail">
                          <i class="bx bxs-truck"></i>
                          Trucks In Park <span class="badge rounded-pill bg-danger float-end">1409</span>
                        </router-link>
                      </li>
                      <li v-if="userType === 'transporter' || userType === 'admin'">
                        <router-link :to="{name: 'HoldingBays'}" class="waves-effect">
                          <i class="bx bxs-truck"></i>
                          <span key="t-authentication">Book Park / Holding Bay</span>
                        </router-link>
                      </li>
                      <li v-if="userType === 'park owner' || userType === 'admin'">
                        <a href="javascript:void(0)">
                          <i class="bx bxs-truck"></i>
                          <span key="t-invoices">Park Management <i class="bx bx-chevron-right d-xl-inline-block"></i></span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                          <li>
                            <router-link :to="{name: 'parks'}" key="t-invoice-list">
                              Add Park <span class="badge rounded-pill bg-info float-end">0</span>
                            </router-link>
                          </li>
                          <li>
                            <router-link :to="{name: 'verifiedTrucks'}" key="t-invoice-detail">
                              View All Parks <span class="badge rounded-pill bg-info float-end">0</span>
                            </router-link></li>
                        </ul>
                      </li>
                      
                      <li>
                        <router-link :to="{name: 'TransactionHistory'}" class="waves-effect">
                          <i class="bx bx-wallet"></i>
                          <span key="t-authentication">Wallet</span>
                        </router-link>
                      </li>
                      <li v-if="userType !== 'terminal' && userType !== 'park owner' && userType !=='union'">
                        <router-link :to="{name: 'HoldingBays'}" class="waves-effect">
                          <i class="bx bx-station bx-burst"></i>
                          <span key="t-authentication">Book a Bonded Terminal</span>
                        </router-link>
                      </li>
                      <li v-if="userType !== 'terminal' && userType !== 'park owner' && userType !=='union'">
                        <router-link :to="{ name: 'BookingActivities' }" class="waves-effect">
                            <i class="bx bx-task"></i>
                            <span key="t-authentication">Booking Activities</span>
                        </router-link>
                      </li>
                      
                      <div class="" v-if="userType === 'admin'">
                        <li>
                            <a href="javascript: void(0);">
                                <i class="bx bx-file"></i>
                                <span key="t-utility">Preferences <i class="bx bx-chevron-right d-xl-inline-block"></i></span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                              <li><a href="#" key="t-starter-page">Truck Type</a></li>
                              <li><a href="#" key="t-maintenance">Truck Union</a></li>
                              <li><a href="#" key="t-coming-soon">Truck Charge</a></li>
                              <li><a href="#" key="t-timeline">Park Charge</a></li>
                              <li><a href="#" key="t-timeline">Update Truck Status</a></li>
                              <li><a href="#" key="t-timeline">Manage Traffic</a></li>
                            </ul>
                        </li>
                      </div>
                  </ul>
              </div>
              <!-- Sidebar -->
          </div>
      </div>
      <!-- Left Sidebar End -->

        

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">
          <slot>
            <router-view></router-view>
          </slot>
          <!-- End Page-content -->
          <footer class="footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-6">
                  {{ new Date().getFullYear() }}
                </div>
                <div class="col-sm-6">
                  <div class="text-sm-end d-none d-sm-block">
                    Design & Develop by call up
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      userType: this.$store.state.user.userType,  
      showLogout: false,
      showNav: false
    }
  },
  methods: {
    logout() {
        localStorage.clear()
        this.$router.go('/login')
    },
    showAdditionalOptions() {
        this.showLogout = !this.showLogout
    },
    showNavigation() {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style scoped>

.slide-in {
    animation: slide-in 0.5s forwards;
}

.slide-out {
    animation: slide-out 0.5s ease-in-out;
}
    
@keyframes slide-in {
    100% { transform: translateX(0%); }
}
    
@keyframes slide-out {
    0% { 
      transform: translateX(0%);
    }
    50% {
      transform: translateX(10%) ;
    }
    100% { 
      transform: translateX(0%);
    }
}



</style>


