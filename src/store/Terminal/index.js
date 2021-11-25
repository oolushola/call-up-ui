const TerminalModule = {
  state() {
    return {
      clearingAgents: [],
      terminals: [],
      tdoPendingMatches: [],
      tdoHistory: []
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
    }
  },

  actions: {
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
          body: JSON.stringify({...payload})
        })
        const tdoUploadResponse = await tdoUploadRequest.json()
        // context.commit('SET_UPLOADED_TDO', tdoUploadResponse)
        return tdoUploadResponse
      }
      catch(err) {
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
      catch(err) {
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
      catch(err) {
        return err
      }
    },

  },

  

  getters: {
    getClearingAgents: state => state.clearingAgents , 
    getUserTerminals: state => state.terminals,
    getPendingTdoMatches: state => state.tdoPendingMatches,
    getTdoHistory: state => state.tdoHistory
  }
};

export default TerminalModule;


