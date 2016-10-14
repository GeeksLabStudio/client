var components  = require('./components');
var pages       = require('./pages');
var utils       = require('./utils');
var ui          = require('./ui');
var actions     = require('./actions');
var layout      = require('./layout');
var roles       = require('./roles');
var navigation  = require('./navigation');
var api         = require('./api');
var locale      = require('./locale');

module.exports = global.app = {
  config: {
    components,
    pages,
    layout,
    navigation,
    api
  },

  ui,
  actions,
  utils,
  roles,
  locale
}