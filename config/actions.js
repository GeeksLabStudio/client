module.exports = {
  auth: {
    login: {
      success: 'AUTH_LOGIN_SUCCESS',
      error: 'AUTH_LOGIN_ERROR'
    },
    logout: {
      success: 'AUTH_LOGOUT_SUCCESS',
      error: 'AUTH_LOGOUT_ERROR'
    },
    register: {
      success: 'AUTH_REGISTER_SUCCESS',
      error: 'AUTH_REGISTER_ERROR'
    }
  },

  ui: {
    notification: 'NEW_NOTIFICATION',
    sidebar: 'TOGGLE_SIDEBAR',
    popup: 'TOGGLE_POPUP',
    loader: 'TOGGLE_LOADER'
  },

  user: {
    subscribe: 'SUBSCRIBE'
  },

  blog: {
    fetchList: {
      success: 'FETCH_LIST_SUCCESS',
      error: 'FETCH_LIST_ERROR'
    },
    fetchItem: {
      success: 'FETCH_ITEM_SUCCESS',
      error: 'FETCH_ITEM_ERROR'
    },
  }
}