const TerminalModule = {
  state() {
    return {
      clearingAgents: [],
      terminals: [],
      tdoPendingMatches: [],
      tdoHistory: [],
      ports: [],
      terminalResource: false,
      terminal: null,
      shippingLines: [
        "Maersk Line",
        "MSC",
        "COSCO",
        "CMA-CGM",
        "Hapag-Lloyd",
        "ONE",
        "Evergreen Line",
        "Orient Overseas Container Line",
      ]
    };
  },

  mutations: {
    ['SET_CLEARING_AGENTS'](state, payload) {
      state.clearingAgents = payload.data
    },
    ['SET_USER_TERMINALS'](state, payload) {
      state.terminals = payload.data
    },
    // ['SET_UPLOADED_TDO'](state, payload) {
    //   state.tdoPendingMatches.push(payload.data)
    // },
    ['SET_PENDING_TDOS'](state, payload) {
      state.tdoPendingMatches = payload.data
    },
    ['SET_TDO_HISTORY'](state, payload) {
      state.tdoHistory = payload.data
    },
    ["SET_PORTS"](state, payload) {
      state.ports = payload.data
    },
    ["SET_TERMINAL"](state, payload) {
      state.terminal = payload.data
    }
  },

  actions: {
    async addTerminal(context, payload) {
      context.commit("SET_FETCH_RESOURCE", true)
      try {
        const newTerminalReq = await fetch(`${process.env.VUE_APP_BASE_URL}/terminal/add`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const newTerminalResp = await newTerminalReq.json()
        context.commit("SET_FETCH_RESOURCE", newTerminalResp)
        context.commit("SET_TERMINAL", newTerminalResp)
        return newTerminalResp
      }
      catch (err) {
        return err
      }
    },

    async updateTerminal(context, payload) {
      context.commit("SET_FETCH_RESOURCE", true)
      try {
        const terminalUpdateReq = await fetch(`${process.env.VUE_APP_BASE_URL}/terminal/${payload._id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const terminalUpdateResp = await terminalUpdateReq.json()
        context.commit("SET_FETCH_RESOURCE", false)
        context.commit("SET_TERMINAL", terminalUpdateResp)
        return terminalUpdateResp
      }
      catch (err) {
        return err
      }
    },

    async fetchTerminal(context) {
      context.commit("SET_FETCH_RESOURCE", true)
      try {
        const terminalInfoReq = await fetch(`${process.env.VUE_APP_BASE_URL}/user-terminal`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.rootState.token}`
          }
        })
        const terminalInfoResp = await terminalInfoReq.json()
        context.commit("SET_FETCH_RESOURCE", false)
        context.commit("SET_TERMINAL", terminalInfoResp)
      }
      catch (err) {
        return err
      }
    },

    async fetchPorts(context) {
      context.commit('SET_FETCH_RESOURCE', true)
      try {
        const portsReq = await fetch(`${process.env.VUE_APP_BASE_URL}/ports`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          }
        })
        const portsResp = await portsReq.json()
        context.commit('SET_FETCH_RESOURCE', false)
        context.commit("SET_PORTS", portsResp)
      }
      catch (err) {
        return err
      }
    },

    async getClearingAgents(context, payload) {
      try {
        const getClearingAgents = await fetch(
          `${process.env.VUE_APP_BASE_URL}/user/category?userType=${payload}`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${context.rootState.token}`
            }
          }
        );
        const clearingAgentsResponse = await getClearingAgents.json();
        context.commit('SET_CLEARING_AGENTS', clearingAgentsResponse)
        return clearingAgentsResponse;
      } catch (err) {
        return err
      }
    },

    async fetchTerminals(context) {
      try {
        const getUserTerminal = await fetch(
          `${process.env.VUE_APP_BASE_URL}/user-terminal`,
          {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${context.rootState.token}`
            }
          }
        );
        const userTerminalResponse = await getUserTerminal.json();
        context.commit('SET_USER_TERMINALS', userTerminalResponse)
        return userTerminalResponse;
      } catch (err) {
        return err
      }
    },
    async requestTdoUpload(context, payload) {
      try {
        const tdoUploadRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/upload-tdo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${context.rootState.token}`,
          },
          body: JSON.stringify({ ...payload })
        })
        const tdoUploadResponse = await tdoUploadRequest.json()
        // context.commit('SET_UPLOADED_TDO', tdoUploadResponse)
        return tdoUploadResponse
      }
      catch (err) {
        return err
      }
    },

    async fetchUserPendingMatchTdo(context) {
      try {
        const pendingMatchTdoReq = await fetch(`${process.env.VUE_APP_BASE_URL}/pending-match-tdo`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          }
        })
        const pendingMatchTdoResponse = await pendingMatchTdoReq.json()
        context.commit('SET_PENDING_TDOS', pendingMatchTdoResponse)
      }
      catch (err) {
        return err
      }
    },

    async fetchTdoHistory(context) {
      try {
        const tdoHistoryRequest = await fetch(`${process.env.VUE_APP_BASE_URL}/tdo-history`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          }
        })
        const tdoHistoryResponse = await tdoHistoryRequest.json()
        context.commit('SET_TDO_HISTORY', tdoHistoryResponse)
      }
      catch (err) {
        return err
      }
    },

    async addTerminalCapacity(context, { dailyCap, terminalId }) {
      try {
        const terminalDailyCapReq = await fetch(`${process.env.VUE_APP_BASE_URL}/terminal/${terminalId}/daily-capacity`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ dailyCap: dailyCap })
        })
        const terminalDailyCapResp = await terminalDailyCapReq.json()
        return terminalDailyCapResp
      }
      catch (err) {
        return err
      }
    },

    async updateEmptyCapacity(context, { terminalId, emptyCap }) {
      try {
        const terminalDailyCapReq = await fetch(`${process.env.VUE_APP_BASE_URL}/terminal/${terminalId}/empty-capacity`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ emptyCap: emptyCap })
        })
        const terminalDailyCapResp = await terminalDailyCapReq.json()
        return terminalDailyCapResp
      }
      catch (err) {
        return err
      }
    }
  },



  getters: {
    getClearingAgents: state => state.clearingAgents,
    getUserTerminals: state => state.terminals,
    getPendingTdoMatches: state => state.tdoPendingMatches,
    getTdoHistory: state => state.tdoHistory,
    getPorts: state => state.ports,
    getUserTerminal: state => state.terminal,
    getShippingLines: state => state.shippingLines
  }
};

export default TerminalModule;


