import actions from './actions'

const AuthModule = {
  state() {
    return {
      profileTypes: []
    }
  },
  mutations: {
    'USER_PROFILES'(state, payload) {
      state.profileTypes = payload.data
    }
  },
  actions: actions,
  getters: {
    getProfileTypes(state) {
      return state.profileTypes
    }
  }
}

export default AuthModule

