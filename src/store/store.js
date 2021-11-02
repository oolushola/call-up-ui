import { createStore  } from "vuex";
import AuthModule from "./Auth";

const store = new createStore({
  state() {
    return {
      token: localStorage.getItem("token") || null,
      user: {
        email: localStorage.getItem("email"),
        isEmailVerified: localStorage.getItem("isEmailVerified"),
        id: localStorage.getItem("id"),
        lastLogin: localStorage.getItem("lastLogin"),
        name: localStorage.getItem("name"),
        userType: localStorage.getItem('userType')
      } || null
    }
  },
  modules: {
    Auth: AuthModule
  }
})

export default store