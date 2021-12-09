<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center mb-5 text-muted">
                    <router-link to="/" class="d-block auth-logo">
                        <img src="../../assets/images/main-logo.png" alt="" height="20" class="auth-logo-dark mx-auto">
                        <img src="../../assets/images/main-logo.png" alt="" height="20" class="auth-logo-light mx-auto">
                    </router-link>
                    <p class="mt-3">Email Verification</p>
                </div>
            </div>
        </div>
        <!-- end row -->
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card">
                    <div class="card-body"> 
                        <div class="p-2">
                            <div class="text-center">
                                <div class="avatar-md mx-auto">
                                  <div class="avatar-title rounded-circle bg-light">
                                    <i class="bx bx-mail-send h1 mb-0 text-primary"></i>
                                  </div>
                                </div>
                                <div class="p-2 mt-4">
                                    <h4>Success !</h4>
                                    <p class="text-muted">Hi Olushola Odejobi. Thank you for confirming your email address with the call up team.</p>
                                    <div class="mt-4">
                                      <router-link :to="{name: 'login'}" class="btn btn-success">Back to Home</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <p>&copy;{{ new Date().getFullYear() }} Call Up. Crafted with <i class="mdi mdi-heart text-danger"></i> by Call Up</p>
                </div>

            </div>
        </div>
    </div>
  </div>  
</template>

