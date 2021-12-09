const mutations = {
  ["SET_TERMINALS"](state, payload) {
    state.terminals = payload.data;
  },
  ["SET_BOOKING_CATEGORIES"](state, payload) {
    state.bookingCategories = payload.data;
  },
  ["SET_AVAILABLE_TRUCKS"](state, payload) {
    state.trucks = payload.data;
  },
  ["SET_ADD_ON_SERVICES"](state, payload) {
    state.addOnServices = payload.data;
  },
  ["SET_BOOKING_RESPONSE"](state, payload) {
    state.bookingResponse = payload.data;
  },
  ["SET_CALL_UP_PREVIEW"](state, payload) {
    state.callUpPreview = payload.data;
  },
  ["SET_BOOKING_ACTIVITIES"](state, payload) {
    state.bookingActivities = payload.data;
  },
  ["SET_UPDATED_HOLDING_BAY_STOP"](state, payload) {
    const bookedStop = state.callUpPreview.find(
      (booking) => booking.bookingQuery._id === payload.bookingId
    );
    const stopIndex = bookedStop.bookingQuery.stops.findIndex(
      (park) => park.parkId._id === payload.parkId
    );
    bookedStop.bookingQuery.stops.splice(stopIndex, 1);
  },
  ["SET_UPDATED_HOLDING_BAY_ADDON"](state, payload) {
    const bookedBay = state.callUpPreview.find(
      (booking) => booking.bookingQuery._id === payload.bookingId
    );
    const addOnIndex = bookedBay.bookingQuery.addOnService.findIndex(
      (service) => service.addOn === payload.service
    );
    bookedBay.bookingQuery.addOnService.splice(addOnIndex, 1);
  },
  ["SET_TRUCK_IN_PARKS"](state, payload) {
    state.trucksInParks = payload.data
  }
};

export default mutations;
