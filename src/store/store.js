import { createStore  } from "vuex";
import AuthModule from "./Auth";
import WalletModule from './Wallet'

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
  getters: {
    nameCapitalizer(state) {
      const arr = state.user.name.split(" ")
        for (let i = 0; i< arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
        }
        const capitalized = arr.join(" ")
        return capitalized
    }
  },
  modules: {
    Auth: AuthModule,
    Wallet: WalletModule
  }
})

export default store