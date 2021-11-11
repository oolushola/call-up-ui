const actions = {
  async fetchTruckUnions(context) {
    const truckUnionsRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/truck-unions`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.rootState.token}`
      }
    })
    const truckUnionResponse = await truckUnionsRequest.json()
    context.commit('SET_TRUCK_UNIONS', truckUnionResponse)
  },

  async fetchTruckTypes(context) {
    const truckTypeRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/truck-types`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.rootState.token}`
      }
    })
    const truckTypeResponse = await truckTypeRequest.json()
    context.commit('SET_TRUCK_TYPES', truckTypeResponse)
  },

  async fetchTruckLengths(context) {
    const truckLengthRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/truck-lengths`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.rootState.token}`
      }
    })
    const truckLengthResponse = await truckLengthRequest.json()
    context.commit('SET_TRUCK_LENGTHS', truckLengthResponse)
  },

  async createTruck(context, payload) {
   const  { chasisNumber, truckType, plateNumber, truckColor, truckImage, truckLength, truckModel, truckName, truckUnion } = payload
    const formData = new FormData()
    formData.append("truckImage", truckImage)
    formData.append("truckName", truckName)
    formData.append("truckModel", truckModel)
    formData.append("plateNo", plateNumber)
    formData.append("chasisNo", chasisNumber)
    formData.append("truckType", truckType)
    formData.append("union", truckUnion)
    formData.append("length", truckLength)
    formData.append("color", truckColor)
    const truckRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/add-truck`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.rootState.token}`
      },
      body: formData
    })
    const newTruckResponse = await truckRequest.json()
    if(newTruckResponse.status === 201) {
      context.commit('SET_NEW_TRUCK', newTruckResponse)
    }
    return newTruckResponse
  },

  async fetchUnverifedTrucks(context) {
    const unverifiedTrucks = await fetch(`${process.env.VUE_APP_BASE_URL}/trucks-pending-verification`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.rootState.token}`
      }
    })
    const unverifiedTrucksResponse = await unverifiedTrucks.json()
    context.commit('SET_UNVERIFIED_TRUCKS', unverifiedTrucksResponse)
  },

  async updateTransactionHistory(context, payload) {
    const updateTransactionLog = await fetch(`${process.env.VUE_APP_BASE_URL}/update-transaction-history`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.rootState.token}`
      },
      body: JSON.stringify(payload)
    })
    const transactionLogResponse = await updateTransactionLog.json()
    return transactionLogResponse;
  },

  async fetchVerifiedTrucks(context) {
    const verifiedTruckRequests = await fetch(`${process.env.VUE_APP_BASE_URL}/verified-trucks`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${context.rootState.token}`
      }
    })
    const verifiedTruckResponse = await verifiedTruckRequests.json()
    context.commit('SET_VERIFIED_TRUCKS', verifiedTruckResponse)
    return verifiedTruckResponse
  }
}

export default actions