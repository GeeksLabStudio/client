var pages       = require('./pages');
var utils       = require('./utils');
var ui          = require('./ui');
var actions     = require('./actions');
var roles       = require('./roles');
var navigation  = require('./navigation');
var api         = require('./api');
var locale      = require('./locale');

module.exports = global.app = {
  config: {
    pages,
    navigation,
    api
  },

  ui,
  actions,
  utils,
  roles,
  locale
}