const actions = {
  async fetchTerminals(context) {
    try {
      const terminalsRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/terminals`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const terminalResponse = await terminalsRequest.json();
      context.commit("SET_TERMINALS", terminalResponse);
    } catch (err) {
      return err;
    }
  },

  async fetchBookingCategories(context) {
    try {
      const bookingCategoryRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/booking-categories`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const bookingCategoryResponse = await bookingCategoryRequest.json();
      context.commit("SET_BOOKING_CATEGORIES", bookingCategoryResponse);
    } catch (err) {
      return err;
    }
  },

  async fetchAvailableTrucks(context) {
    try {
      const availableTruckRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/available-for-callup`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const availableTruckResponse = await availableTruckRequest.json();
      context.commit("SET_AVAILABLE_TRUCKS", availableTruckResponse);
    } catch (err) {
      return err;
    }
  },

  async fetchAddOnServices(context) {
    try {
      const addOnServiceRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/addon-services`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const addOnServiceResponse = await addOnServiceRequest.json();
      context.commit("SET_ADD_ON_SERVICES", addOnServiceResponse);
    } catch (err) {
      return err;
    }
  },

  async bookCallUpRequest(context, payload) {
    try {
      let trucks = [];
      payload.trucks.map((truck) => {
        trucks.push(truck._id);
      });
      const formData = {
        terminalId: payload.terminalId,
        bookingCategoryId: payload.bookingCategoryId,
        location: payload.fromWhere,
        parkStayDuration: payload.parkStayDuration,
        parkId: payload.parkId,
        expectedDateOfArrival: payload.expectedDateOfArrival,
        expectedTimeOfArrival: payload.expectedTimeOfArrival,
        addOnService: payload.selectedServices,
        stops: payload.stopOverParks,
        trucks: trucks,
      };
      const bookingRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/book-call-up`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${context.rootState.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const bookingResponse = await bookingRequest.json();
      return bookingResponse;
    } catch (err) {
      return err;
    }
  },

  async previewCallUp(context, payload) {
    try {
      const fetchCallUpPreview = await fetch(
        `${process.env.VUE_APP_BASE_URL}/preview-call-up?bookings=${payload}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${context.rootState.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const callUpResponse = await fetchCallUpPreview.json();
      context.commit("SET_CALL_UP_PREVIEW", callUpResponse);
      return callUpResponse;
    } catch (err) {
      return err;
    }
  },

  async fetchBookingActivities(context) {
    try {
      const bookingActivitiesReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/booking-activities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const bookingActivitiesResp = await bookingActivitiesReq.json();
      context.commit("SET_BOOKING_ACTIVITIES", bookingActivitiesResp);
    } catch (err) {
      return err;
    }
  },

  async removeHoldingBayStopOver(context, payload) {
    const parkId = payload.parkId;
    const bookingId = payload.bookingId;
    try {
      const removeStopReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/holding-bay/stops/${bookingId}?stop=${parkId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${context.rootState.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      await removeStopReq.json();
      context.commit("SET_UPDATED_HOLDING_BAY_STOP", { parkId, bookingId });
    } catch (err) {
      return err;
    }
  },

  async removeHoldingBayOnService(context, payload) {
    const service = payload.service;
    const bookingId = payload.bookingId;
    try {
      const removeAddOnServiceReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/holding-bay/add-on/${bookingId}?service=${service}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${context.rootState.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      await removeAddOnServiceReq.json();
      context.commit("SET_UPDATED_HOLDING_BAY_ADDON", { service, bookingId });
    } catch (err) {
      return err;
    }
  },

  async updateWalletLog(context, payload) {
    try {
      const updateTransactionLog = await fetch(
        `${process.env.VUE_APP_BASE_URL}/wallet-transaction-update?paymentMode=${payload.paymentMethod}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${context.rootState.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: payload.status,
            transactionRef: payload.tx_ref,
            amount: payload.amount,
            bookingId: payload.bookingId
          })
        },
      );
      const transactionLogUpdateResp = await updateTransactionLog.json()
      return transactionLogUpdateResp
    } catch (err) {
      return err;
    }
  },
};

export default actions;
