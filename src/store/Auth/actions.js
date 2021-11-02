const actions = {
  async fetchProfileTypes(context) {
    try {
      const url = 'http://localhost:2100/api/v1/user-types';
      const getProfileTypes = await fetch(url, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        },
      })
      const userProfile = await getProfileTypes.json()
      context.commit('USER_PROFILES', userProfile)
    }
    catch(err) {
      return err.message
    }
  },

  async createUserAccount(context, payload) {
    try {
      const signUpRequest = await fetch('http://localhost:2100/api/v1/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const signUpResponse = await signUpRequest.json() 
      return signUpResponse
    }
    catch(err) {
      return err.message
    }
  },

  async loginRequest(context, payload) {
    try {
      const requestLogin = await fetch('http://localhost:2100/api/v1/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: payload
      })
      const loginResponse = await requestLogin.json()
      if(loginResponse.status === 200) {
        context.rootState.token = loginResponse.data.token
        context.rootState.user = {
          name: loginResponse.data.name,
          email: loginResponse.data.email,
          isEmailVerified: loginResponse.data.emailVerified,
          userId: loginResponse.data.id,
          userType: loginResponse.data.userType
        }
      }
      return loginResponse
    }
    catch(err) {
      return err.message
    }
  }
}

export default actions