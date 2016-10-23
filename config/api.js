module.exports = {
  server: 'http://localhost:4000',
  login: {
  	path: '/auth/login',
  	method: 'POST'
  },
  register: {
  	path: '/auth/register',
  	method: 'POST'
  },
  profile: {
  	path: '/auth/'
  },
  blog: {
  	list: {
  		path: '/articles/'
  	},
    item: {
      path: '/articles/'
    }
  }
}