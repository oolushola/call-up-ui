import actions from './actions'

const TruckModule = {
  state() {
    return {
      truckUnions: [],
      truckLengths: [],
      truckTypes: [],
      unveriedTrucks: [],
      verifiedTrucks: [],
      truckOverview: {},
      truckResource: false
    }
  },

  mutations: {
    ['SET_TRUCK_UNIONS'](state, payload) {
      state.truckUnions = payload.data
    },
    ['SET_TRUCK_TYPES'](state, payload) {
      state.truckTypes = payload.data
    },
    ['SET_TRUCK_LENGTHS'](state, payload) {
      state.truckLengths = payload.data
    },
    ['SET_UNVERIFIED_TRUCKS'](state, payload) {
      state.unveriedTrucks = payload.data
    },
    ['SET_NEW_TRUCK'](state, payload) {
      const newTruckInfo = payload.data.mockResult[0]
      state.unveriedTrucks.push(newTruckInfo)
    },
    ['SET_VERIFIED_TRUCKS'](state, payload) {
      state.verifiedTrucks = payload.data
    },
    ['SET_TRUCK_RESOURCE'](state, payload) {
      state.truckResource = payload
    },
    ["SET_TRUCK_OVERVIEW"](state, payload) {
      state.truckOverview = payload.data
    }
  },

  actions: actions,

  getters: {
    getTruckUnions: state => state.truckUnions,
    getTruckTypes: state => state.truckTypes,
    getTruckLengths: state => state.truckLengths,
    getUnverifiedTrucks: state => state.unveriedTrucks,
    getVerifiedTrucks: state => state.verifiedTrucks,
    getTruckResource: state => state.truckResource,
    getTruckOverview: state => state.truckOverview
  }
}

export default TruckModule