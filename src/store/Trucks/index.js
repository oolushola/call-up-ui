import actions from './actions'

const TruckModule = {
  state() {
    return {
      truckUnions: [],
      truckLengths: [],
      truckTypes: [],
      unveriedTrucks: [],
      verifiedTrucks: [],
    }
  },

  mutations: {
    'SET_TRUCK_UNIONS'(state, payload) {
      state.truckUnions = payload.data
    },
    'SET_TRUCK_TYPES'(state, payload) {
      state.truckTypes = payload.data
    },
    'SET_TRUCK_LENGTHS'(state, payload) {
      state.truckLengths = payload.data
    }, 
    'SET_UNVERIFIED_TRUCKS'(state, payload) {
      state.unveriedTrucks = payload.data
    },
    'SET_NEW_TRUCK'(state, payload) {
      const newTruckInfo = payload.data.mockResult[0]
      state.unveriedTrucks.push(newTruckInfo)
    },
    'SET_VERIFIED_TRUCKS'(state, payload) {
      state.verifiedTrucks = payload.data
    }
  },

  actions: actions,

  getters: {
    getTruckUnions(state) {
      return state.truckUnions
    },
    getTruckTypes(state) {
      return state.truckTypes
    },
    getTruckLengths(state) {
      return state.truckLengths
    },
    getUnverifiedTrucks(state) {
      return state.unveriedTrucks
    },
    getVerifiedTrucks(state) {
      return state.verifiedTrucks
    }
  }
}

export default TruckModule