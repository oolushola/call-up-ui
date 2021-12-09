const UnionModule = {
  state() {
    return {
      union: {},
      unionOverview: {}
    };
  },
  mutations: {
    ["SET_UNION_RESOURCE"](state, payload) {
      state.union = payload.data;
    },
    ['SET_UNION_OVERVIEW'](state, payload) {
      state.unionOverview = payload.data
    }
  },
  actions: {
    async fetchUnionAccountOverview(context) {
      try {
        context.commit("SET_FETCH_RESOURCE", true);
        const unionAccountReq = await fetch(`${process.env.VUE_APP_BASE_URL}/union-overview`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${context.rootState.token}`,
            'Content-Type': 'application/json'
          }
        })
        const unionAccountResp = await unionAccountReq.json()
        context.commit("SET_FETCH_RESOURCE", false);
        context.commit("SET_UNION_OVERVIEW", unionAccountResp);
      }
      catch (err) {
        return err
      }
    },

    async fetchAccountUnion(context) {
      try {
        context.commit("SET_FETCH_RESOURCE", true);
        const unionAccountReq = await fetch(
          `${process.env.VUE_APP_BASE_URL}/user-truck-union`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${context.rootState.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const unionAccountResp = await unionAccountReq.json();
        context.commit("SET_FETCH_RESOURCE", false);
        context.commit("SET_UNION_RESOURCE", unionAccountResp);
      } catch (err) {
        return err;
      }
    },

    async addUnion(context, payload) {
      context.commit("SET_FETCH_RESOURCE", true);
      try {
        const requestNewUnion = await fetch(
          `${process.env.VUE_APP_BASE_URL}/truck-union`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${context.rootState.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const unionResp = await requestNewUnion.json();
        context.commit("SET_FETCH_RESOURCE", false);
        context.commit("SET_UNION_RESOURCE", unionResp);
        return unionResp;
      } catch (err) {
        return err;
      }
    },

    async updateUnion(context, payload) {
      context.commit("SET_FETCH_RESOURCE", true);
      try {
        const updateUnionReq = await fetch(
          `${process.env.VUE_APP_BASE_URL}/truck-union/${payload._id}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${context.rootState.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const updateUnionResp = await updateUnionReq.json();
        context.commit("SET_FETCH_RESOURCE", false);
        return updateUnionResp;
      } catch (err) {
        return err;
      }
    },
  },
  getters: {
    getAddedUnion: (state) => state.union,
    getTruckUnion: state => state.unionOverview
  },
};

export default UnionModule;
