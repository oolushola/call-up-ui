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

                        <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                          <i class="fa fa-fw fa-bars"></i>
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
                                                    <p class="mb-1" key="t-grammer">Your credit of &#x20A6;5,000,000.00</p>
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
            <div class="vertical-menu">
                <div data-simplebar class="h-100">
                    <!--- Sidemenu -->
                    <div id="sidebar-menu">
                        <!-- Left Menu Start -->
                        <ul class="metismenu list-unstyled" id="side-menu">
                            <li class="menu-title" key="t-menu">Menu</li>
                            <li>
                                <router-link :to="{name: 'dashboard'}" class="waves-effect">
                                  <i class="bx bx-home-circle"></i>
                                  <span key="t-dashboards">Dashboard</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="#">
                                    <i class="bx bxs-report"></i>
                                    <span key="t-ecommerce">Reports</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'TruckManagement'}">
                                  <i class="bx bxs-truck"></i>
                                  <span key="t-invoices">Truck Management</span>
                                </router-link>
                                <ul class="sub-menu" aria-expanded="false">
                                  <li>
                                    <router-link :to="{name: 'TruckManagement'}" key="t-invoice-list">
                                      Trucks <span class="badge rounded-pill bg-info float-end">65</span>
                                    </router-link>
                                  </li>
                                  <li>
                                    <router-link :to="{name: 'verifiedTrucks'}" key="t-invoice-detail">
                                      Verified Trucks <span class="badge rounded-pill bg-info float-end">04</span>
                                    </router-link></li>
                                  <li><router-link :to="{name: 'parks'}" key="t-invoice-detail">Parks</router-link></li>
                                </ul>
                            </li>
                            
                            <li>
                              <router-link :to="{name: 'TransactionHistory'}" class="waves-effect">
                                <i class="bx bx-wallet"></i>
                                <span key="t-authentication">Wallet</span>
                              </router-link>
                            </li>
                            <li>
                              <router-link :to="{name: 'BookCallUp'}" class="waves-effect">
                                <i class="bx bx-pencil"></i>
                                <span key="t-authentication">Book Call Up</span>
                              </router-link>
                            </li>
                            <li>
                              <a href="javascript: void(0);" class="waves-effect">
                                  <i class="bx bx-task"></i>
                                  <span key="t-authentication">Bookings</span>
                              </a>
                            </li>
                            
                            <div class="" v-if="userType === 'admin'">
                              <li>
                                  <a href="javascript: void(0);">
                                      <i class="bx bx-file"></i>
                                      <span key="t-utility">Preferences</span>
                                  </a>
                                  <ul class="sub-menu" aria-expanded="false">
                                      <li><a href="pages-starter.html" key="t-starter-page">Truck Type</a></li>
                                      <li><a href="pages-maintenance.html" key="t-maintenance">Truck Union</a></li>
                                      <li><a href="pages-comingsoon.html" key="t-coming-soon">Truck Charge</a></li>
                                      <li><a href="pages-timeline.html" key="t-timeline">Park Charge</a></li>
                                      <li><a href="pages-timeline.html" key="t-timeline">Update Truck Status</a></li>
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
      showLogout: false
    }
  },
  methods: {
    logout() {
        localStorage.clear()
        this.$router.go('/login')
    },
    showAdditionalOptions() {
        this.showLogout = !this.showLogout
    }
  }
}
</script>