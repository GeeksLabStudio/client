var components  = require('./components')
var pages       = require('./pages')
var utils       = require('./utils')
var ui          = require('./ui')
var actions     = require('./actions')
var layout      = require('./layout')
var roles       = require('./roles')

module.exports = global.app = {
  test: true,

  config: {
    components,
    pages,
    layout
  },

  ui,
  actions,
  utils,
  roles
}