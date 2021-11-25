import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const CallUp = {
  state() {
    return {
      terminals: [],
      bookingCategories: [],
      trucks: [],
      addOnServices: [],
      bookingResponse: [],
      callUpPreview: [],
      bookingActivities: []
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default CallUp;
