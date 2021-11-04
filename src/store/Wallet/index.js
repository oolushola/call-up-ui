const Wallet = {
  state() {
    return {
      walletInfo: {
        availableBalance: 0,
        lastDeposit: 0,
        lastAmountSpent: 0,
      },
      walletHistory: [],
      walletStatus: null,
      walletFundingStatus: null,
    };
  },

  mutations: {
    SET_WALLET(state, payload) {
      state.walletStatus = payload.status;
      state.walletInfo = payload.data;
    },
    SET_WALLET_STATUS(state) {
      state.walletStatus = "loading";
    },
    SET_WALLET_ACTIVITIES(state, payload) {
      state.walletStatus = payload.status;
      state.walletHistory = payload;
    },
  },

  actions: {
    async walletInfoRequest(context) {
      const token = context.rootState.token;
      const url = process.env.VUE_APP_BASE_URL;
      context.commit("SET_WALLET_STATUS");
      const walletDetailsRequest = await fetch(`${url}/user/wallet`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const loginReponse = await walletDetailsRequest.json();
      context.commit("SET_WALLET", loginReponse);
      return loginReponse;
    },

    async walletHistory(context) {
      const token = context.rootState.token;
      const url = process.env.VUE_APP_BASE_URL;
      context.commit("SET_WALLET_STATUS");
      const walletActivities = await fetch(`${url}/user/transaction/history`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const walletActivitiesResponse = await walletActivities.json();
      context.commit(
        "SET_WALLET_ACTIVITIES",
        walletActivitiesResponse.data.transactions
      );
    },

    async fundWallet(context, payload) {
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
      console.log(fundedWalletResponse);
    },

    async flwCheckout(context, { flwSecretKey, FLW_URL, RDR_URL, payload, description, img }) {
      try {
        const raveLinkRequest = await fetch(FLW_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            Authorization: `Bearer ${flwSecretKey}`,
          },
          body: {
            tx_ref: payload.transactionRef,
            amount: payload.amount,
            currency: "NGN",
            redirect_url: RDR_URL,
            payment_options: "card",
            meta: {
              consumer_id: 23,
              consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
              email: context.rootState.user.email,
              phonenumber: "080****0810",
              name: context.rootState.user.name,
            },
            customizations: {
              title: `${context.rootState.user.name} wallet funding`,
              description: description,
              logo: img,
            },
          },
        });
        console.log(raveLinkRequest)
        const raveLinkResponse = await raveLinkRequest.json();
        return raveLinkResponse;
      } catch (err) {
        return err;
      }
    },

    async processPayment({dispatch}, payload) {
      try {
        if (payload.paymentMethod === "flutterwave") {
          const flwSecretKey = process.env.VUE_APP_FLW_SECRET_KEY
          const flwPaymentLink = process.env.VUE_APP_FLW_PAYMENT_LINK
          const imageIcon = process.env.VUE_APP_IMG_ICON
          const redirectLink = `${process.env.VUE_APP_BASE_URL}/payment-verification`
          const response = await dispatch('flwCheckout', {
            flwSecretKey,
            FLW_URL: flwPaymentLink,
            RDR_URL: redirectLink,
            payload,
            description: "Call up wallet top up",
            img: imageIcon
          })
          return response;
        }
      } catch (err) {
        return err;
      }
    },
  },

  getters: {
    userWallet(state) {
      return state.walletInfo;
    },
    userWalletActivities(state) {
      return state.walletHistory;
    },
  },
};

export default Wallet;
