const actions = {
  async fetchParkCategories({ commit, rootState }) {
    try {
      const categoriesRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/categories`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${rootState.token}`
        }
      })
      const categoriesResponse = await categoriesRequest.json()
      commit('SET_PARK_CATEGORIES', categoriesResponse)
    }
    catch (err) {
      console.log(err.message)
    }
  },

  async fetchTerminals({ commit, rootState }) {
    try {
      const terminalsRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/terminals`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${rootState.token}`
        }
      })
      const terminalsResponse = await terminalsRequest.json()
      commit('SET_TERMINALS', terminalsResponse)
    }
    catch (err) {
      console.log(err.message)
    }
  },

  async fetchParkFeatures({ commit, rootState }) {
    try {
      const parkFeaturesRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/park-features`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${rootState.token}`
        }
      })
      const parkFeaturesResponse = await parkFeaturesRequest.json()
      commit('SET_PARK_FEATURES', parkFeaturesResponse)
    }
    catch (err) {
      console.log(err.message)
    }
  },

  async createNewPark({ commit, rootState }, payload) {
    try {
      const formData = new FormData()
      formData.append("name", payload.parkName)
      formData.append("capacity", payload.capacity)
      formData.append("type", payload.parkCategory)
      formData.append("features", JSON.stringify(payload.parkFeatures))
      formData.append("availableSlot", payload.capacity)
      formData.append("phoneNos", JSON.stringify(payload.phoneNos))
      formData.append("location", payload.location)
      formData.append("parkType", JSON.stringify(payload.parkType))
      formData.append("allowedTerminals", JSON.stringify(payload.allowedTerminals))
      formData.append("parkImage", payload.parkImage)

      const newParkRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/new/park`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${rootState.token}`,
        },
        body: formData
      })
      const newParkResponse = await newParkRequest.json()
      commit('SET_NEW_PARK', newParkResponse)
      return newParkResponse
    }
    catch(err) {
      return err
    }
  },

  async fetchUserPark({ commit, rootState }) {
    try {
      const userParkRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/user/park`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${rootState.token}`,
          'Content-Type': 'application/json'
        }
      })
      const userParkResponse = await userParkRequest.json()
      commit('SET_USER_PARKS', userParkResponse)
    }
    catch(err) {
      return err
    }
  },

  async fetchHoldingBays(context) {
    try {
      const holdingBayReq = await fetch(`${process.env.VUE_APP_BASE_URL}/park/holding-bays`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${context.rootState.token}`
        }
      })
      const holdingBayResp = await holdingBayReq.json()
      context.commit('SET_HOLDING_BAYS', holdingBayResp)
    }
    catch(err) {
      return err
    }
  }
}

export default actions