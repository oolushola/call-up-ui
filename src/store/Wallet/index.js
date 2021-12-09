const Wallet = {
  state() {
    return {
      walletInfo: {
        availableBalance: 0,
        lastDeposit: 0,
        lastAmountSpent: 0,
      },
      walletHistory: [],
      walletFundingStatus: null,
      isLoading: false
    };
  },

  mutations: {
    ["SET_WALLET"](state, payload) {
      state.walletInfo = payload.data;
    },
    ["SET_LOADING_STATUS"](state, payload) {
      state.isLoading = payload;
    },
    ["SET_WALLET_ACTIVITIES"](state, payload) {
      state.walletHistory = payload;
    },
  },

  actions: {
    async walletInfoRequest(context) {
      const token = context.rootState.token;
      const url = process.env.VUE_APP_BASE_URL;
      context.commit("SET_LOADING_STATUS");
      const walletDetailsRequest = await fetch(`${url}/user/wallet`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const walletResponse = await walletDetailsRequest.json();
      context.commit("SET_WALLET", walletResponse);
      return walletResponse;
    },

    async walletHistory(context, payload) {
      const token = context.rootState.token;
      const url = process.env.VUE_APP_BASE_URL;
      try {
        context.commit("SET_LOADING_STATUS", true);
        const walletActivities = await fetch(`${url}/user/transaction/history?page=${payload.page}&limit=${payload.limit}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        });
        const walletActivitiesResponse = await walletActivities.json();
        context.commit("SET_LOADING_STATUS", false);
        context.commit(
          "SET_WALLET_ACTIVITIES",
          walletActivitiesResponse.data.transactions
        );
      }
      catch (err) {
        return err
      }
    },

    async fundWallet(context, payload) {
      try {
        const addFundRequest = await fetch(
          `${process.env.VUE_APP_BASE_URL}/fund-wallet`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${context.rootState.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const fundedWalletResponse = await addFundRequest.json();
        return fundedWalletResponse
      }
      catch (err) {
        return err
      }
    },
  },

  getters: {
    userWallet: state => state.walletInfo,
    userWalletActivities: state => state.walletHistory,
    transactionLogStatus: state => state.isLoading
  },
};

export default Wallet;
