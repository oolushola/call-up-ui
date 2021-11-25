const mutations = {
  ['SET_TERMINALS'](state, payload) {
    state.terminals = payload.data;
  },
  ['SET_BOOKING_CATEGORIES'](state, payload) {
    state.bookingCategories = payload.data;
  },
  ['SET_AVAILABLE_TRUCKS'](state, payload) {
    state.trucks = payload.data;
  },
  ['SET_ADD_ON_SERVICES'](state, payload) {
    state.addOnServices = payload.data;
  },
  ["SET_BOOKING_RESPONSE"](state, payload) {
    state.bookingResponse = payload.data;
  },
  ["SET_CALL_UP_PREVIEW"](state, payload) {
    state.callUpPreview = payload.data
  },
  ['SET_BOOKING_ACTIVITIES'](state, payload) {
    state.bookingActivities = payload.data
  }
}

export default mutations