var prompt = require('prompt');
var schemas = require('./schema.js');
var controller = require('./controller.js');
var colors = require('colors');

prompt.start();

prompt.get(schemas.type, function (err, result) {
  switch(result.type) {
    case 1:
        prompt.get(schemas.component, function (err, result) {
          controller.component(result);
        })
      break;
    case 2:
      prompt.get(schemas.page, function (err, result) {
        controller.page(result);
      })
      break;
    case 3:
      break;
  }
});
// console.log(colors.green('------------------------------------------------------\r\n'));
// console.log(colors.green('\r\n------------------------------------------------------'));