var prompt = require('prompt');
var schema = require('./schema.js');
var controller = require('./controller.js');
var colors = require('colors');

prompt.start();

prompt.get(schema, function (err, result) {
  switch(result.type) {
    case 1:
      console.log(colors.green('------------------------------------------------------\r\n'));
      var finish = controller.component(result);
      console.log(colors.green('\r\n------------------------------------------------------'));
      break;
    case 2:

      break;
    case 3:

      break;
  }
});