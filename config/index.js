var components  = require('./components')
var pages       = require('./pages')
var utils       = require('./utils')
var ui          = require('./ui')
var actions     = require('./actions')
var layout      = require('./layout')
var roles       = require('./roles')
var navigation  = require('./navigation')

module.exports = global.app = {
  test: true,

  config: {
    components,
    pages,
    layout,
    navigation
  },

  ui,
  actions,
  utils,
  roles
}