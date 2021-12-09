const actions = {
  async fetchTruckUnions(context) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const truckUnionsRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/truck-unions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const truckUnionResponse = await truckUnionsRequest.json();
      context.commit('SET_TRUCK_RESOURCE', false)
      context.commit("SET_TRUCK_UNIONS", truckUnionResponse);
    }
    catch (err) {
      return err
    }
  },

  async fetchTruckTypes(context) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const truckTypeRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/truck-types`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const truckTypeResponse = await truckTypeRequest.json();
      context.commit('SET_TRUCK_RESOURCE', false)
      context.commit("SET_TRUCK_TYPES", truckTypeResponse);
    }
    catch (err) {
      return err
    }
  },

  async fetchTruckLengths(context) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const truckLengthRequest = await fetch(
        `${process.env.VUE_APP_BASE_URL}/truck-lengths`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const truckLengthResponse = await truckLengthRequest.json();
      context.commit('SET_TRUCK_RESOURCE', false)
      context.commit("SET_TRUCK_LENGTHS", truckLengthResponse);
    }
    catch (err) {
      return err
    }
  },

  async createTruck(context, payload) {
    const {
      chasisNumber,
      truckType,
      plateNumber,
      truckColor,
      truckImage,
      truckLength,
      truckModel,
      truckName,
      truckUnion,
    } = payload;
    const formData = new FormData();
    formData.append("truckImage", truckImage);
    formData.append("truckName", truckName);
    formData.append("truckModel", truckModel);
    formData.append("plateNo", plateNumber);
    formData.append("chasisNo", chasisNumber);
    formData.append("truckType", truckType);
    formData.append("union", truckUnion);
    formData.append("length", truckLength);
    formData.append("color", truckColor);
    const truckRequest = await fetch(
      `${process.env.VUE_APP_BASE_URL}/add-truck`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${context.rootState.token}`,
        },
        body: formData,
      }
    );
    const newTruckResponse = await truckRequest.json();
    if (newTruckResponse.status === 201) {
      context.commit("SET_NEW_TRUCK", newTruckResponse);
    }
    return newTruckResponse;
  },

  async fetchUnverifedTrucks(context) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const unverifiedTrucks = await fetch(
        `${process.env.VUE_APP_BASE_URL}/trucks-pending-verification`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const unverifiedTrucksResponse = await unverifiedTrucks.json();
      context.commit('SET_TRUCK_RESOURCE', false)
      context.commit("SET_UNVERIFIED_TRUCKS", unverifiedTrucksResponse);
    }
    catch (err) {
      return err
    }
  },

  async updateTransactionHistory(context, payload) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const updateTransactionLog = await fetch(
        `${process.env.VUE_APP_BASE_URL}/update-transaction-history`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
          body: JSON.stringify(payload),
        }
      );
      const transactionLogResponse = await updateTransactionLog.json();
      context.commit('SET_TRUCK_RESOURCE', false)
      return transactionLogResponse;
    }
    catch (err) {
      return err
    }
  },

  async fetchVerifiedTrucks(context) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const verifiedTruckRequests = await fetch(
        `${process.env.VUE_APP_BASE_URL}/verified-trucks`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${context.rootState.token}`,
          },
        }
      );
      const verifiedTruckResponse = await verifiedTruckRequests.json();
      context.commit('SET_TRUCK_RESOURCE', false)
      context.commit("SET_VERIFIED_TRUCKS", verifiedTruckResponse);
      return verifiedTruckResponse;
    }
    catch (err) {
      return err
    }
  },

  async fetchTruckOverview(context) {
    try {
      context.commit('SET_TRUCK_RESOURCE', true)
      const truckOverviewReq = await fetch(`${process.env.VUE_APP_BASE_URL}/truck/overview`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${context.rootState.token}`,
          'Content-Type': 'application/json'
        }
      })
      const truckOverviewResp = await truckOverviewReq.json()
      context.commit('SET_TRUCK_RESOURCE', false)
      context.commit('SET_TRUCK_OVERVIEW', truckOverviewResp)
    }
    catch (err) {
      return err
    }
  }
};

export default actions;
