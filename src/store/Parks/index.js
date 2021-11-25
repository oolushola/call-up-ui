import actions from './actions'

const ParkModule = {
  state() {
    return {
      parkCategories: [],
      terminals: [],
      parkFeatures: [],
      newPark: null,
      userParks: [],
      allParks: [],
      holdingBays: []
    }
  },

  mutations: {
    ['SET_PARK_CATEGORIES'](state, payload) {
      state.parkCategories = payload.data
    },
    ['SET_TERMINALS'](state, payload) {
      state.terminals = payload.data
    },
    ['SET_PARK_FEATURES'](state, payload) {
      state.parkFeatures = payload.data
    },
    ['SET_NEW_PARK'](state, payload) {
      state.newPark = payload.data
    },
    ['SET_USER_PARKS'](state, payload) {
      state.userParks = payload.data
    },
    ['SET_HOLDING_BAYS'](state, payload) {
      state.holdingBays = payload.data
    }
  },

  actions: actions,

  getters: {
    getParkCategories: state =>  state.parkCategories,
    getTerminals: state => state.terminals,
    getParkFeatures: state => state.parkFeatures,
    getUserParks: state => state.userParks,
    getHoldingBays: state => state.holdingBays
  }
}

export default ParkModule