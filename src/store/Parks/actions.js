const actions = {
  async fetchParkCategories({ commit, rootState }) {
    try {
      const categoriesRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/categories`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${rootState.token}`,
          },
        }
      );
      const categoriesResponse = await categoriesRequest.json();
      commit("SET_PARK_CATEGORIES", categoriesResponse);
    } catch (err) {
      console.log(err.message);
    }
  },

  async fetchTerminals({ commit, rootState }) {
    try {
      const terminalsRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/terminals`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${rootState.token}`,
          },
        }
      );
      const terminalsResponse = await terminalsRequest.json();
      commit("SET_TERMINALS", terminalsResponse);
    } catch (err) {
      console.log(err.message);
    }
  },

  async fetchParkFeatures({ commit, rootState }) {
    try {
      const parkFeaturesRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/park-features`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${rootState.token}`,
          },
        }
      );
      const parkFeaturesResponse = await parkFeaturesRequest.json();
      commit("SET_PARK_FEATURES", parkFeaturesResponse);
    } catch (err) {
      console.log(err.message);
    }
  },

  async createNewPark({ commit, rootState }, payload) {
    try {
      const formData = new FormData();
      formData.append("name", payload.parkName);
      formData.append("capacity", payload.capacity);
      formData.append("type", payload.parkCategory);
      formData.append("features", JSON.stringify(payload.parkFeatures));
      formData.append("availableSlot", payload.capacity);
      formData.append("phoneNos", JSON.stringify(payload.phoneNos));
      formData.append("location", payload.location);
      formData.append("parkType", JSON.stringify(payload.parkType));
      formData.append(
        "allowedTerminals",
        JSON.stringify(payload.allowedTerminals)
      );
      formData.append("parkImage", payload.parkImage);

      const newParkRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/new/park`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${rootState.token}`,
          },
          body: formData,
        }
      );
      const newParkResponse = await newParkRequest.json();
      commit("SET_NEW_PARK", newParkResponse);
      return newParkResponse;
    } catch (err) {
      return err;
    }
  },

  async fetchUserPark({ commit, rootState }) {
    try {
      const userParkRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/user/park`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${rootState.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const userParkResponse = await userParkRequest.json();
      commit("SET_USER_PARKS", userParkResponse);
    } catch (err) {
      return err;
    }
  },

  async fetchHoldingBays(context) {
    context.commit('SET_FETCH_RESOURCE', true)
    try {
      const holdingBayReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/park/holding-bays`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const holdingBayResp = await holdingBayReq.json();
      context.commit('SET_FETCH_RESOURCE', false)
      context.commit("SET_HOLDING_BAYS", holdingBayResp);
    } catch (err) {
      return err;
    }
  },

  async fetchExpectedTrucks(context) {
    try {
      context.commit("SET_PARK_RESOURCE", true);
      const expectedParksReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/park-booking-activities`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const expectedParksResp = await expectedParksReq.json();
      context.commit("SET_EXPECTED_TRUCKS", expectedParksResp);
      context.commit("SET_PARK_RESOURCE", false);
      return expectedParksResp;
    } catch (err) {
      return err;
    }
  },

  async fetchJourneyCodeValidity(context, { journeyCode, bookingId }) {
    try {
      const reqJourneyCode = await fetch(
        `${process.env.VUE_APP_BASE_URL}/grant-access-entry?journeyCode=${journeyCode}&bookingId=${bookingId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const journeyCodeResp = await reqJourneyCode.json();
      return journeyCodeResp;
    } catch (err) {
      return err;
    }
  },

  async verifyEntryGateSerialNo(context, { entryGateSerialNo, bookingId }) {
    try {
      const reqGateEntry = await fetch(
        `${process.env.VUE_APP_BASE_URL}/verify-park-entry?entryGateSerialNo=${entryGateSerialNo}&bookingId=${bookingId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const gateEntryResp = await reqGateEntry.json();
      return gateEntryResp;
    } catch (err) {
      return err;
    }
  },

  async verifyExitSerialNo(context, { exitSerialNo, bookingId }) {
    try {
      const reqJourneyCode = await fetch(
        `${process.env.VUE_APP_BASE_URL}/verify-park-exit?exitSerialNo=${exitSerialNo}&bookingId=${bookingId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const journeyCodeResp = await reqJourneyCode.json();
      return journeyCodeResp;
    } catch (err) {
      return err;
    }
  },

  async truckCheckIn(context, { journeyCode, bookingId }) {
    try {
      context.commit("SET_PARK_RESOURCE", true);
      const checkInReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/grant-park-access?bookingId=${bookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
          body: JSON.stringify({ journeyCode }),
        }
      );
      const checkInResp = await checkInReq.json();
      context.commit("SET_PARK_RESOURCE", false);
      return checkInResp;
    } catch (err) {
      return err;
    }
  },


  async truckCheckOut(context, { bookingId }) {
    try {
      context.commit("SET_PARK_RESOURCE", true);
      const checkOutReq = await fetch(
        `${process.env.VUE_APP_BASE_URL}/grant-park-exit?bookingId=${bookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const checkOutResp = await checkOutReq.json();
      context.commit("SET_PARK_RESOURCE", false);
      return checkOutResp;
    } catch (err) {
      return err;
    }
  },

  async fetchParkOverview(context) {
    try {
      context.commit('SET_PARK_RESOURCE', true)
      try {
        const parkOverviewReq = await fetch(`${process.env.VUE_APP_BASE_URL}/park/overview`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.rootState.token}`
          }
        })
        const parkOverviewResp = await parkOverviewReq.json()
        context.commit('SET_PARK_RESOURCE', false)
        context.commit('SET_PARK_OVERVIEW', parkOverviewResp)
      }
      catch (err) {
        return err
      }
    }
    catch (err) {
      return err
    }
  }

};

export default actions;
