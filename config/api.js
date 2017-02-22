module.exports = {
  server: 'http://localhost:3000',
  login: {
  	path: '/api/auth/login',
  	method: 'POST'
  },
  register: {
  	path: '/api/auth/register',
  	method: 'POST'
  },
  profile: {
  	path: '/api/profile/'
  }
}